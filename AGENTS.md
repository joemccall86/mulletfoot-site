# Mullet Foot Site

## Commands
- `npm run dev` — Vite dev server with HMR at http://localhost:5173
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally

## Stack
- Vite 6 + React 18 + Tailwind CSS 3
- Icons: `lucide-react`
- No router, no linter, no typechecker, no test framework

## Structure
- `src/App.jsx` — Single-page app with client-side tab state (`home`, `schedule`, `training`, `races`)
- `src/assets/` — SVGs and other static assets imported as modules in JSX
- All theme colors defined inline in `App.jsx` (neon green/pink/blue on dark bg)

## Conventions
- No lint/typecheck/test scripts exist; verify by running `npm run dev` and checking the browser
- No `.env` files needed
