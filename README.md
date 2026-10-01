# ByteSpace

ByteSpace is an online learning platform interface for discovering courses, exploring learning paths, and viewing creator and account pages.

**Live site:** [https://bytespace-new-pink.vercel.app/](https://bytespace-new-pink.vercel.app/)

## Features

- Home page with course highlights, learning paths, student testimonials, and platform information
- Course catalog and individual course detail pages
- Sign up and sign in pages
- Creator page
- Responsive layouts for desktop and mobile

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide React icons
- Motion for animations

## Project structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── signin/page.tsx       # Sign in page
│   │   └── signup/page.tsx       # Sign up page
│   ├── (home)/page.tsx           # Home route
│   ├── courses/
│   │   ├── page.tsx              # Course catalog
│   │   └── [slug]/page.tsx       # Course details
│   ├── creator/page.tsx          # Creator page
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/
│   ├── layout/                   # Navbar, footer, and site chrome
│   └── shared/                   # Reusable cards, wrappers, and page layouts
├── data/                         # Course, category, and student data
├── features/home/                # Home page sections and composition
└── types/                        # Shared TypeScript types

public/
├── home/                         # Home page and course imagery
├── auth-circle.png               # Auth page illustration assets
├── auth-cone.png
├── auth-mask.png
└── ...                           # Logos and other static assets
```

## Getting started

### Requirements

- Node.js 20 or later
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deployment

The live site is hosted on [Vercel](https://vercel.com/). To deploy your own copy, import the repository into Vercel and use the default Next.js build settings.
