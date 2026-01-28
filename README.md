# Bags.fm Dashboard Redesign

A modern, sleek redesign concept for [bags.fm](https://bags.fm) — a Solana-based creator token platform.

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## Features

- **Token Profile** — Display token info, price charts, and trading stats
- **Project Updates** — Announcements, photos, GitHub integration, and roadmap
- **Trading Interface** — Buy/sell buttons with real-time price data
- **Social Links** — Creator socials and community links
- **Responsive Design** — Mobile-first dark theme UI

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **Recharts** — Charts and data visualization
- **Lightweight Charts** — TradingView-style price charts
- **Lucide React** — Icon library

## Getting Started

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

## Deployment

This project is configured for Vercel deployment:

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Deploy

Or use the Vercel CLI:

```bash
npx vercel
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives
│   ├── Header/          # Top navigation
│   ├── TokenProfile/    # Token info card
│   ├── TradingChart/    # Price chart
│   ├── StatsBar/        # Trading statistics
│   ├── BuyButtons/      # Trading interface
│   ├── ProjectUpdates/  # Updates, photos, GitHub, roadmap
│   ├── SocialLinks/     # Social media links
│   └── BottomNav/       # Mobile navigation
├── pages/
│   └── TokenPage.jsx    # Main token page
└── styles/
    └── globals.css      # Global styles and CSS variables
```

## License

MIT
