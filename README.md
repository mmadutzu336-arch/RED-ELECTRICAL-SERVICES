# RED ELECTRICAL SERVICES

Professional electrician website for Rosu Madalin in Larnaca, Cyprus.

## Features

- 🌐 **Multi-language Support**: English, Romanian, Greek, Russian, German, and Arabic
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- 💬 **WhatsApp Integration**: Direct WhatsApp contact button and form submission
- ♿ **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- 📞 **Contact Section**: Easy-to-use contact form with validation
- ⚡ **Performance**: Optimized with Next.js and React best practices

## Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── components/
│   └── PersonalSite.jsx      # Main component
├── pages/
│   ├── _app.js               # Next.js app wrapper
│   └── index.js              # Home page
├── styles/
│   └── globals.css           # Tailwind CSS imports
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Key Improvements & Optimizations

### Security Fixes
- ✅ Added `rel="noopener noreferrer"` on external links to prevent security vulnerabilities
- ✅ Fixed form validation to prevent empty submissions
- ✅ Sanitized WhatsApp text encoding

### UX Enhancements
- ✅ Added form field labels for better accessibility
- ✅ Implemented controlled form inputs with proper state management
- ✅ Added loading state during form submission
- ✅ Auto-reset form after successful WhatsApp submission
- ✅ Added hover effects and transitions for better interactivity
- ✅ Telephone number now uses `tel:` link for one-click calling
- ✅ Fixed sticky header for better navigation

### Code Quality
- ✅ Extracted constants to make configuration easier
- ✅ Moved translations to a separate object for maintainability
- ✅ Used `useMemo` for translation memoization
- ✅ Used `useCallback` for stable function references
- ✅ Extracted services and projects to constants
- ✅ Replaced magic numbers with semantic grid layouts
- ✅ Added proper HTML form handling with required attributes

### Accessibility (WCAG)
- ✅ Added `aria-label` attributes to interactive elements
- ✅ Proper form labels linked to inputs via `htmlFor`
- ✅ Semantic HTML structure with proper heading hierarchy
- ✅ Focus states on form inputs with visible rings
- ✅ Disabled state handling on buttons during submission

### Performance
- ✅ Used Next.js for server-side rendering and optimization
- ✅ Memoized expensive computations
- ✅ Optimized re-renders with `useCallback`
- ✅ Proper CSS transitions instead of animations
- ✅ Mobile-first responsive design

### SEO Improvements
- ✅ Added meta tags (title, description, keywords, OG tags)
- ✅ Semantic HTML with proper heading structure
- ✅ Added proper section IDs for anchor navigation

## Configuration

Update the following in `components/PersonalSite.jsx`:

```javascript
const OWNER_NAME = "Rosu Madalin";
const WHATSAPP_NUMBER = "35797682622";
const PHONE_NUMBER = "+357 97682622";
const LOCATION = "Larnaca, Cyprus";
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2026 RED ELECTRICAL SERVICES. All rights reserved.