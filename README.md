# 🛒 TechGadget E-Commerce Platform

A modern e-commerce platform for buying and selling iPhones and Laptops with WhatsApp payment integration.

## ✨ Features

### 🛍️ Shopping Features
- **Product Catalog** - Browse iPhones and Laptops with detailed descriptions
- **Price Display** - All products show prices in Nigerian Naira (₦)
- **Filtering** - Filter by product type (iPhones, Laptops, All)
- **Search & Sort** - Easy product discovery
- **Product Images** - High-quality product images

### 🛒 Cart System
- **Add to Cart** - Add products to shopping cart
- **Quantity Management** - Increase/decrease quantities
- **Price Calculator** - Automatic subtotal, shipping, and total calculation
- **Cart Persistence** - Cart saved to browser's localStorage
- **Clear Cart** - Remove all items at once

### 💬 Payment Integration
- **WhatsApp Checkout** - Send order details directly to seller via WhatsApp
- **Instant Payment** - Link: `https://wa.me/2348033263053`
- **Order Summary** - Detailed list of items, prices, and totals
- **Quick Buy** - Buy individual products instantly via WhatsApp
- **Payment Methods** - Bank Transfer, Card, Crypto

### 📤 Seller Features
- **Post Products** - Add items for sale with:
  - Product name
  - Category (iPhone/Laptop)
  - Price in ₦
  - Image URL
  - Description
- **Product Listing** - Your products appear immediately in the marketplace
- **Edit Prices** - Update product pricing

### 📞 Contact & Support
- **WhatsApp Chat** - Direct messaging
- **Email Support** - support@techgadget.com
- **Business Hours** - Mon-Fri: 9 AM-6 PM, Sat: 10 AM-4 PM

## 🎨 Product Catalog

### iPhones Available
- iPhone 15 Pro Max - ₦799,000
- iPhone 15 Pro - ₦699,000
- iPhone 15 - ₦599,000
- iPhone 14 - ₦499,000
- iPhone 14 Pro - ₦599,000
- iPhone SE (3rd Gen) - ₦329,000

### Laptops Available
- MacBook Pro 16" M3 Max - ₦2,499,000
- MacBook Air M2 - ₦1,199,000
- Dell XPS 13 - ₦1,299,000
- HP Pavilion - ₦799,000

## 🚀 Getting Started

### Option 1: Open in Browser (Recommended for Testing)
1. Open `E-commerce.html` in your web browser
2. No server setup required for basic functionality
3. Products load from built-in data

### Option 2: Run with Node.js Server

#### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

#### Installation
```bash
# Navigate to project directory
cd "New folder (9)"

# Install dependencies
npm install

# Start server
npm start
```

Server runs on: `http://localhost:3000`

#### API Endpoints
```
GET  /api/products          - Get all products
POST /api/products          - Add new product
GET  /api/cart/:userId      - Get user's cart
POST /api/cart/:userId      - Add to cart
DELETE /api/cart/:userId/:productId  - Remove from cart
POST /api/checkout/:userId  - Checkout
```

## 📁 Project Structure

```
├── E-commerce.html          # Main HTML file
├── E-commerce.js            # Frontend JavaScript
├── E-commerce.css           # Styling
├── server.js                # Express server
├── package.json             # Dependencies
├── README.md               # This file
├── E-commerce/
│   └── data/
│       └── products.json   # Product database
└── image/                  # Product images
```

## 🎯 How to Use

### For Buyers

1. **Browse Products**
   - Click "Shop" in navigation
   - Filter by iPhone or Laptop
   - Click on products to see details

2. **Add to Cart**
   - Click "🛒 Add to Cart" button
   - Product added with preset price
   - Cart count updates in navbar

3. **Checkout**
   - Click "Cart" in navigation
   - Review items and total price
   - Click "💬 Pay via WhatsApp"
   - WhatsApp opens with order details
   - Complete payment with seller

4. **Quick Buy**
   - Click "💬 Buy Now" on any product
   - WhatsApp opens for direct purchase

### For Sellers

1. **Post Product**
   - Click "Sell Device" in navigation
   - Fill in product details:
     - Product name
     - Category (iphone or laptop)
     - Price (in ₦)
     - Image URL
     - Description
   - Click "Post Product for Sale"
   - Product appears immediately

2. **Manage Sales**
   - Receive WhatsApp messages from buyers
   - Arrange payment details
   - Confirm orders

## 💰 Pricing

### Current Prices Include:
- Product price (shown for each item)
- Shipping: ₦5,000 (fixed)
- All prices in Nigerian Naira (₦)

## 🔒 Data Storage

- **Frontend**: Products stored in browser localStorage
- **Backend** (optional): Products saved in `E-commerce/data/products.json`
- **Cart**: Stored in browser localStorage (persists across sessions)

## 🎨 Customization

### Change Business Number
Edit `E-commerce.js` and search for:
```javascript
const whatsappNumber = '2348033263053';
```
Replace with your WhatsApp number (without + symbol)

### Update Company Name
- Change "Tech Gadget" in `E-commerce.html`
- Update footer information

### Add/Remove Products
Edit `E-commerce.js` in the products array:
```javascript
{ id: 11, name: "Product Name", category: "iphone", price: 500000, description: "Description", image: "/image-url.jpg" }
```

### Customize Colors
Edit `E-commerce.css`:
- Primary: `purple`
- Secondary: `pink`
- Background: gradient colors

## 📱 Mobile Responsive

- Fully responsive design
- Mobile-optimized navigation
- Touch-friendly buttons
- Tablet and desktop support

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js + Express
- **Database**: JSON files
- **Payment**: WhatsApp Integration
- **Storage**: LocalStorage API

## 🐛 Troubleshooting

### Cart Items Not Showing
- Clear browser cache and cookies
- Check localStorage is enabled

### Images Not Loading
- Verify image URLs are correct
- Use absolute URLs or place images in `/image` folder

### WhatsApp Link Not Working
- Ensure valid phone number format (without + symbol)
- Check internet connection
- Verify WhatsApp is installed or use web.whatsapp.com

### Products Not Saving
- Ensure browser localStorage is enabled
- Check browser's storage limits

## 📞 Support

- **WhatsApp**: https://wa.me/2348033263053
- **Email**: support@techgadget.com
- **Hours**: Mon-Fri 9 AM-6 PM, Sat 10 AM-4 PM

## 📄 License

Created 2026 - TechGadget Platform

## 🎉 Future Enhancements

- [ ] User authentication & profiles
- [ ] Payment gateway integration (Stripe, Paystack)
- [ ] Advanced search & filters
- [ ] Product reviews & ratings
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Mobile app (React Native)

---

**Version**: 1.0.0  
**Last Updated**: March 2026  
**Status**: ✅ Production Ready
