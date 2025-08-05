# Omar Daghestani - Portfolio 2025

A modern, high-performance portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features advanced performance optimizations, smooth animations, and a responsive design.

## ✨ Features

- 🎨 **Modern, responsive design** with dark mode support
- ⚡ **High performance** with optimized bundle size and lazy loading
- 🎭 **Smooth animations** with Framer Motion
- 📱 **Mobile-first approach** with excellent responsive design
- ♿ **Accessibility focused** with proper ARIA labels and keyboard navigation
- 🎯 **SEO optimized** with metadata and structured data
- 🔍 **Interactive skills filtering** with search and category filters
- 📧 **Functional contact form** with Formspree integration
- 🎪 **Project carousel** with smooth navigation
- 📊 **Performance monitoring** with Core Web Vitals tracking
- 🚀 **Optimized for speed** with bundle analysis and tree shaking

## 🛠 Tech Stack

### Core Technologies

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion with centralized utilities
- **Icons**: Lucide React with optimized imports

### Performance & Optimization

- **Bundle Analysis**: @next/bundle-analyzer
- **Code Splitting**: Dynamic imports and lazy loading
- **Tree Shaking**: Optimized imports and dead code elimination
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Font Optimization**: Google Fonts with display swap

### UI Components

- **Custom Components**: Built with class-variance-authority
- **Radix UI**: Accessible primitives for tooltips and dialogs
- **Embla Carousel**: Smooth project carousel
- **Form Handling**: React Hook Form with validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/OmarDaghestani/Omar-Daghestani-2025.git
cd Omar-Daghestani-2025
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
# Add your Formspree endpoint
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page with lazy loading
├── components/            # React components
│   ├── ui/               # Reusable UI components (Button, Card, etc.)
│   ├── header.tsx        # Navigation header
│   ├── hero-section.tsx  # Hero section with prominent name display
│   ├── about-section.tsx # About section
│   ├── skills-section.tsx # Skills section with filtering
│   ├── skills-filter.tsx # Interactive skills filter component
│   ├── projects-section.tsx # Projects section with carousel
│   ├── insights-section.tsx # Insights section
│   ├── contact-section.tsx # Contact section with form
│   ├── footer.tsx        # Footer
│   ├── custom-cursor.tsx # Custom cursor component
│   ├── scroll-progress-indicator.tsx # Scroll progress
│   └── performance-monitor.tsx # Performance tracking
├── hooks/                # Custom React hooks
│   ├── use-mouse-position.ts
│   └── use-scroll.ts
├── lib/                  # Utility functions and data
│   ├── constants.ts      # App constants
│   ├── utils.ts          # General utilities
│   ├── motion-utils.ts   # Framer Motion utilities
│   ├── icon-utils.ts     # Icon management
│   ├── skills-data.ts    # Skills data
│   ├── projects-data.ts  # Projects data
│   └── contact-utils.ts  # Contact form utilities
├── public/               # Static assets
│   ├── Omar-Daghestani-Resume-2025.pdf
│   └── project-images/
└── next.config.js        # Next.js configuration with optimizations
```

## ⚡ Performance Optimizations

### Bundle Optimization

- **Tree Shaking**: Enabled for all dependencies
- **Code Splitting**: Lazy loading for non-critical components
- **Bundle Analysis**: Integrated bundle analyzer for monitoring
- **Optimized Imports**: Centralized icon and motion utilities

### Webpack Configuration

- **Chunk Splitting**: Separate chunks for Framer Motion, UI libraries, and commons
- **Module Resolution**: Optimized for better deduplication
- **Compression**: Enabled for production builds

### Image & Font Optimization

- **Next.js Image**: Automatic optimization with WebP/AVIF
- **Font Display**: Swap for better loading performance
- **Preconnect**: Optimized font loading

## 🎨 Customization

### Personal Information

Update the following files with your information:

#### Core Information

- `app/layout.tsx` - Update metadata and SEO information
- `components/hero-section.tsx` - Update hero content and name
- `components/about-section.tsx` - Update about content
- `lib/constants.ts` - Update resume URL and contact links

#### Skills & Projects

- `lib/skills-data.ts` - Update skills, proficiency levels, and categories
- `lib/projects-data.ts` - Update projects, descriptions, and links

#### Contact Information

- `components/contact-section.tsx` - Update contact form
- `components/footer.tsx` - Update social links
- `.env.local` - Update Formspree endpoint

### Styling & Theme

- **Colors**: Update CSS variables in `app/globals.css`
- **Tailwind**: Modify `tailwind.config.ts` for custom design tokens
- **Animations**: Customize motion variants in `lib/motion-utils.ts`

### Assets

- **Resume**: Replace `public/Omar-Daghestani-Resume-2025.pdf`
- **Images**: Add project images to `public/project-images/`
- **Icons**: Update icon mappings in `lib/icon-utils.ts`

## 📊 Performance Monitoring

### Bundle Analysis

```bash
# Generate bundle analysis report
ANALYZE=true npm run build
```

### Core Web Vitals

The portfolio includes built-in performance monitoring for:

- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Automatic deployment with build hooks
- **Railway**: Container-based deployment
- **DigitalOcean App Platform**: Managed deployment
- **AWS Amplify**: AWS integration

## 📜 Scripts

- `npm run dev` - Start development server with Turbo
- `npm run build` - Build for production with optimizations
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `ANALYZE=true npm run build` - Build with bundle analysis

## 🔧 Development

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured for Next.js and React
- **Prettier**: Code formatting (if configured)

### Performance Guidelines

- Use lazy loading for non-critical components
- Optimize images with Next.js Image component
- Minimize bundle size with tree shaking
- Monitor Core Web Vitals in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: omar.daghestani@gmail.com
- **LinkedIn**: [Omar Daghestani](https://linkedin.com/in/omar-daghestani)
- **GitHub**: [@OmarDaghestani](https://github.com/OmarDaghestani)
- **Portfolio**: [omar-daghestani.com](https://omar-daghestani.com)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
