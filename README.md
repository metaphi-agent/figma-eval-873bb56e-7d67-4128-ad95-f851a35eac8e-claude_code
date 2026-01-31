# Steam Redesign

A complete redesign of Steam's UI built from a Figma design, featuring a modern dark theme and comprehensive functionality across all major sections.

## 🎮 Overview

This project is a production-ready implementation of a Steam UI redesign, built with React, TypeScript, and Tailwind CSS v4. It includes 25+ screens covering the entire Steam ecosystem.

## ✨ Features

### Store
- **Store Page**: Full game detail view with hero section, media gallery, pricing, and system requirements
- **Discover**: Personalized game recommendations feed
- **Browse**: Category-based game exploration
- **Wishlist**: Comprehensive wishlist management with filters and sorting
- **Cart**: Shopping cart functionality
- **Points Shop**: Steam Points redemption

### Library
- **Library Home**: Game list sidebar with main content area featuring:
  - Hero section with Play button
  - Friends who play
  - Achievements showcase
  - Screenshots gallery
  - Activity feed
- **Collections**: Organize games into custom collections
- **Multiple view modes**: List, Grid, and Detail views

### Community
- **Community Home**: Central hub for community content
- **Game Community Hub**: Game-specific community pages
- **Discussions**: Community discussions and forums
- **Workshop**: Mod and content creation hub
- **Market**: Community marketplace

### Profile & Settings
- **Profile**: User profile with stats, games, and achievements
- **Games**: Game library overview
- **Screenshots**: Screenshot gallery
- **Settings**: Account and profile settings

## 🛠 Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4 (alpha)
- **Build Tool**: Vite 5.4
- **Dev Server**: Hot Module Replacement (HMR)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/metaphi-agent/figma-eval-873bb56e-7d67-4128-ad95-f851a35eac8e-claude_code.git

# Navigate to project directory
cd figma-eval-873bb56e-7d67-4128-ad95-f851a35eac8e-claude_code

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 🎨 Design System

### Colors
- **Background**: Dark blue-grey gradient (`#1b2838` to `#0e1417`)
- **Primary**: Steam blue (`#66c0f4`)
- **Accent Green**: Purchase/action buttons (`#5ba32b`)
- **Text Main**: Off-white (`#dcdedf`)
- **Text Dim**: Muted grey (`#8b929a`)

### Typography
- **Font Family**: Motiva Sans (Steam's official font) with system fallbacks
- **Scales**: Large headings, medium body, small captions

### Components
- Responsive header with navigation
- Game cards with hover states
- Filter sidebars
- Modal overlays
- Loading states and skeletons

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Atomic components (buttons, inputs, icons)
│   └── blocks/          # Complex components (Header, Footer, StoreNav)
├── pages/               # Route components (25+ pages)
├── app.css             # Global styles and theme tokens
├── App.tsx             # Main app with routing
└── main.tsx            # Entry point
```

## 🔗 Links

- **Live Preview**: [View Demo](https://ta-01kg9f69rm57k3wk3nraa9c4er-5173.wo-tj9s1blqt8rl0egrzl0ojj3se.w.modal.host)
- **GitHub Repo**: [View Source](https://github.com/metaphi-agent/figma-eval-873bb56e-7d67-4128-ad95-f851a35eac8e-claude_code)
- **Original Figma**: [Steam Redesign](https://www.figma.com/design/DeibYwZPtGTCRzNdXQDf03/Steam-Redesign--Community-)

## 🎯 Key Features

### Performance
- Lazy-loaded routes for optimal bundle size
- Optimized images with proper loading attributes
- CSS-based animations (no JavaScript)
- Tree-shaking enabled via Vite

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements

### Responsive Design
- Mobile-first approach
- Flexible layouts using CSS Grid and Flexbox
- Responsive typography
- Touch-friendly interactive elements

## 📝 License

This is a design implementation project for educational purposes.

## 🤖 Development

Built with Claude Code by Anthropic
