# syntax = docker/dockerfile:1

ARG NODE_VERSION=22.0.0

FROM node:${NODE_VERSION}-bullseye-slim AS base

EXPOSE 3000
ENV NODE_ENV=production

WORKDIR /ksi.isa.ru

# Build
FROM base AS build

COPY --link package.json package-lock.json .
RUN npm install

COPY --link . .

RUN npm run build

# Run
FROM base

COPY --from=build /ksi.isa.ru/.output /ksi.isa.ru/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs", "--host", "0.0.0.0"]
