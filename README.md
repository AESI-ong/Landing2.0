# AESI Landing Page 2.0

A modern, responsive landing page for AESI built with React, TypeScript, and Bun.

## Features

- **Modern Design**: Clean, professional interface with AESI brand colors
- **Responsive Layout**: Optimized for all device sizes
- **Component Library**: Reusable components for scalable development
- **Hero Carousel**: Dynamic hero section with multiple slides
- **Programs Showcase**: Interactive program cards with carousels
- **Impact Metrics**: Visual representation of AESI's achievements
- **Font Integration**: M PLUS Rounded 1c from Google Fonts

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── badges/       # Category badges
│   │   ├── buttons/      # Gradient buttons
│   │   ├── cards/        # Program and photo cards
│   │   ├── carousel/     # Carousel component
│   │   └── navigation/   # Navbar and footer
│   ├── pages/            # Page components
│   └── sections/         # Section components
├── data/                 # Data structures
├── assets/              # Images and static assets
└── styles/              # Global styles
```

## Hero Section

The hero section supports multiple slides with:

- **Background Images**: Full-screen background images
- **Fallback Gradients**: Automatic fallbacks using AESI brand colors
- **Statistics Overlay**: Highlighted metrics and achievements
- **Color-Highlighted Text**: Branded text highlighting
- **Call-to-Action Buttons**: Interactive gradient buttons
- **Carousel Navigation**: Arrows and dot indicators
- **Responsive Design**: Mobile-optimized layout

### Adding New Hero Slides

1. Add images to `src/assets/images/hero/`
2. Update `src/data/heroData.ts` with new slide data:

```typescript
{
  id: 'unique-id',
  title: 'Main Title',
  highlightedText: 'Highlighted Text',
  backgroundImage: '/src/assets/images/hero/your-image.jpg',
  fallbackGradient: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
  statistic: {
    number: '150',
    label: 'description'
  },
  ctaText: 'Button Text',
  ctaAction: 'action-type'
}
```

## AESI Brand Colors

- **Amarillo**: #F6D70E (Yellow)
- **Rojo**: #CD2027 (Red)
- **Azul**: #2C6DB6 (Blue)
- **Verde**: #55B948 (Green)

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## Technology Stack

- **Runtime**: Bun
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: CSS3 with CSS Variables
- **Build Tool**: Bun's built-in bundler
