/**
 * TechGadget Configuration File
 * Modify this file to customize your e-commerce platform
 */

const CONFIG = {
  // ===== BUSINESS INFO =====
  businessName: "TechGadget",
  businessTagline: "Buy & Sell iPhones & Laptops at the Best Prices",
  businessEmail: "support@techgadget.com",
  businessPhone: "+234-800-000-0000",
  
  // ===== WHATSAPP INTEGRATION =====
  whatsappNumber: "2348033263053", // Without + symbol
  whatsappBusinessName: "TechGadget",
  
  // ===== SHIPPING =====
  shippingCost: 5000, // In Naira (₦)
  shippingTimeframe: "2-3 Business Days",
  
  // ===== CURRENCY =====
  currency: "₦", // Nigerian Naira
  currencyCode: "NGN",
  
  // ===== PAYMENT METHODS =====
  paymentMethods: [
    "Bank Transfer",
    "Debit Card",
    "Credit Card",
    "Cryptocurrency"
  ],
  
  // ===== BUSINESS HOURS =====
  businessHours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  
  // ===== STORE LOCATION =====
  address: "Tech Gadget Hub",
  city: "Lagos",
  state: "Nigeria",
  zipCode: "100001",
  
  // ===== SOCIAL MEDIA =====
  socialLinks: {
    facebook: "https://facebook.com/techgadget",
    instagram: "https://instagram.com/techgadget",
    twitter: "https://twitter.com/techgadget",
    linkedin: "https://linkedin.com/company/techgadget"
  },
  
  // ===== COLORS & STYLING =====
  theme: {
    primary: "purple",
    secondary: "pink",
    accent: "#667eea",
    dark: "#333",
    light: "#f9f9f9"
  },
  
  // ===== PRODUCT CATEGORIES =====
  categories: ["iphone", "laptop"],
  
  // ===== FEATURED PRODUCTS =====
  featuredCount: 4,
  
  // ===== LOYALTY PROGRAM =====
  loyaltyEnabled: true,
  loyaltyDiscountPercentage: 5,
  
  // ===== SEO =====
  siteTitle: "TechGadget - Buy & Sell iPhones & Laptops",
  siteDescription: "Buy or sell iPhones and Laptops at the best prices in Nigeria. Secure WhatsApp payment integration.",
  siteKeywords: ["iPhone", "Laptop", "Electronics", "Buy", "Sell", "Nigeria"],
  
  // ===== API ENDPOINTS (if using backend) =====
  apiBaseUrl: "http://localhost:3000",
  apiEndpoints: {
    products: "/api/products",
    cart: "/api/cart",
    checkout: "/api/checkout",
    register: "/api/register",
    login: "/api/login"
  }
};

// ===== HELPER FUNCTIONS =====

/**
 * Format price with currency
 */
function formatPrice(price) {
  return `${CONFIG.currency}${price.toLocaleString()}`;
}

/**
 * Get WhatsApp link
 */
function getWhatsAppLink(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Get business address
 */
function getBusinessAddress() {
  return `${CONFIG.address}, ${CONFIG.city}, ${CONFIG.state} ${CONFIG.zipCode}`;
}

// Export for use in other files (if using ES6 modules)
// export default CONFIG;
