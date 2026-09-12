FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

FROM base AS prepare
RUN npm install -g turbo@^2
COPY . .
RUN turbo prune web --docker

FROM base AS builder
COPY --from=prepare /app/out/json/ .
RUN npm ci
COPY --from=prepare /app/out/full/ .
ARG API_URL=http://api:3001
ENV API_URL=$API_URL
ENV NEXT_PUBLIC_API_URL=$API_URL
RUN npx turbo run build --filter=web

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
USER nextjs
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
