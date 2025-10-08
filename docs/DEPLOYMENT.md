# Deployment Guide

Complete guide for deploying the BGS Gebäudeservice website to production.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Build Process](#build-process)
3. [Deployment Platforms](#deployment-platforms)
4. [Environment Configuration](#environment-configuration)
5. [Custom Domain Setup](#custom-domain-setup)
6. [SSL/TLS Configuration](#ssltls-configuration)
7. [Performance Optimization](#performance-optimization)
8. [Monitoring & Analytics](#monitoring--analytics)
9. [Rollback Procedures](#rollback-procedures)

## Pre-Deployment Checklist

### Code Quality

- [ ] All linting errors resolved (`pnpm lint`)
- [ ] TypeScript type checking passes (if applicable)
- [ ] No console.log statements in production code
- [ ] All TODO comments addressed or documented

### Performance

- [ ] Images optimized (WebP format, compressed)
- [ ] Bundle size analyzed and optimized
- [ ] Lazy loading implemented for routes
- [ ] Critical CSS inlined (if applicable)

### SEO & Meta

- [ ] Meta tags configured for all pages
- [ ] OpenGraph images set
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Favicon set (all sizes)

### Security

- [ ] Environment variables secured
- [ ] No sensitive data in client code
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CORS properly configured

### Legal

- [ ] Privacy policy updated
- [ ] Cookie consent implemented
- [ ] Terms of service finalized
- [ ] GDPR compliance verified

## Build Process

### Local Build

```bash
# Install dependencies
pnpm install

# Run linter
pnpm lint

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].js      # Main JavaScript bundle
│   ├── vendor-[hash].js     # Vendor dependencies
│   ├── index-[hash].css     # Compiled CSS
│   └── [other-assets]
├── images/                   # Optimized images
├── index.html               # Entry point
├── favicon.ico
└── robots.txt
```

### Build Configuration

Check `vite.config.js` for build settings:

```javascript
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false,         // Disable in production
    minify: 'terser',         // Minification
    target: 'es2015',         // Browser target
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/*']
        }
      }
    }
  }
})
```

## Deployment Platforms

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Zero-configuration deployment
- Automatic HTTPS
- Global CDN
- Automatic preview deployments
- Built-in analytics

**Deployment Steps**:

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

4. **Configure vercel.json** (optional):
   ```json
   {
     "buildCommand": "pnpm build",
     "outputDirectory": "dist",
     "framework": "vite",
     "routes": [
       {
         "src": "/assets/(.*)",
         "headers": {
           "cache-control": "public, max-age=31536000, immutable"
         }
       }
     ],
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           },
           {
             "key": "X-Frame-Options",
             "value": "DENY"
           },
           {
             "key": "X-XSS-Protection",
             "value": "1; mode=block"
           }
         ]
       }
     ]
   }
   ```

5. **Environment Variables** (via Vercel Dashboard):
   - `VITE_API_URL`
   - `VITE_GA_TRACKING_ID`

---

### Option 2: Netlify

**Deployment Steps**:

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Login**:
   ```bash
   netlify login
   ```

3. **Initialize**:
   ```bash
   netlify init
   ```

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

5. **Configure netlify.toml**:
   ```toml
   [build]
     command = "pnpm build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"

   [[headers]]
     for = "/assets/*"
     [headers.values]
       Cache-Control = "public, max-age=31536000, immutable"
   ```

---

### Option 3: Cloudflare Pages

**Deployment Steps**:

1. **Via GitHub Integration**:
   - Connect GitHub repository
   - Configure build settings:
     - Build command: `pnpm build`
     - Output directory: `dist`

2. **Via CLI**:
   ```bash
   npm i -g wrangler
   wrangler pages publish dist
   ```

3. **Configure _redirects**:
   ```
   /*    /index.html   200
   ```

---

### Option 4: Traditional Hosting (Apache/nginx)

**Apache Configuration** (`.htaccess`):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "DENY"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>

# Cache Control
<FilesMatch "\.(css|js|jpg|jpeg|png|gif|webp|svg|ico|woff|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

**nginx Configuration**:

```nginx
server {
  listen 80;
  server_name bgs-service.ch www.bgs-service.ch;
  root /var/www/bgs-service/dist;
  index index.html;

  # Redirect to HTTPS
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl http2;
  server_name bgs-service.ch www.bgs-service.ch;
  root /var/www/bgs-service/dist;
  index index.html;

  # SSL Configuration
  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/key.pem;
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers HIGH:!aNULL:!MD5;

  # Security Headers
  add_header X-Frame-Options "DENY";
  add_header X-Content-Type-Options "nosniff";
  add_header X-XSS-Protection "1; mode=block";
  add_header Referrer-Policy "strict-origin-when-cross-origin";

  # Gzip Compression
  gzip on;
  gzip_types text/css application/javascript image/svg+xml;
  gzip_min_length 1000;

  # Cache Control
  location ~* \.(css|js|jpg|jpeg|png|gif|webp|svg|ico|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  # SPA Routing
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Environment Configuration

### Environment Variables

Create `.env.production`:

```env
# API Configuration
VITE_API_URL=https://api.bgs-service.ch/v1

# Analytics
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
VITE_GTM_ID=GTM-XXXXXXX

# Contact
VITE_CONTACT_EMAIL=info@bgs-service.ch
VITE_PHONE=+41413205610

# Features
VITE_ENABLE_BLOG=true
VITE_ENABLE_NEWSLETTER=true

# Environment
VITE_ENV=production
```

### Loading Environment Variables

In code:

```javascript
const API_URL = import.meta.env.VITE_API_URL
const GA_ID = import.meta.env.VITE_GA_TRACKING_ID
```

## Custom Domain Setup

### DNS Configuration

Add DNS records:

```
Type    Name    Value                       TTL
A       @       76.76.21.21                 300
A       www     76.76.21.21                 300
CNAME   www     bgs-service.ch              300
```

For Vercel:

```
Type    Name    Value                       TTL
CNAME   @       cname.vercel-dns.com        300
CNAME   www     cname.vercel-dns.com        300
```

### Domain Verification

1. Add domain in hosting platform
2. Update DNS records
3. Wait for propagation (up to 48 hours)
4. Verify SSL certificate issued

## SSL/TLS Configuration

### Automatic SSL (Recommended)

Most platforms (Vercel, Netlify, Cloudflare) provide automatic SSL:

- **Vercel**: Automatic Let's Encrypt
- **Netlify**: Automatic Let's Encrypt
- **Cloudflare**: Free Universal SSL

### Manual SSL (Traditional Hosting)

Using Let's Encrypt with Certbot:

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d bgs-service.ch -d www.bgs-service.ch

# Auto-renewal (cron job)
sudo certbot renew --dry-run
```

## Performance Optimization

### 1. Image Optimization

```bash
# Convert to WebP
npx @squoosh/cli --webp auto public/images/*.jpg

# Optimize PNG
npx @squoosh/cli --oxipng auto public/images/*.png
```

### 2. Code Splitting

Vite automatically code-splits by route:

```javascript
// Lazy load routes
const PrivatjetPage = lazy(() => import('./pages/services/PrivatjetReinigung'))
```

### 3. Bundle Analysis

```bash
# Analyze bundle size
npx vite-bundle-visualizer
```

### 4. Compression

Enable Brotli and Gzip compression:

**Vite Plugin** (optional):

```bash
pnpm add -D vite-plugin-compression
```

```javascript
// vite.config.js
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    compression({ algorithm: 'brotliCompress' }),
    compression({ algorithm: 'gzip' })
  ]
})
```

### 5. Caching Strategy

**Static Assets**:
- Cache-Control: `public, max-age=31536000, immutable`
- Hash-based filenames for cache busting

**HTML**:
- Cache-Control: `no-cache`
- Always revalidate

## Monitoring & Analytics

### Google Analytics

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

### Error Tracking

**Sentry** (recommended):

```bash
pnpm add @sentry/react
```

```javascript
// main.jsx
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0
})
```

### Performance Monitoring

Use Lighthouse CI:

```bash
npm i -g @lhci/cli

lhci autorun --config=lighthouserc.json
```

## Rollback Procedures

### Vercel

```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

### Netlify

```bash
# List deployments
netlify deploy:list

# Rollback via dashboard or CLI
netlify rollback
```

### Git-based Rollback

```bash
# Revert to previous commit
git revert HEAD

# Push to trigger re-deployment
git push origin main
```

## CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install pnpm
        run: npm i -g pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Run linter
        run: pnpm lint

      - name: Build
        run: pnpm build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
          VITE_GA_TRACKING_ID: ${{ secrets.VITE_GA_TRACKING_ID }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Post-Deployment Checklist

- [ ] Test all routes and links
- [ ] Verify contact forms work
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify SSL certificate
- [ ] Check analytics tracking
- [ ] Test performance (Lighthouse)
- [ ] Verify SEO meta tags
- [ ] Check error tracking
- [ ] Monitor server logs

---

## Support

For deployment issues:
- **Vercel**: https://vercel.com/support
- **Netlify**: https://www.netlify.com/support/
- **Technical**: Contact development team

---

Last Updated: 2025-10-08
