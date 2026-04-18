# Mangla Chat Wale - Official Website

A production-ready, fully functional React website for Mangla Chat Wale - the authentic Delhi-style chaat business in Mayur Vihar, Delhi.

## Features

- 🍛 Beautiful, vibrant Indian street-food themed UI
- 🛒 Fully functional shopping cart with quantity selector
- 📱 WhatsApp order generation with pre-filled message
- ⭐ Customer reviews section
- 📱 Fully responsive (mobile-first design)
- 🔒 Heavy code obfuscation for production

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React Icons
- JavaScript Obfuscator

## Quick Start

### Development (Local)

```bash
npm install
npm run dev
```

The app will run at `http://localhost:5173`

### Production Build (Regular)

```bash
npm run build
```

Output will be in the `dist/` folder.

### Production Build (Obfuscated)

```bash
npm run build-obfuscated
```

This will:
1. Build the production version
2. Apply heavy obfuscation with:
   - String array encoding (base64)
   - Control flow flattening
   - Dead code injection
   - Variable/property renaming
   - Self-defending code
   - Console output disabled
   - Debug protection

Output obfuscated files in `dist/assets/`

## Deployment (Vercel)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

## Deployment (Netlify)

1. Push your code to GitHub
2. Go to https://netlify.com
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## Project Structure

```
mangla-chat-wale/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   └── Reviews.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── obfuscator.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Business Info

- **Name**: Mangla Chat Wale
- **Tagline**: Crisp • Tangy • Fresh Chaat – Since 2005
- **Address**: Maine Market, Pocket 5, Acharya Niketan, Mayur Vihar, New Delhi, Delhi 110091
- **Timings**: 6:00 PM – 10:00 PM (daily)
- **Phone**: +91 999 715 121

## Menu

| Item | Price |
|------|-------|
| Golgappa | ₹30 |
| Papdi Chaat | ₹80 |
| Alu Chaat | ₹80 |
| Alu Tikki | ₹80 |

---

Made with ❤️ in Delhi