# Template1 - React + Vite + Tailwind CSS

A clean, fast-loading React template optimized for political candidate websites. Built with Vite for lightning-fast development and production builds, and styled with Tailwind CSS for a modern, customizable design.

## Features

- ⚡ **Vite** - Fast build tool and dev server
- ⚛️ **React** - Modern React with HMR
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎨 **Customizable Colors** - Centralized color configuration
- 🚀 **Optimized for Performance** - Fast loading times
- 📦 **Production Ready** - Optimized build configuration

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customizing Colors

The color palette is centralized in `src/config/colors.js`. This file contains:

- **Primary colors** - Main brand colors (default: blue)
- **Secondary colors** - Complementary colors (default: slate)
- **Accent colors** - Highlights and CTAs (default: red)
- **Neutral colors** - Grays for text and backgrounds
- **Semantic colors** - Success, warning, and error states

### How to Change Colors

1. Open `src/config/colors.js`
2. Modify the color values in the `colors` object
3. Colors are automatically available in Tailwind classes (e.g., `bg-primary-500`, `text-secondary-700`)

### Example Usage

```jsx
// Using custom colors in components
<div className="bg-primary-500 text-white">
  Primary colored background
</div>

<button className="bg-accent-600 hover:bg-accent-700">
  Accent colored button
</button>
```

## Project Structure

```
template1/
├── src/
│   ├── components/     # React components
│   ├── config/        # Configuration files
│   │   └── colors.js  # Color palette configuration
│   ├── App.jsx        # Main app component
│   ├── App.css        # App-specific styles
│   ├── index.css      # Global styles with Tailwind directives
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js  # PostCSS configuration
```

## Performance Optimizations

- **Vite** - Fast HMR and optimized builds
- **Tailwind JIT** - Only generates CSS for classes you use
- **Code Splitting** - Automatic vendor chunk splitting
- **Minification** - Production builds are minified
- **CSS Minification** - Styles are optimized for production

## Development

- The dev server runs on `http://localhost:5173`
- Hot Module Replacement (HMR) is enabled
- Changes to `colors.js` require a dev server restart to take effect in Tailwind

## License

This template is free to use for your projects.
# WIN-template2
