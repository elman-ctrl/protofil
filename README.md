# Elman Portfolio — Full Stack

پورتفولیوی دوزبانه (FA/EN) با معماری جداگانهٔ فرانت و بک.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 15 (App Router) + TypeScript + Tailwind CSS |
| Backend | NestJS REST API + TypeScript |
| Database | PostgreSQL + Prisma |

فرانت فقط از طریق `fetch` به API نست وصل می‌شود (نه Server Actions روی دیتابیس).

## ساختار

```
api/     NestJS + Prisma
web/     Next.js portfolio UI
docker-compose.yml   PostgreSQL
```

## راه‌اندازی

### 1) دیتابیس

```bash
docker compose up -d
```

Postgres روی پورت `5433` بالا می‌آید (`elman` / `elman` / `portfolio`).

### 2) API

```bash
cd api
cp .env.example .env
npm install
npx prisma migrate dev
npx prisma db seed
npm run start:dev
```

API: http://localhost:3001

اندپوینت‌ها:
- `GET /projects`
- `GET /skill-categories`
- `GET /resume`
- `POST /contact`
- `POST|PATCH|DELETE /admin/projects` (هدر `x-admin-token`)

### 3) Web

```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```

سایت: http://localhost:3000

## Production (Docker)

```bash
docker compose up -d --build
```

- Web: http://localhost:3000
- API: http://localhost:3001
- Admin UI: http://localhost:3000/admin (token از `ADMIN_TOKEN`)
- Printable resume: http://localhost:3000/resume

## Admin API

Header: `x-admin-token: <ADMIN_TOKEN>`

- `GET /admin/contact` · `DELETE /admin/contact/:id`
- `POST|PATCH|DELETE /admin/projects`
- `PUT /admin/site`
- `PATCH /admin/resume/meta`
- `GET /health`
