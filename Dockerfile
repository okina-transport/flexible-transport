# Image de build UI
#TODO : migrer vers un node plus récent
FROM node:9.11.2-alpine as build

WORKDIR /app

# copy everything to current working directory
COPY . ./

RUN npm install &&\
    npm run build

# Construction de l'image de l'appli
FROM node:9.11.2-alpine

## Server
ENV CONTENT_BASE=/app/ui
COPY server /app/server
WORKDIR /app/server
RUN npm install --production

# UI
COPY --from=build /app/build /app/ui/
ARG BUILD_DATE
ENV BUILD_DATE=$BUILD_DATE

EXPOSE 9000
CMD ["node", "src/server.js"]
