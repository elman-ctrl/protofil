#!/bin/sh
set -e
cd /app/apps/api

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Seeding database if needed..."
npx prisma db seed

echo "Starting API..."
exec node dist/main.js
