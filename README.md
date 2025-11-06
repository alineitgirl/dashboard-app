# Next.js Dashboard

A small, production-ready dashboard starter built with Next.js (App Router), TypeScript and Tailwind CSS. It demonstrates a typical admin dashboard layout with authentication, customers & invoices CRUD flows, server actions, and a small set of UI primitives.

---

## Quick overview

- App structure: uses the Next.js App Router (`app/`), React server components and client components where needed.
- Authentication: powered by NextAuth (see `auth.ts` / `auth.config.ts`).
- Database / persistence: example code uses `postgres` and simple server-side data helpers in `lib/` (see `seed/route.ts` to populate placeholder data).
- Styling: Tailwind CSS + `@tailwindcss/forms`.

## Features

- Dashboard layout with sidebar and top navigation
- Customers list and simple table UI
- Invoices list, pagination, and per-invoice edit pages
- Authentication (login page and protected dashboard layout)
- Seed route to populate example data for local development
- Example UI components (buttons, skeletons, forms) in `app/ui/`

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- NextAuth for authentication
- postgres (npm package) for database client in the example code
- pnpm as the package manager

Dependencies (from package.json):

```text
@heroicons/react, @tailwindcss/forms, autoprefixer, bcrypt, clsx, next, next-auth, postcss, postgres, react, react-dom, tailwindcss, typescript, use-debounce, zod
```

Dev dependencies: eslint, eslint-config-next, @types/*, etc.

---

## Prerequisites

- Node.js 18.x or newer recommended
- pnpm (you can install with: `npm i -g pnpm`)
- Optional: a PostgreSQL instance if you wire the project to a real DB (the project includes example code using the `postgres` client)

## Setup (local)

1. Clone the repo and change into the project directory

```powershell
cd c:\path\to\your\workspace\nextjs-dashboard
```

2. Install dependencies

```powershell
pnpm install
```

3. Environment

Create a `.env.local` file at the project root and add environment variables you need. Example variables the app may use:

```text
# Example .env.local
DATABASE_URL=postgres://user:pass@localhost:5432/dbname
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Any other keys your custom code expects
```

(This project includes `next-auth` and an example `auth.ts`/`auth.config.ts` — adapt the variables to your provider and database.)

4. Seed sample data (optional)

While the dev server is running, you can call the seed route to populate placeholder data used by the UI.

Open in your browser:

```
http://localhost:3000/seed
```

Note: the exact seed behavior depends on `app/seed/route.ts` and may run a GET or POST — check that file if you need to adjust.

## Available scripts

Scripts from `package.json`:

```powershell
pnpm dev    # start development server (with turbopack when available)
pnpm build  # build for production
pnpm start  # start production server
pnpm lint   # run ESLint
```

## Run locally

Start the dev server:

```powershell
pnpm dev
```

Then open http://localhost:3000 in your browser. Pages of interest:

- `/login` — login form
- `/dashboard` — main dashboard
- `/dashboard/overview` — overview page
- `/dashboard/invoices` — invoices list
- `/dashboard/customers` — customers

## Project layout (important folders)

- `app/` — Next.js App Router pages and server/client components
  - `dashboard/` — protected dashboard routes and nested pages
  - `login/` — login page
  - `seed/route.ts` — example seeding route
  - `query/route.ts` — example API/query route
- `app/ui/` — shared UI components and small primitives
- `lib/` — actions, utils, and example data helpers
- `public/` — static assets

## Auth & Data

- This starter demonstrates NextAuth usage. Inspect `auth.ts` and `auth.config.ts` for configuration examples. For production you should configure a proper session store and database.
- The sample DB code uses the `postgres` npm package — it is minimal and intended for example/demo usage. Replace or extend it with your ORM/DB layer in production (Prisma, TypeORM, etc.).

## Tests

This repository doesn't include automated tests by default. Recommended next steps:

- Add unit tests for UI components (Jest + React Testing Library)
- Add integration tests for API routes (playwright or cypress)

## Deployment

- Vercel is the natural host for Next.js apps. Create a Vercel project and set the environment variables there. `pnpm build` and `pnpm start` are available for deployments that need them.
- If you deploy to other platforms, ensure env vars and Node version are configured.

## Troubleshooting

- If pages 401/redirect to login: check `NEXTAUTH_URL` and `NEXTAUTH_SECRET` are set.
- If seed route fails: check DB connection and `DATABASE_URL`.
- If Tailwind styles don’t appear: make sure `node_modules` and build are fresh: `pnpm install` then restart dev server.

## Next steps / Improvements

- Add proper DB migrations and a real ORM (e.g., Prisma)
- Add automated tests and CI (GitHub Actions)
- Add docker-compose for local DB and app orchestration
- Add e2e tests and accessibility checks

## Contributing

Feel free to open issues or PRs. Keep changes small and focused. If adding features, update README and add tests.

## License

This project has no license file in the repository. Add a license (for example, MIT) if you plan to share it publicly.

---

