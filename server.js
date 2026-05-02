
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from current directory

// Data directory
const dataDir = path.join(__dirname, 'data');

// Helper functions
function readData(fileName) {
    const filePath = path.join(dataDir, fileName);
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

function writeData(fileName, data) {
    const filePath = path.join(dataDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// API Endpoints

// Get all products
app.get('/api/products', (req, res) => {
    const products = readData('products.json');
    res.json(products);
});

// Add new product (for selling)
app.post('/api/products', (req, res) => {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
        return res.status(400).json({ error: 'Name, price, and image are required' });
    }

    const products = readData('products.json');
    const newProduct = {
        id: Date.now(),
        name,
        price: parseFloat(price),
        image
    };

    products.push(newProduct);
    writeData('products.json', products);
    res.status(201).json(newProduct);
});

// Register new user
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const users = readData('users.json');
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
    }

    const newUser = {
        id: Date.now(),
        username,
        password // In a real app, hash the password
    };

    users.push(newUser);
    writeData('users.json', users);
    res.status(201).json({ id: newUser.id, username: newUser.username });
});

// Login user
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const users = readData('users.json');
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ id: user.id, username: user.username });
});

// Get user's cart
app.get('/api/cart/:userId', (req, res) => {
    const { userId } = req.params;
    const carts = readData('carts.json');
    const userCart = carts.find(cart => cart.userId == userId);
    if (!userCart) {
        return res.json([]);
    }
    res.json(userCart.items);
});

// Add item to cart
app.post('/api/cart/:userId', (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
        return res.status(400).json({ error: 'Product ID and quantity are required' });
    }

    const carts = readData('carts.json');
    let userCart = carts.find(cart => cart.userId == userId);
    if (!userCart) {
        userCart = { userId: parseInt(userId), items: [] };
        carts.push(userCart);
    }

    const existingItem = userCart.items.find(item => item.id == productId);
    if (existingItem) {
        existingItem.quantity += parseInt(quantity);
    } else {
        userCart.items.push({ id: parseInt(productId), quantity: parseInt(quantity) });
    }

    writeData('carts.json', carts);
    res.json(userCart.items);
});

// Remove item from cart
app.delete('/api/cart/:userId/:productId', (req, res) => {
    const { userId, productId } = req.params;
    const carts = readData('carts.json');
    const userCart = carts.find(cart => cart.userId == userId);
    if (!userCart) {
        return res.status(404).json({ error: 'Cart not found' });
    }

    userCart.items = userCart.items.filter(item => item.id != productId);
    writeData('carts.json', carts);
    res.json(userCart.items);
});

// Checkout
app.post('/api/checkout/:userId', (req, res) => {
    const { userId } = req.params;
    const { name, email, address } = req.body;
    if (!name || !email || !address) {
        return res.status(400).json({ error: 'Name, email, and address are required' });
    }

    const carts = readData('carts.json');
    const userCart = carts.find(cart => cart.userId == userId);
    if (!userCart || userCart.items.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
    }
    // Clear the cart
    userCart.items = [];
    writeData('carts.json', carts);

    res.json({ message: `Thank you for your order, ${name}! Your order will be shipped to ${address}.` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
