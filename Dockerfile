# Stage 1: Build on the native build platform
FROM --platform=$BUILDPLATFORM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

# Public URL of the deployed backend. Vite inlines VITE_* vars at build time,
# so this must be supplied when building the image, e.g.
#   docker build --build-arg VITE_API_BASE_URL=https://api.example.com .
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# Run Vite using Node.js
RUN node ./node_modules/vite/bin/vite.js build

# Stage 2: Production server
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

COPY --from=builder /app/.output ./.output

EXPOSE 8080

CMD ["node", ".output/server/index.mjs"]
