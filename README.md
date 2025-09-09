# Mazita E-commerce Website

Modern e-commerce website untuk Mazita - No.1 Wet Dry Vacuum Cleaner Brand di Indonesia

![Mazita Website](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop)

## 🌟 Features

- 🎨 **Modern Design** - Clean, professional design dengan DM Sans typography
- ⚡ **High Performance** - Built dengan Next.js 14 untuk kecepatan optimal
- 📱 **Responsive** - Perfect di semua device (mobile, tablet, desktop)
- 🔄 **Smooth Animations** - Beautiful animations dengan Framer Motion
- 🎯 **SEO Optimized** - Meta tags, JSON-LD, dan structured data
- � **E-commerce Ready** - Siap untuk integrasi sistem pembayaran
- � **WhatsApp Integration** - Direct chat dengan customer service
- � **Multi-language Ready** - Struktur mendukung bahasa Indonesia & English

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** DM Sans (Google Fonts)
- **Deployment:** Vercel Ready

## 📦 Installation

1. **Clone repository:**
```bash
git clone https://github.com/your-username/mazita-ecommerce.git
cd mazita-ecommerce
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── LoadingProvider.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── CategoryNav.tsx
│   ├── ProductGrid.tsx
│   ├── PromoBanners.tsx
│   ├── Testimonials.tsx
│   ├── Newsletter.tsx
│   ├── BrandSection.tsx
│   ├── Footer.tsx
│   ├── FloatingButtons.tsx
│   └── JsonLd.tsx
├── config/               # Configuration files
│   └── site.ts
└── data/                # Static data
    └── products.json
```

## 🎨 Components Overview

### 🔝 **Header**
- Logo dan navigation
- Search bar dengan autocomplete
- Shopping cart dengan counter
- User authentication buttons

### 🦸 **Hero Section**
- Gradient background dengan animasi
- CTA buttons untuk engagement
- Product showcase dengan floating elements

### 🏷️ **Category Navigation**
- 6 kategori utama dengan icons
- Hover effects dan smooth transitions
- Mobile-friendly grid layout

### 🛍️ **Product Grid**
- Product cards dengan rating dan reviews
- Price comparison (original vs discounted)
- Add to cart functionality
- Wishlist integration

### 🎁 **Promo Banners**
- 6 promotional banners dengan gradient backgrounds
- Call-to-action buttons
- Responsive grid layout

### 💬 **Testimonials**
- Customer reviews dengan photos
- 5-star rating system
- Product references

### 📧 **Newsletter**
- Email subscription dengan validation
- Gradient background design
- Privacy-conscious messaging

### 🏢 **Brand Section**
- Partner brand logos
- Grayscale to color hover effects
- Trusted brands showcase

### 📞 **Floating Buttons**
- WhatsApp chat integration
- Back to top functionality
- Smooth scroll behavior

## 🎨 Design System

### Color Palette
```css
Primary Blue: #3b82f6
Secondary Purple: #a855f7
Accent Yellow: #eab308
Success Green: #22c55e
Danger Red: #ef4444
```

### Typography
- **Primary Font:** DM Sans (Google Fonts)
- **Headings:** Font weights 600-800
- **Body:** Font weight 400-500
- **Buttons:** Font weight 600

### Responsive Breakpoints
```css
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large */
```

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=628211234567
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
```

### Site Configuration
Edit `src/config/site.ts`:
```typescript
export const siteConfig = {
  name: 'Mazita',
  title: 'Mazita - No.1 Wet Dry Vacuum Cleaner Brand',
  description: 'Your site description...',
  // ... more config
}
```

## 📈 SEO Features

- ✅ Meta tags optimization
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card integration
- ✅ JSON-LD structured data
- ✅ Sitemap generation ready
- ✅ Robot.txt optimization
- ✅ Canonical URLs

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

### Manual Deployment
```bash
npm run build
npm start
```

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+ (Performance)
- 🎯 **Core Web Vitals:** Optimized
- 📱 **Mobile-First:** Responsive design
- 🖼️ **Image Optimization:** Next.js Image component
- 🔄 **Lazy Loading:** Automatic content loading

## 🛠️ Development

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
```

### Code Quality
- **TypeScript** untuk type safety
- **ESLint** untuk code linting
- **Prettier** untuk code formatting
- **Husky** untuk git hooks (optional)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- 💬 **WhatsApp:** +62 821 1234 5678
- 📧 **Email:** info@mazita.com
- 🌐 **Website:** https://mazita.com

## 🙏 Acknowledgments

- **Next.js Team** untuk amazing framework
- **Tailwind CSS** untuk utility-first CSS
- **Framer Motion** untuk smooth animations
- **Lucide** untuk beautiful icons
- **Unsplash** untuk high-quality images

---

**Made with ❤️ for Mazita Electronics**
