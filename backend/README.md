## Intro

This repo is an API documented with Swagger. It was generated using [ScaffoldHub](https://scaffoldhub.io/).

## Dependencies

- NPM
- Node.JS
- Postgresql
- Sequelize

## Setup

### Install Postgresql
```sh
brew install postgresql
```
### Create default user
```sh
createuser -s postgres
```

### Restart Postgresql
```sh
brew services restart postgresql
```

### Create Development DB
```sh
createdb development
```

### Build, Migrate, Run
```sh
npm run build && node ./dist/database/migrations/create
```

### Reset DB
```sh
dropdb development && createdb development && npm install && npm run build && node ./dist/database/migrations/create && npm run start
```

## Notes

- First user created will have admin access.