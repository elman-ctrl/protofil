FROM node:22-bookworm-slim AS base
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g npm@11.16.0 turbo@^2
WORKDIR /app

FROM base AS prepare
COPY . .
RUN turbo prune api --docker

FROM base AS builder
COPY --from=prepare /app/out/json/ .
RUN npm ci
COPY --from=prepare /app/out/full/ .
ENV DATABASE_URL="postgresql://elman:elman@localhost:5432/portfolio?schema=public"
ENV TURBO_TELEMETRY_DISABLED=1
RUN npx turbo run build --filter=api

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001
ENV TURBO_TELEMETRY_DISABLED=1
RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nestjs

COPY --from=builder --chown=nestjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nestjs:nodejs /app/package-lock.json ./package-lock.json
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/package.json ./apps/api/package.json
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/dist ./apps/api/dist
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/prisma ./apps/api/prisma
COPY --chown=nestjs:nodejs apps/api/docker-entrypoint.sh ./apps/api/docker-entrypoint.sh
RUN sed -i 's/\r$//' /app/apps/api/docker-entrypoint.sh \
  && chmod +x /app/apps/api/docker-entrypoint.sh

USER nestjs
EXPOSE 3001
WORKDIR /app/apps/api
ENTRYPOINT ["/app/apps/api/docker-entrypoint.sh"]
