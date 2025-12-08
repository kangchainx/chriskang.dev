# Chris Kang · Portfolio

Personal portfolio built with Next.js App Router, Tailwind CSS, and a handful of animated UI components (Background/Particles/CursorFollower). Icons are provided by `@phosphor-icons/react`.

## Tech Stack
- Next.js 15 (App Router)
- React 18
- Tailwind CSS + shadcn/ui–style primitives
- TypeScript

## Getting Started
Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts
- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm start` – run the built app
- `npm run lint` – lint the project

## Notes
- Global styles live in `app/globals.css`.
- Shared layout/components: `app/layout.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`, `components/ui/*`.
- Pages: `app/page.tsx`, `app/about/page.tsx`, `app/projects/page.tsx`.
