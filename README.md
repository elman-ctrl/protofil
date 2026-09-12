# Elman Portfolio — Full Stack

پورتفولیوی دوزبانه (FA/EN) با معماری جداگانهٔ فرانت و بک، در یک Turborepo monorepo.

## Stack

| Layer | Tech |
|-------|------|
| Monorepo | Turborepo + npm workspaces |
| Frontend | Next.js 15 (App Router, Turbopack) + TypeScript + Tailwind CSS |
| Backend | NestJS REST API + TypeScript |
| Database | PostgreSQL + Prisma |

فرانت فقط از طریق `fetch` به API نست وصل می‌شود (نه Server Actions روی دیتابیس).

## ساختار

```
apps/api     NestJS + Prisma
apps/web     Next.js portfolio UI
packages/    shared libraries (ready for future packages)
turbo.json   Turborepo task pipeline
docker-compose.yml   PostgreSQL (+ optional production images)
```

## راه‌اندازی

از ریشهٔ ریپو:

```bash
npm install
```

### 1) دیتابیس

```bash
npm run db:up
```

Postgres روی پورت `5433` بالا می‌آید (`elman` / `elman` / `portfolio`).

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
npm run db:migrate
npm run db:seed
```

### 2) توسعه

هر دو اپ را با یک دستور بالا بیاورید:

```bash
npm run dev
```

- Web: http://localhost:3000
- API: http://localhost:3001

فقط یکی از اپ‌ها:

```bash
npx turbo run dev --filter=web
npx turbo run dev --filter=api
```

اندپوینت‌ها:
- `GET /projects`
- `GET /skill-categories`
- `GET /resume`
- `POST /contact`
- `POST|PATCH|DELETE /admin/projects` (هدر `x-admin-token`)

سایر اسکریپت‌های ریشه:

```bash
npm run build
npm run lint
npm run test
npm run check-types
```

## Production (Docker)

کل استک (Postgres + API + Web) با یک دستور بالا می‌آید:

```bash
npm run docker:up
```

یا:

```bash
docker compose up -d --build
```

- Web: http://localhost:3000
- API: http://localhost:3001
- Admin UI: http://localhost:3000/admin (token از `ADMIN_TOKEN`، پیش‌فرض `elman-admin-dev-token`)
- Printable resume: http://localhost:3000/resume

لاگ‌ها: `npm run docker:logs`  
توقف: `npm run docker:down`

مایگریشن و seed هنگام استارت API اجرا می‌شوند. برای seed دوباره، `FORCE_SEED=true` را روی سرویس `api` بگذارید.

## Admin API

Header: `x-admin-token: <ADMIN_TOKEN>`

- `GET /admin/contact` · `DELETE /admin/contact/:id`
- `POST|PATCH|DELETE /admin/projects`
- `PUT /admin/site`
- `PATCH /admin/resume/meta`
- `GET /health`
