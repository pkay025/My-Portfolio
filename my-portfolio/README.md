# Nunoo's Portfolio

A small React portfolio built with Vite and Tailwind CSS. Component-driven, responsive, and designed for quick iteration.

## Quick start

1. Open the project folder: [my-portfolio/package.json](my-portfolio/package.json)

2. Install dependencies:
```sh
npm install
```

3. Start dev server:
```sh
npm run dev
```

4. Build for production:
```sh
npm run build
```

## Project structure (important files)
- Entry
  - [my-portfolio/src/main.jsx](my-portfolio/src/main.jsx)
  - [my-portfolio/index.html](my-portfolio/index.html)
  - [my-portfolio/src/index.css](my-portfolio/src/index.css)
- App
  - [`App`](my-portfolio/src/App.jsx) — [my-portfolio/src/App.jsx](my-portfolio/src/App.jsx)
- Components
  - [`Navbar`](my-portfolio/src/Components/Navbar.jsx) — [my-portfolio/src/Components/Navbar.jsx](my-portfolio/src/Components/Navbar.jsx)
  - [`HeroSection`](my-portfolio/src/Components/HeroSection.jsx) — [my-portfolio/src/Components/HeroSection.jsx](my-portfolio/src/Components/HeroSection.jsx)
  - [`AboutMe`](my-portfolio/src/Components/About Me.jsx) — [my-portfolio/src/Components/About Me.jsx](my-portfolio/src/Components/About Me.jsx)
  - [`Services`](my-portfolio/src/Components/Services.jsx) — [my-portfolio/src/Components/Services.jsx](my-portfolio/src/Components/Services.jsx)
  - [`Contact`](my-portfolio/src/Components/Contact.jsx) — [my-portfolio/src/Components/Contact.jsx](my-portfolio/src/Components/Contact.jsx)
- Config
  - [my-portfolio/vite.config.js](my-portfolio/vite.config.js)
  - [my-portfolio/tailwind.config.js](my-portfolio/tailwind.config.js)
  - [my-portfolio/postcss.config.js](my-portfolio/postcss.config.js)
  - [my-portfolio/eslint.config.js](my-portfolio/eslint.config.js)

## Notes
- Components are referenced and composed in [`App`](my-portfolio/src/App.jsx).
- Update contact email in [`Contact`](my-portfolio/src/Components/Contact.jsx) if needed.
- To preview a production build locally:
```sh
npm run build
npm run preview
```

## Deployment
Build with `npm run build` and serve the `dist` output on any static host or platform (Netlify, Vercel, GitHub Pages, etc.).