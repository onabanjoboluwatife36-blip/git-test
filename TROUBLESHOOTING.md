# 🆘 Troubleshooting Guide

Solutions to common problems with your TechGadget store.

---

## 🚨 Critical Issues

### 1. **Store Won't Open in Browser**

**Symptoms**: White screen, blank page, error

**Solutions**:
```
✓ Try different browser (Chrome, Firefox, Edge)
✓ Clear browser cache (Ctrl+Shift+Del)
✓ Hard refresh (Ctrl+F5)
✓ Check file path - use full path or drag file to browser
✓ Disable antivirus/firewall temporarily
```

**Advanced**:
```bash
# If using local server:
npm start
# Then visit: http://localhost:3000
```

---

### 2. **JavaScript Errors in Console**

**How to Check**:
```
1. Open store in browser
2. Press F12 (or Ctrl+Shift+I)
3. Click "Console" tab
4. Look for red error messages
```

**Common Errors & Fixes**:

**Error**: `Uncaught SyntaxError`
```
Fix: Check E-commerce.js for missing brackets
Search for: { [ ( and verify they're closed
```

**Error**: `Cannot read property of undefined`
```
Fix: Check product IDs match
Ensure all products have: id, name, category, price, image
```

**Error**: `localStorage is not available`
```
Fix: Enable cookies in browser:
Chrome: Settings > Privacy > Allow cookies
Firefox: Settings > Privacy > Accept cookies
```

---

### 3. **Products Not Displaying**

**Symptoms**: Shop page empty, no products showing

**Check List**:
```
☐ Page fully loaded? (Wait 3 seconds)
☐ JavaScript enabled? (Check F12 > Console)
☐ Correct category filter? (Try "All")
☐ Products in E-commerce.js array?
☐ No syntax errors? (Check F12 > Console)
```

**Fix**:
```javascript
// Make sure products look like this in E-commerce.js:
let products = [
  { 
    id: 1, 
    name: "iPhone 15", 
    category: "iphone", 
    price: 599000,
    description: "Good description",
    image: "https://valid-image-url.jpg"
  }
];
```

---

## 🖼️ Image Issues

### 4. **Images Not Loading**

**Symptoms**: Placeholder boxes instead of images, broken image icon

**Test Image URL**:
```
1. Copy image URL
2. Paste in new browser tab
3. If it loads, URL is good
4. If it doesn't load, URL is broken
```

**Common Causes**:

**Cause**: HTTP instead of HTTPS
```
❌ http://example.com/image.jpg
✅ https://example.com/image.jpg
Fix: Add 's' to http
```

**Cause**: Invalid URL
```
❌ /images/photo.jpg (relative path)
✅ https://example.com/images/photo.jpg (absolute path)
Fix: Use full URL with https://
```

**Cause**: Image deleted/moved
```
Solution: 
1. Find new image URL
2. Update in E-commerce.js
3. Or use placeholder: https://via.placeholder.com/300
```

**Cause**: Space in URL not encoded
```
❌ https://example.com/my image.jpg
✅ https://example.com/my%20image.jpg
Fix: Replace spaces with %20
```

**Quick Fix - Use Placeholder**:
```javascript
image: "https://via.placeholder.com/300?text=iPhone+15"
```

---

## 🛒 Cart Problems

### 5. **Cart Items Disappear**

**Symptoms**: Added items, but cart empty when refresh

**Solutions**:
```
✓ Check browser allows localStorage
✓ Disable private/incognito mode
✓ Clear browser cache (Ctrl+Shift+Del)
✓ Check browser storage isn't full
✓ Allow site to store data
```

**Browser Settings**:
```
Chrome:
Settings > Cookies & Site Data > Allow all cookies > Save

Firefox:
Settings > Privacy > Cookies > Accept all

Safari:
Preferences > Privacy > Block all cookies OFF
```

---

### 6. **Cart Count Wrong**

**Symptoms**: Shows X items but should be Y

**Causes**:
- Duplicate products in array
- Quantity not updating
- Browser cache issue

**Fix**:
```
1. Click Cart
2. Click "Clear Cart"
3. Add products again
4. Hard refresh: Ctrl+F5
```

---

### 7. **Can't Remove Items from Cart**

**Issue**: Remove button not working

**Solution**:
```
1. Open F12 console
2. Check for JavaScript errors
3. Hard refresh (Ctrl+F5)
4. Try different browser
```

---

## 💬 WhatsApp Integration

### 8. **WhatsApp Link Not Opening**

**Symptoms**: Click "Buy Now" but nothing happens

**Check List**:
```
☐ Internet connected?
☐ WhatsApp installed or browser supports?
☐ Phone number format correct?
☐ JavaScript not blocked?
```

**Fix Phone Number**:
```javascript
// WRONG - has + symbol
const whatsappNumber = '+2348033263053';

// CORRECT - no + symbol
const whatsappNumber = '2348033263053';
```

**Test on Different Devices**:
```
Desktop:
1. Click WhatsApp link
2. Should open web.whatsapp.com/send

Mobile:
1. Click WhatsApp link
2. Should open WhatsApp app
3. If not installed, opens web version
```

**Manual WhatsApp Link**:
```
https://wa.me/2348033263053?text=Hello+I+want+to+buy+iPhone
```

---

### 9. **WhatsApp Message Format Wrong**

**Issue**: Message arrives broken/unformatted

**Solution**:
```javascript
// Use proper formatting:
const message = `
Hello! I'm interested in:

*iPhone 15 Pro*
Price: ₦699,000

Please confirm. Thanks!
`;

// NOT like this:
const message = "Hello, I want iPhone 15 Pro";
```

---

### 10. **Can't Copy WhatsApp Link**

**Solution**: Use manual method:
```
1. Right-click "Buy Now" button
2. Select "Copy Link"
3. Share manually
```

---

## 💰 Payment Issues

### 11. **Price Calculation Wrong**

**Symptoms**: Subtotal, shipping, or total shows wrong amount

**Check**:
```javascript
// Check shipping cost in E-commerce.js
const shipping = 5000; // Should be set

// Check product prices are numbers
price: 599000  ✅ (correct)
price: "599000"  ❌ (wrong - string)
```

**Fix**:
```javascript
// In updateCartSummary function:
let subtotal = 0;
cart.forEach(item => {
  subtotal += item.price * item.quantity;
});
const shipping = 5000;
const total = subtotal + shipping;
```

---

### 12. **Prices Not Showing on Products**

**Symptoms**: Product cards empty where price should be

**Check Product HTML**:
```html
<!-- Check in E-commerce.js loadProducts() -->
<div class="product-price">₦${product.price.toLocaleString()}</div>
<!-- Should have: -->
<!-- 1. product-price class -->
<!-- 2. product.price value -->
<!-- 3. toLocaleString() for formatting -->
```

**Fix Product Display**:
```javascript
// Make sure products display like this:
const productHTML = `
  <div class="product">
    <h3>${product.name}</h3>
    <div class="product-price">₦${product.price.toLocaleString()}</div>
    <button>Add to Cart</button>
  </div>
`;
```

---

## 🏪 Seller Issues

### 13. **Can't Add New Product**

**Symptoms**: "Post Product" button not working

**Check**:
```
☐ All fields filled? (Name, Category, Price, Image, Description)
☐ Category exactly "iphone" or "laptop"? (no spaces)
☐ Price is a number?
☐ Image URL starts with https://?
☐ No JavaScript errors? (F12 > Console)
```

**Test Form**:
```javascript
// Open F12 console and manually run:
let testProduct = {
  id: 999,
  name: "Test iPhone",
  category: "iphone",
  price: 500000,
  image: "https://via.placeholder.com/300",
  description: "Test"
};
products.push(testProduct);
console.log(products);
```

---

### 14. **Posted Product Not Showing**

**Symptoms**: Added product but it doesn't appear

**Solutions**:
```
1. Refresh page (F5)
2. Hard refresh (Ctrl+F5)
3. Clear cache (Ctrl+Shift+Del)
4. Check product category (iphone or laptop)
5. Check active filter button
```

**Check Filter**:
```javascript
// Make sure filter matches category
Filter "All" → shows all products
Filter "iPhone" → shows only iphone category
Filter "Laptop" → shows only laptop category

// Category must match filter
category: "iphone" ✅ (shows in iPhone filter)
category: "Apple" ❌ (won't show anywhere)
```

---

### 15. **Can't Edit Product Price**

**Solutions**:
```
Option 1: Re-post with new price
Option 2: Edit E-commerce.js directly
Option 3: Tell customer new price via WhatsApp
```

---

## 🌐 Server Issues (If Using Backend)

### 16. **Server Won't Start**

```bash
# Check Node.js installed:
node --version

# Check npm installed:
npm --version

# Check dependencies installed:
npm install

# Try starting:
npm start

# If port 3000 in use:
TYPE netstat -ano | FINDSTR :3000  (Windows)
netstat -ano | grep :3000  (Mac/Linux)
Kill process or use different port
```

---

### 17. **API Endpoints Not Working**

**Test API**:
```
1. Open browser console
2. Copy and run:
   fetch('http://localhost:3000/api/products')
   .then(r => r.json())
   .then(d => console.log(d))
```

**Common Errors**:
```
CORS Error → Check server.js has cors() enabled
404 Error → Check endpoint path in server.js
Connection refused → Server not running, do: npm start
```

---

## 🔒 Security Issues

### 18. **WhatsApp Number Exposed**

**Solution**: It's okay! Using WhatsApp is public anyway
```
- Your number is meant to be shared
- Customers need it to buy
- Use WhatsApp Business for extra features
```

---

### 19. **Malicious Input in Products**

**Symptoms**: Strange code in product names/descriptions

**Prevention**:
```javascript
// Validate input in addProduct function:
if (!/^[a-zA-Z0-9\s\-']+$/.test(name)) {
  alert("Invalid product name");
  return;
}
```

---

## 📊 Performance Issues

### 20. **Site Loading Slow**

**Symptoms**: Takes 5+ seconds to load

**Solutions**:
```
1. Compress images (use ImageOptim or TinyPNG)
2. Use smaller image dimensions
3. Minimize CSS/JavaScript
4. Use CDN for images
5. Check internet speed
```

---

## 🆘 Can't Find Your Issue?

### Debug Steps:

**Step 1**: Open Browser Console
```
Press F12
Click "Console" tab
Look for red errors
```

**Step 2**: Check Files
```
Make sure all 3 main files exist:
✓ E-commerce.html
✓ E-commerce.js
✓ E-commerce.css
```

**Step 3**: Try Different Browser
```
Chrome, Firefox, Safari, Edge
Each behaves slightly different
```

**Step 4**: Clear Everything
```
Ctrl+Shift+Del (clear cache)
Close and reopen browser
Hard refresh: Ctrl+F5
```

**Step 5**: Get Help
```
WhatsApp: https://wa.me/2348033263053
Email: support@techgadget.com
```

---

## 📋 Quick Checklist

Before saying "it's broken":

- [ ] Hard refresh (Ctrl+F5)
- [ ] Check F12 console for errors
- [ ] Try different browser
- [ ] Check files exist
- [ ] Clear browser cache
- [ ] Disable extensions
- [ ] Test on mobile
- [ ] Check internet

---

## 💡 Pro Debugging Tips

### Enable Debugging in Code:

```javascript
// Add to E-commerce.js for debugging
console.log("Products:", products);
console.log("Cart:", cart);
console.log("Cart saved to localStorage:", localStorage.getItem('cart'));

// Check if function runs:
function loadProducts(filter) {
  console.log("loadProducts called with filter:", filter);
  // ... rest of code
}
```

---

**Last Updated**: March 2026  
**Version**: 1.0  
**Status**: Complete ✅

**Still stuck?** Contact: support@techgadget.com
