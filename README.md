# AESI Landing Page

A modern, responsive landing page built with Bun + React + TypeScript.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run --hot src/index.tsx
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx      # Main navigation component
│   │   │   └── Footer.tsx      # Footer component
│   │   └── cards/
│   │       ├── PhotoCard.tsx   # Reusable photo card component
│   │       └── IconCard.tsx    # Reusable icon card component
│   ├── pages/
│   │   ├── Bienvenidos.tsx     # Welcome page with sections
│   │   ├── QuienesSomos.tsx    # About us page
│   │   ├── Programas.tsx       # Programs page
│   │   ├── Aliados.tsx         # Partners page
│   │   ├── Contacto.tsx        # Contact page
│   │   └── Donaciones.tsx      # Donations page
│   ├── sections/
│   │   └── bienvenidos/
│   │       ├── Impacto.tsx     # Impact section
│   │       └── ProgramasSection.tsx # Programs section
│   └── index.ts                # Component exports
├── App.tsx                     # Main app component with routing
├── frontend.tsx                # React app entry point
├── index.tsx                   # Bun server setup
├── index.css                   # Global styles
└── index.html                  # HTML template
```

## 🧩 Pages

The landing page includes the following sections accessible via navigation:

- **Bienvenidos** - Welcome page with Impact and Programs sections
- **Quienes Somos?** - About us information
- **Programas** - Detailed programs information
- **Aliados** - Partners and collaborators
- **Contacto** - Contact form and information
- **Donaciones** - Donation information and forms

## 🎨 Components

### Reusable Cards

- **PhotoCard**: Displays content with an image, title, and description
- **IconCard**: Displays content with an icon, title, and description

### Navigation

- **Navbar**: Responsive navigation with active page highlighting
- **Footer**: Multi-column footer with links and contact information

## 🎯 Implementation Status

✅ **Completed:**
- Basic project scaffolding
- Navigation structure
- Page routing system
- Reusable card components
- Responsive CSS framework
- Footer placeholder

🔄 **Next Steps:**
- Implement content for each page
- Add real images and icons
- Connect to API Gateway backend
- Add form functionality
- Implement animations and transitions

## 🛠️ Development

This project uses:
- **Bun** - Runtime and package manager
- **React** - UI framework
- **TypeScript** - Type safety
- **CSS** - Styling (no external frameworks for minimal bundle)

### Adding New Components

1. Create component in appropriate directory under `src/components/`
2. Export from `src/components/index.ts`
3. Import and use in pages

### Adding New Pages

1. Create page component in `src/components/pages/`
2. Add route case in `App.tsx`
3. Add navigation item in `Navbar.tsx`

## 📱 Responsive Design

The layout includes responsive breakpoints for:
- Desktop: > 768px
- Mobile: ≤ 768px

## 🌐 Deployment

Frontend-only project designed to work with API Gateway backend.

```bash
# Build for production
bun build src/frontend.tsx --outdir dist

# The built files can be served from any static hosting
```
