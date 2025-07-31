# Omar Daghestani - Portfolio 2025

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- ♿ Accessibility focused
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with class-variance-authority

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Omar-Daghestani-2025
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── header.tsx        # Navigation header
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   ├── skills-section.tsx # Skills section
│   ├── projects-section.tsx # Projects section
│   ├── contact-section.tsx # Contact section
│   └── footer.tsx        # Footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Update metadata
- `components/header.tsx` - Update name in header
- `components/hero-section.tsx` - Update hero content
- `components/about-section.tsx` - Update about content
- `components/skills-section.tsx` - Update skills
- `components/projects-section.tsx` - Update projects
- `components/contact-section.tsx` - Update contact information

### Styling
- Colors and theme: Update CSS variables in `app/globals.css`
- Tailwind configuration: Modify `tailwind.config.ts`

### Assets
- Replace `public/cv.pdf` with your actual CV
- Add your profile images to the `public/` directory
- Update project images and links

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: omar.daghestani@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub] 