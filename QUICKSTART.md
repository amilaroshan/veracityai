# 🚀 Quick Start Guide

## Your landing page is already running! 🎉

The development server is currently running at: **http://localhost:3000**

## 📂 Project Structure

```
veracityai/
├── app/                        # Next.js App Router
│   ├── globals.css            # Global styles & Tailwind
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Main landing page
│   ├── loading.tsx            # Loading state
│   └── not-found.tsx          # 404 page
│
├── components/                 # React Components
│   ├── BackToTop.tsx          # Floating back-to-top button
│   ├── CTA.tsx                # Call-to-action section
│   ├── CursorFollower.tsx     # Custom cursor animation
│   ├── FocusDomains.tsx       # Industry domains section
│   ├── Footer.tsx             # Footer with links
│   ├── Hero.tsx               # Hero/Banner section
│   ├── Navbar.tsx             # Navigation bar
│   ├── ParticlesBackground.tsx # Animated particles
│   ├── Research.tsx           # Research publications
│   ├── ScrollProgress.tsx     # Scroll progress indicator
│   ├── Services.tsx           # AI services section
│   └── Testimonials.tsx       # Client testimonials
│
├── public/                     # Static assets
│   ├── veracity-logo.png      # Logo image
│   └── design.png             # Design reference
│
└── Configuration files
    ├── package.json           # Dependencies
    ├── tsconfig.json          # TypeScript config
    ├── tailwind.config.ts     # Tailwind config
    └── next.config.js         # Next.js config
```

## 🎨 Customization Guide

### 1. **Change Colors**
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#00B4D8',  // Change this
    dark: '#0096C7',
    light: '#48CAE4',
  },
}
```

### 2. **Update Content**
Each section is a separate component in the `components/` folder:
- **Hero text**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **Research publications**: `components/Research.tsx`
- **Domains**: `components/FocusDomains.tsx`
- **Testimonial**: `components/Testimonials.tsx`

### 3. **Adjust Animations**
Look for Framer Motion props in components:
```typescript
animate={{ y: [0, -20, 0] }}      // Vertical movement
transition={{ duration: 2 }}      // Animation speed
whileHover={{ scale: 1.05 }}     // Hover effect
```

### 4. **Add/Remove Sections**
Edit `app/page.tsx` to add or remove sections:
```typescript
<Hero />
<Services />
// Add your new section here
<Research />
```

## 🛠️ Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Testing on Mobile

1. Find your local IP: `ifconfig` (Mac/Linux) or `ipconfig` (Windows)
2. Make sure your phone is on the same network
3. Visit: `http://YOUR_IP:3000`

## 🎯 Key Features

✅ Dark theme with modern gradients
✅ Smooth Framer Motion animations
✅ Scroll progress indicator
✅ Custom cursor follower (desktop)
✅ Floating back-to-top button
✅ Animated particles background
✅ Glass morphism effects
✅ Responsive mobile design
✅ Custom 404 page
✅ Loading states

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

**Animations not smooth?**
- Check if hardware acceleration is enabled in your browser
- Reduce the number of particles in `ParticlesBackground.tsx`

**Images not loading?**
- Ensure images are in the `public/` folder
- Reference them as `/image-name.png` (with leading slash)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Need help?** Check `FEATURES.md` for a complete list of features!


