# Animated Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS v3.4.17, and Framer Motion.

## 🚀 Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme support with next-themes
- ⚡ Built with Next.js 15 and React 19
- 🎭 Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS v3.4.17
- 📱 Mobile-first responsive design
- 🔧 Shadcn/ui components
- 📊 Interactive charts with Recharts
- 📧 Contact form with validation
- 🎨 Custom Lottie-style animations
- 📈 Skills visualization with radial charts
- 🖼️ Project carousel with navigation
- 📱 Fully responsive across all devices

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3.4.17
- **Animations:** Framer Motion
- **UI Components:** Shadcn/ui
- **Charts:** Recharts
- **Icons:** Lucide React
- **Theme:** Next Themes
- **Fonts:** Inter & Fira Code (Google Fonts)

## 📁 Project Structure

\`\`\`
animated-portfolio/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # Contact form API endpoint
│   │   └── send-email/
│   │       └── route.ts          # Email sending API
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with theme provider
│   └── page.tsx                  # Main page component
├── components/
│   ├── ui/                       # Shadcn/ui components
│   ├── about.tsx                 # About section with typing animation
│   ├── contact.tsx               # Contact form with validation
│   ├── experience.tsx            # Timeline experience section
│   ├── header.tsx                # Navigation header
│   ├── hero.tsx                  # Hero section with animations
│   ├── lottie-animation.tsx      # Custom animation component
│   ├── projects.tsx              # Project carousel
│   ├── skills.tsx                # Skills with radial charts
│   └── theme-provider.tsx        # Theme context provider
├── hooks/
│   ├── use-mobile.tsx            # Mobile detection hook
│   └── use-toast.ts              # Toast notification hook
├── lib/
│   └── utils.ts                  # Utility functions (cn helper)
├── public/                       # Static assets
├── components.json               # Shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone <repository-url>
   cd animated-portfolio
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables (optional for contact form):**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your email credentials:
   \`\`\`env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   \`\`\`

4. **Start the development server:**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

To enable the contact form functionality:

1. **Create a Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for "Mail"

2. **Add environment variables:**
   \`\`\`env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   \`\`\`

3. **The contact form will:**
   - Send emails to your Gmail account
   - Send confirmation emails to users
   - Validate form inputs
   - Show success/error messages

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/hero.tsx`):
   \`\`\`tsx
   <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
     Your Name
   </span>
   \`\`\`

2. **About Section** (`components/about.tsx`):
   - Update the profile image
   - Modify the typing animation text
   - Update skills tags

3. **Skills** (`components/skills.tsx`):
   \`\`\`tsx
   const skillsData = [
     { name: "Your Skill", value: 90, fill: "#3B82F6" },
     // Add your skills
   ]
   \`\`\`

4. **Projects** (`components/projects.tsx`):
   \`\`\`tsx
   const projects = [
     {
       title: "Your Project",
       description: "Project description",
       tech: ["Tech1", "Tech2"],
       github: "https://github.com/yourusername/project",
       demo: "https://your-demo-url.com"
     }
   ]
   \`\`\`

5. **Experience** (`components/experience.tsx`):
   - Update the timeline with your experience
   - Modify icons and colors

6. **Contact Information** (`components/contact.tsx`):
   \`\`\`tsx
   <a href="mailto:your-email@example.com">
     your-email@example.com
   </a>
   \`\`\`

### Styling

1. **Colors:** Modify `tailwind.config.ts` for custom color schemes
2. **Fonts:** Update `app/layout.tsx` to change fonts
3. **Animations:** Customize Framer Motion animations in components
4. **Theme:** Modify CSS variables in `app/globals.css`

### Adding New Sections

1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/header.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Touch-friendly interactions
- Optimized images and animations

## 🔧 Available Scripts

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
npm run export       # Export static files (if needed)
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel:**
   - Connect your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically

### Other Platforms

- **Netlify:** Connect GitHub repo and deploy
- **Railway:** Deploy with automatic builds
- **DigitalOcean:** Use App Platform
- **Self-hosted:** Use `npm run build` and serve the `out` folder

## 🎯 Performance Optimizations

- ✅ Next.js Image optimization
- ✅ Lazy loading with Framer Motion
- ✅ Code splitting
- ✅ CSS optimization with Tailwind
- ✅ Font optimization with Google Fonts
- ✅ SEO optimization with metadata

## 🐛 Troubleshooting

### Common Issues

1. **Hydration Errors:**
   \`\`\`bash
   # Clear Next.js cache
   rm -rf .next
   npm run dev
   \`\`\`

2. **Theme Issues:**
   - Check `next-themes` configuration
   - Ensure `suppressHydrationWarning` is set

3. **Animation Issues:**
   - Verify Framer Motion installation
   - Check `useInView` hook usage

4. **Contact Form Issues:**
   - Verify environment variables
   - Check Gmail App Password setup
   - Review API route logs

### Development Tips

1. **Hot Reload Issues:**
   \`\`\`bash
   # Restart development server
   npm run dev
   \`\`\`

2. **TypeScript Errors:**
   \`\`\`bash
   # Check TypeScript
   npx tsc --noEmit
   \`\`\`

3. **Tailwind Not Working:**
   \`\`\`bash
   # Rebuild Tailwind
   npm run build
   \`\`\`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help:

- 📧 Email: rittikhossen201@gmail.com
- 🐙 GitHub: [@rittik987](https://github.com/rittik987)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/rittik-hossen)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icon library
- [Recharts](https://recharts.org/) - Chart library

---

**Built with ❤️ by Rittik Hossen**
