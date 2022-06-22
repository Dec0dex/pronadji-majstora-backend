<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/badge/npm-8.12.1-green" alt="NPM Version" /></a>
<a href="https://www.pronadjimajstora.rs" target="_blank"><img src="https://img.shields.io/badge/license-EUPL%201.2-green" alt="Package License" /></a>
<a href="https://www.pronadjimajstora.rs" target="_blank"><img src="" alt="CircleCI" /></a>
<a href="https://www.pronadjimajstora.rs" target="_blank"><img src="" alt="Coverage" /></a>
<a href="https://www.pronadjimajstora.rs" target="_blank"><img src="" alt="Discord"/></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework backend application written in TypeScript for PronadjiMajstora platform.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app on docker
```bash
$ docker-compose -f docker-compose-dev.yml up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentation
```bash
npx @compodoc/compodoc -p tsconfig.json -s
```
After This command you should visit `http://localhost:8080` in order to look at code documentation page page

Or visit swagger page after ruuning application on `http://localhost:3000:/api/docs`

## Working With Database Migrations

### Creating new empty migration
```bash
$ npm run migration:create `migration name`
```

### Generating migrations depending on the schema change
```bash
$ npm run migration:generate `migration name`
```

### Showing Pending migrations
```bash
$ npm run migration:show
```
### Running migrations
```bash
$ npm run migration:migrate
```

### Reverting migrations
```bash
$ npm run migration:revert
```

## License
European Union Public License 1.2, For more details read [LICENSE](LICENSE)
