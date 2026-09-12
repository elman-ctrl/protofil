FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

FROM base AS prepare
RUN npm install -g turbo@^2
COPY . .
RUN turbo prune api --docker

FROM base AS builder
COPY --from=prepare /app/out/json/ .
RUN npm ci
COPY --from=prepare /app/out/full/ .
RUN npx turbo run build --filter=api

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/apps/api/package.json ./apps/api/package.json
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/prisma ./apps/api/prisma
EXPOSE 3001
WORKDIR /app/apps/api
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
