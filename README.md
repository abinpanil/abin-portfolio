# Premium Portfolio - Antigravity Project

A modern, dark-themed personal portfolio built with React and Framer Motion, featuring editorial typography and a comprehensive global motion system.

## ✨ Features

### Architecture
- **React 18** - Modern component-based architecture
- **Vite** - Lightning-fast build tool and dev server
- **Single-page scroll layout** - Smooth navigation between sections
- **Component-based structure** - Modular and maintainable

### Design System
- **Dark mode default** - Sophisticated dark editorial theme
- **Editorial typography scale** - Playfair Display + Inter fonts
- **CSS Custom Properties** - Comprehensive design tokens
- **Responsive design** - Desktop-first, mobile-optimized

### Global Motion System
- **Framer Motion** - Production-ready animation library
- **Section-level animations** - Scroll-triggered reveals
- **Hover transitions** - Smooth interactive feedback
- **Scroll-based reveals** - Progressive content disclosure
- **Custom easing curves** - Premium, intentional motion

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The portfolio will be available at `http://localhost:5173/`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.jsx   # Fixed navigation with smooth scroll
│   │   ├── Hero.jsx         # Hero section with staggered animations
│   │   ├── About.jsx        # About section with editorial layout
│   │   ├── Work.jsx         # Project showcase with grid
│   │   ├── Skills.jsx       # Tech stack display
│   │   └── Contact.jsx      # Contact links and footer
│   ├── utils/
│   │   └── animations.js    # Global motion system variants
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   └── index.css            # Design system & global styles
├── index.html               # HTML entry point
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
```css
--color-bg-primary: #0a0a0a      /* Deep black background */
--color-bg-secondary: #111111    /* Section backgrounds */
--color-text-primary: #f5f5f5    /* Primary text */
--color-text-secondary: #a0a0a0  /* Secondary text */
--color-accent: #ffffff          /* Accent color */
```

### Typography Scale
```css
--font-display: 'Playfair Display', serif  /* Editorial headings */
--font-body: 'Inter', sans-serif           /* Clean body text */

/* Responsive scale: 12px - 80px */
--font-size-xs to --font-size-7xl
```

### Spacing System
```css
/* Editorial generous spacing: 8px - 192px */
--space-xs to --space-5xl
```

## 🎬 Animation System

### Available Variants

**Fade Animations**
- `fadeIn` - Simple opacity fade
- `fadeInUp` - Fade with upward slide
- `fadeInDown` - Fade with downward slide
- `fadeInLeft` - Fade with left slide
- `fadeInRight` - Fade with right slide

**Scale Animations**
- `scaleIn` - Fade with subtle scale

**Stagger Animations**
- `staggerContainer` - Parent container for staggered children
- `staggerItem` - Child items with staggered reveal

**Scroll Animations**
- `scrollReveal` - Scroll-triggered fade and slide
- `scrollRevealStagger` - Scroll-triggered stagger

**Hover Effects**
- `hoverScale` - Subtle scale on hover
- `hoverLift` - Lift effect on hover

### Usage Example

```jsx
import { motion } from 'framer-motion';
import { fadeInUp, scrollReveal } from './utils/animations';

// Page load animation
<motion.div {...fadeInUp}>
  Content
</motion.div>

// Scroll-triggered animation
<motion.div {...scrollReveal}>
  Content reveals on scroll
</motion.div>
```

## 📱 Sections

### Navigation
- Fixed position with backdrop blur
- Smooth scroll to sections
- Minimal, clean design

### Hero
- Large editorial typography
- Staggered fade-in animations
- Floating scroll indicator

### About
- Editorial layout
- Generous spacing
- Scroll-triggered reveal

### Work
- Grid layout for projects
- Hover lift effects
- Staggered animations
- Technology tags

### Skills
- Categorized tech stack
- Clean presentation
- Fade-in animations

### Contact
- Animated contact links
- Hover effects with arrow reveals
- Footer section

## 🎯 Customization

### Update Personal Content

**1. Meta Tags** (`index.html`)
```html
<meta name="description" content="Your description" />
<title>Your Name - Portfolio</title>
```

**2. Hero Section** (`src/components/Hero.jsx`)
```jsx
<h1>Your headline</h1>
<p>Your tagline</p>
```

**3. Projects** (`src/components/Work.jsx`)
```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    link: 'https://...',
  },
];
```

**4. Skills** (`src/components/Skills.jsx`)
```jsx
const skillCategories = [
  {
    category: 'Your Category',
    skills: ['Skill 1', 'Skill 2'],
  },
];
```

**5. Contact Links** (`src/components/Contact.jsx`)
```jsx
<a href="mailto:your@email.com">Email</a>
<a href="https://github.com/yourusername">GitHub</a>
```

### Customize Design

**Colors** - Edit CSS variables in `src/index.css`:
```css
:root {
  --color-bg-primary: #your-color;
  --color-accent: #your-accent;
}
```

**Typography** - Change fonts in `index.html` and `src/index.css`

**Spacing** - Adjust spacing variables in `src/index.css`

## 🔧 Technical Details

### Dependencies
- `react` - UI framework
- `react-dom` - React DOM renderer
- `framer-motion` - Animation library

### Dev Dependencies
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features
- CSS Custom Properties
- Intersection Observer API

## 📊 Performance

- **Fast load times** - Optimized Vite build
- **Smooth animations** - GPU-accelerated with Framer Motion
- **Minimal dependencies** - Lean bundle size
- **Efficient CSS** - Custom properties, no CSS-in-JS overhead

## 🎓 Best Practices

### Motion System
- All animations use consistent easing: `cubic-bezier(0.33, 1, 0.68, 1)`
- Durations: 150ms (fast), 250ms (base), 400ms (slow)
- Scroll animations trigger once with `viewport: { once: true }`

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Respects `prefers-reduced-motion` (can be added)

### SEO
- Proper meta tags
- Semantic HTML
- Descriptive titles
- Open Graph tags

## 📝 License

MIT License - feel free to use this project as a template for your own portfolio.

---

Built with ❤️ using React, Vite, and Framer Motion
