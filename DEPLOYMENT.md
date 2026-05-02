# 🚀 Deployment Guide

Complete guide to deploy your TechGadget e-commerce platform to production.

## 📋 Pre-Deployment Checklist

- [ ] Update WhatsApp number in `E-commerce.js` (line ~160)
- [ ] Update company information in HTML footer
- [ ] Update business email in contact section
- [ ] Test all products display correctly
- [ ] Test cart functionality
- [ ] Test WhatsApp checkout
- [ ] Verify all images load properly
- [ ] Clear browser cache and localStorage
- [ ] Test on mobile devices
- [ ] Update domain name (if using custom domain)

---

## 1️⃣ Deploy to Vercel (Recommended - Free & Easy)

### Steps:

1. **Create Vercel Account**
   - Visit https://vercel.com
   - Sign up with GitHub, GitLab, or email
   - Verify email

2. **Upload Project**
   - Option A: Connect to Git repository
     - Push code to GitHub
     - Import on Vercel
   - Option B: Use Vercel CLI
     ```bash
     npm i -g vercel
     vercel
     ```

3. **Configure**
   - Project name: `techgadget`
   - Framework: "Other"
   - Root directory: (leave blank)
   - Click "Deploy"

4. **Get Domain**
   - Vercel provides free domain: `techgadget.vercel.app`
   - Upgrade to custom domain for ~$12/year

**URL**: https://yourproject.vercel.app

---

## 2️⃣ Deploy to Netlify (Free)

### Steps:

1. **Create Netlify Account**
   - Visit https://netlify.com
   - Sign up with GitHub or email

2. **Deploy**
   - Drag & drop entire folder OR
   - Connect GitHub repository

3. **Configure**
   - Select root directory
   - Build command: (leave blank - static site)
   - Publish directory: (leave blank)

4. **Custom Domain**
   - Add domain under Site Settings
   - Follow DNS instructions

**URL**: https://yoursite.netlify.app

---

## 3️⃣ Deploy to Heroku (With Backend - Paid)

### Requirements:
- Heroku account
- Git installed
- Node.js installed

### Steps:

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create techgadget-store

# Add Procfile (if not exists)
echo "web: node server.js" > Procfile

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

**URL**: https://techgadget-store.herokuapp.com

---

## 4️⃣ Deploy to AWS S3 + CloudFront (Static Site)

### Requirements:
- AWS account
- AWS CLI installed

### Steps:

```bash
# Configure AWS
aws configure

# Create S3 bucket
aws s3 mb s3://techgadget-store

# Upload files
aws s3 sync . s3://techgadget-store/

# Enable static website hosting
aws s3 website s3://techgadget-store/ \
  --index-document E-commerce.html \
  --error-document E-commerce.html
```

**URL**: http://techgadget-store.s3-website.amazonaws.com

---

## 5️⃣ Deploy to GitHub Pages (Free)

### Steps:

1. **Create Repository**
   - Go to github.com
   - New repository: `techgadget`
   - Initialize with README

2. **Push Code**
   ```bash
   git clone https://github.com/yourname/techgadget.git
   cd techgadget
   # Copy all files here
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable Pages**
   - Settings → Pages
   - Source: main branch
   - Save

**URL**: https://yourname.github.io/techgadget

---

## 6️⃣ Deploy to Shared Hosting (Bluehost, GoDaddy, etc.)

### Steps:

1. **Upload via FTP/SFTP**
   - Use FileZilla or web host's file manager
   - Upload all files to `/public_html`

2. **Create Database** (if using backend)
   - Create MySQL database
   - Update `server.js` connection settings

3. **Create Node.js Application** (if supported)
   - Use cPanel Node.js Manager
   - Point to `server.js`

4. **Enable SSL Certificate**
   - Use AutoSSL or Let's Encrypt
   - Ensure HTTPS enabled

---

## 🔒 Secure Your Site

### 1. Add HTTPS
```
All platforms above provide free SSL/TLS certificates
Redirect HTTP to HTTPS
```

### 2. Environment Variables
Create `.env` file:
```
WHATSAPP_NUMBER=2348033263053
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

### 3. Protect Sensitive Data
- Never commit `.env` file
- Use `.gitignore`:
  ```
  .env
  node_modules/
  data/
  ```

### 4. Update Security Headers (server.js)
```javascript
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});
```

---

## 📊 Domain Setup

### Register Domain
- **Godaddy**: godaddy.com (~$3/year)
- **Namecheap**: namecheap.com (~$2/year)
- **Domain.com**: domain.com (~$5/year)

### Point to Hosting
Use platform's DNS settings:
- Vercel provides nameservers
- Update at domain registrar
- Wait 24-48 hours for propagation

**Example**: 
```
Nameservers (from Vercel)
ns1.vercel-dns.com
ns2.vercel-dns.com
```

---

## 🔄 Continuous Deployment

### Auto-deploy on GitHub Push (Vercel/Netlify)

```bash
# Vercel auto-deploys on push to GitHub
git push origin main
# Site updates automatically

# Same for Netlify
```

---

## 📱 Send to Customers

### Ways to Share

1. **Direct Link**
   ```
   https://techgadget-store.vercel.app
   ```

2. **QR Code**
   - Generate at qr-code-generator.com
   - Print on business cards

3. **Social Media**
   - Share link on Facebook, Instagram
   - Add to WhatsApp bio

4. **Email**
   ```
   Subject: Visit Our New Tech Store
   Visit: https://your-domain.com
   ```

---

## 📈 Post-Deployment

### Monitor Performance
- Check Analytics (Google Analytics)
- Monitor uptime
- Track conversions

### Maintenance
- Update products weekly
- Respond to WhatsApp inquiries
- Backup data regularly
- Update dependencies monthly

### Optimization
- Compress images
- Optimize CSS/JS
- Enable caching
- Use CDN for images

---

## 🆘 Troubleshooting

### Site Not Loading
- Check domain DNS settings
- Clear browser cache (Ctrl+Shift+Del)
- Verify all files uploaded

### Images Not Showing
- Check image URLs are absolute
- Verify files exist on server
- Test with placeholder image

### WhatsApp Link Broken
- Verify phone number format (no + symbol)
- Test on mobile device
- Use wa.me/... domain

### JavaScript Errors
- Open browser console (F12)
- Check for error messages
- Verify script paths correct

---

## 💡 Pro Tips

1. **Speed Up Site**
   - Use CDN (Cloudflare free)
   - Minify CSS/JS
   - Compress images

2. **SEO Optimization**
   - Add meta descriptions
   - Use proper headings
   - Add alt text to images

3. **Analytics**
   ```html
   <!-- Add to HTML head -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
   ```

4. **Email Integration**
   - Set up SendGrid or Mailgun
   - Send order confirmations

---

## 📞 Support

Need help? Contact:
- Email: support@techgadget.com
- WhatsApp: https://wa.me/2348033263053

---

**Updated**: March 2026  
**Status**: Ready for Production ✅
