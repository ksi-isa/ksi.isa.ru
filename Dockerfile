# syntax = docker/dockerfile:1

ARG NODE_VERSION=22.0.0

FROM node:${NODE_VERSION}-slim as base

EXPOSE 3000
ENV NODE_ENV=production

WORKDIR /ksi.isa.ru

# Build
FROM base as build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY --link package.json pnpm-lock.yaml .
RUN pnpm install --prod=false

COPY --link . .

RUN pnpm run build
# RUN pnpm prune

# Run
FROM base

COPY --from=build /ksi.isa.ru/.output /ksi.isa.ru/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs", "--host", "0.0.0.0"]
