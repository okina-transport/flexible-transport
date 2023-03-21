# Enki
![Build and deploy](https://github.com/entur/enki/actions/workflows/build-and-deploy.yml/badge.svg)
 [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=entur_enki&metric=alert_status)](https://sonarcloud.io/dashboard?id=entur_enki)

Frontend app for Nplan - a simple timetable editor. Backend is [Uttu](https://github.com/entur/uttu).

## Development

To run for development, simply do:

```
npm install
npm start
```

Note: The app use Node v14. `nvm use v14`

To run together with a local instance of [Uttu](https://github.com/entur/uttu) on port 11701, add the following to `.env.development.local`.

```
REACT_APP_UTTU_API_URL=http://localhost:11701/services/flexible-lines
```

## Authentication

Uses Auth0 to authenticate users.

## Testing

Uses [Jest](https://facebook.github.io/jest) for unit and reducer testing.

```
npm test
```

Build and run manually the docker
`docker build . -f Dockerfile -t mobiiti/flexible-transport:0.0.2`

```
docker run -it --rm -p3001:3001 \
-e REACT_APP_UTTU_API_URL=http://0.0.0.0:11701/services/flexible-lines \
-e AUTH_SERVER_URL=https://mobi-iti-ara.dev.okina.fr/auth \
mobiiti/flexible-transport:0.0.2
```
