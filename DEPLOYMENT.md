# Deployment Guide

## Vercel (Recommended)

1. Push code ke GitHub repository
2. Connect repository ke Vercel
3. Deploy automatically

```bash
npm run build
npx vercel --prod
```

## Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

## Self-hosted

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## Environment Variables

Create `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
NEXT_PUBLIC_WHATSAPP_NUMBER=628211234567
```

## Performance Optimization

### 1. Image Optimization
- All images are optimized using Next.js Image component
- WebP format is automatically served when supported
- Lazy loading is enabled by default

### 2. Code Splitting
- Next.js automatically splits code by pages
- Dynamic imports used for heavy components

### 3. Caching
- Static assets are cached for 1 year
- API responses cached appropriately

### 4. SEO
- Meta tags optimized for social sharing
- JSON-LD structured data included
- Sitemap generated automatically

## Monitoring

### Web Vitals
- Core Web Vitals are tracked
- Performance metrics sent to analytics

### Error Tracking
Consider adding:
- Sentry for error tracking
- LogRocket for session recording

## Security

### Headers
Add security headers in `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## Analytics

### Google Analytics
Add GA4 tracking:

```javascript
// pages/_app.js or app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
    </html>
  )
}
```

### Facebook Pixel
Add Facebook Pixel for marketing:

```javascript
// Add to head section
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```
