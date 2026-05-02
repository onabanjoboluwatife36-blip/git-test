// ================== INITIAL PRODUCTS DATA ==================
let products = [
  // IPHONES
  { id: 1, name: "iPhone 15 Pro Max", category: "iphone", price: 799000, description: "Latest 6.7 inch display, A17 Pro chip, 256GB, Warranty included, Excellent condition", image: "iphone 15 pro max.jpg" },
  { id: 2, name: "iPhone 15 Pro", category: "iphone", price: 699000, description: "6.1 inch Titanium design, 48MP camera, 128GB, Never used, Original box included", image: "iphone 15 pro.webp" },
  { id: 3, name: "iPhone 15", category: "iphone", price: 599000, description: "Powerful A17 Pro chip, 120Hz display, 128GB, Like new condition, 1 year warranty", image: "iphone15.webp" },
  { id: 4, name: "iPhone 14 Pro Max", category: "iphone", price: 549000, description: "Dynamic Island display, Pro Max size, 256GB, Excellent condition, Full warranty", image: "iphone14.jpg" },
  { id: 5, name: "iPhone 14 Pro", category: "iphone", price: 599000, description: "5G enabled, Dual camera system, 256GB, Professional grade, Original accessories", image: "iphone14pro.webp"},
  { id: 6, name: "iPhone SE (3rd Gen)", category: "iphone", price: 329000, description: "Compact & powerful, great for budget, 128GB, Perfect for students, Warranty included", image: "iphonese.webp" },
  // LAPTOPS
  { id: 7, name: "MacBook Air M2", category: "laptop", price: 1199000, description: "Apple Silicon M2, 256GB SSD, 8GB RAM, Lightweight & portable, 2024 model, Perfect for work", image: "macbookairm2.webp"},
  { id: 8, name: "MacBook Air M1", category: "laptop", price: 899000, description: "Apple Silicon M1, 512GB SSD, 8GB RAM, Long battery life, Excellent performer, Like new", image: "macbookairm1.webp" },
  { id: 9, name: "MacBook Pro 14", category: "laptop", price: 1899000, description: "Apple Silicon, 512GB SSD, 16GB RAM, Apple Pro Display, Professional workstation", image: "macbook14 .webp" },
  { id: 10, name: "Dell XPS 13", category: "laptop", price: 1299000, description: "Intel i7, RTX Graphics, 512GB SSD, 16GB RAM, Premium performer, Great for gaming", image: "dellxps13.webp" },
  { id: 11, name: "HP Pavilion Gaming", category: "laptop", price: 799000, description: "Intel i5, 8GB RAM, 256GB SSD, Perfect for students, Gaming capable, Great value", image: "HP Pavilion.jpg" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// ================== SECTION NAVIGATION ==================
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  event.target?.classList.add('active');

  if (sectionId === 'products') loadProducts('all');
  if (sectionId === 'cart') displayCart();

  window.scrollTo(0, 0);
}

// ================== PRODUCT MANAGEMENT ==================
function loadProducts(filter = 'all') {
  currentFilter = filter;
  const productList = document.getElementById('productList');

  let filtered = products;
  if (filter !== 'all') filtered = products.filter(p => p.category === filter);

  productList.innerHTML = '';
  if (filtered.length === 0) {
    productList.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #999;">No products found in this category. Try another filter!</div>';
    return;
  }
  filtered.forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/250?text=${product.name}'" loading="lazy">
        <div class="product-content">
          <span class="product-category">${product.category.toUpperCase()}</span>
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <div class="product-price">₦${product.price.toLocaleString()}</div>
          <div class="product-buttons">
            <button class="btn-add-cart" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
            <button class="btn-buy" onclick="buyNow(${product.id})">💬 Buy Now</button>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += productHTML;
  });
}

function filterProducts(filter) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target?.classList.add('active');
  loadProducts(filter);
}

// ================== CART MANAGEMENT ==================
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return alert("Product not found!");

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1, price: product.price });
  }

  saveCart();
  updateCartCount();
  displayCart();
  alert(`✓ ${product.name} added to cart at ₦${product.price.toLocaleString()}!`);
}


function buyNow(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return alert("Product not found!");

  const message = `Hello! I'm interested in buying this product:\n\n*${product.name}*\n💰 Price: ₦${product.price.toLocaleString()}\n📱 Category: ${product.category.toUpperCase()}\n\nPlease confirm availability and arrange payment. Thank you!`;
  const whatsappNumber = '2348033263053';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function displayCart() {
  const cartItems = document.getElementById('cartItems');

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">🛒 Your cart is empty. <a href="#" onclick="showSection(\'products\')">Continue Shopping</a></div>';
    document.querySelector('.cart-summary').style.display = 'none';
    return;
  }

  document.querySelector('.cart-summary').style.display = 'block';
  cartItems.innerHTML = '';

  cart.forEach((item, index) => {
    const cartHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
        </div>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <button class="btn-remove" onclick="removeFromCart(${index})">🗑️ Remove</button>
      </div>
    `;
    cartItems.innerHTML += cartHTML;
  });

  updateCartSummary();
}

  const cartItems = document.getElementById('cartItems');

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">🛒 Your cart is empty. <a href="#" onclick="showSection(\'products\')">Continue Shopping</a></div>';
    document.querySelector('.cart-summary').style.display = 'none';
    // return;
  }

  document.querySelector('.cart-summary').style.display = 'block';
  cartItems.innerHTML = '';

  cart.forEach((item, index) => {
    const cartHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
        </div>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <button class="btn-remove" onclick="removeFromCart(${index})">🗑️ Remove</button>
      </div>
    `;
    cartItems.innerHTML += cartHTML;
  });

  updateCartSummary();
function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) removeFromCart(index);
  else {
    saveCart();
    displayCart();
    updateCartCount();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  displayCart();
  updateCartCount();
}

function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    cart = [];
    saveCart();
    displayCart();
    updateCartCount();
  }
}

function updateCartSummary() {
  let subtotal = 0;
  cart.forEach(item => subtotal += item.price * item.quantity);

  const shipping = cart.length > 0 ? 5000 : 0;
  const total = subtotal + shipping;

  document.getElementById('subtotal').textContent = `₦${subtotal.toLocaleString()}`;
  document.getElementById('shipping').textContent = `₦${shipping.toLocaleString()}`;
  document.getElementById('totalPrice').textContent = `₦${total.toLocaleString()}`;
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = totalItems;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ================== CHECKOUT VIA WHATSAPP ==================
function checkoutViaWhatsApp() {
  if (cart.length === 0) return alert('Your cart is empty!');

  let message = '*🛍️ TechGadget.com Order*\n\n*📦 ITEMS ORDERED:*\n';
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `${index + 1}. *${item.name}*\n   📱 ${item.category.toUpperCase()}\n   Qty: ${item.quantity} × ₦${item.price.toLocaleString()} = ₦${itemTotal.toLocaleString()}\n\n`;
  });

  const shipping = 5000;
  const grandTotal = total + shipping;
  message += `*💰 ORDER SUMMARY:*\n─────────────────\nSubtotal: ₦${total.toLocaleString()}\n🚚 Shipping: ₦${shipping.toLocaleString()}\n─────────────────\n*TOTAL: ₦${grandTotal.toLocaleString()}*\n\n⏰ Delivery Time: 2-3 Business Days\n✅ Payment Methods: Bank Transfer, Card, Crypto\n\nPlease confirm this order and I'll arrange payment. Thank you! 🙏`;

  const whatsappNumber = '2348033263053';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// ================== SELL PRODUCT ==================
function addProduct(event) {
  event.preventDefault();

  const name = document.getElementById('sellName').value;
  const category = document.getElementById('sellCategory').value.toLowerCase();
  const price = parseInt(document.getElementById('sellPrice').value);
  const image = document.getElementById('sellImage').value;
  const description = document.getElementById('sellDescription').value;

  if (!['iphone', 'laptop'].includes(category)) return alert('Category must be either "iphone" or "laptop"');

  const newProduct = {
    id: Math.max(...products.map(p => p.id), 0) + 1,
    name,
    category,
    price,
    image,
    description
  };

  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));

  document.querySelector('.sell-form').reset();
  alert(`✓ Product "${name}" posted successfully!`);
  showSection('home');
}

// ================== LOAD SAVED DATA ==================
function loadSavedProducts() {
  const saved = localStorage.getItem('products');
  if (saved) products = JSON.parse(saved);
}

// ================== INITIALIZE ==================
window.addEventListener('DOMContentLoaded', () => {
  loadSavedProducts();
  updateCartCount();
  loadProducts('all');

  document.getElementById('home').classList.add('active');
  document.querySelector('.nav-link').classList.add('active');
});

