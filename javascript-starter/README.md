# [JavaScript Starter](https://github.com/ProxityStudios/javascript-starter)

This source is designed to prevent developers from doing things over and over again.

## Features

- Logging system
- Environment system

## Included Packages

- `yargs`
- `dotenv`
- `tslog`

## Included Dev Packages

- `eslint`
- `eslint-config-airbnb-base`
- `eslint-config-prettier`
- `eslint-formatter-pretty`
- `eslint-plugin-eslint-comments`
- `eslint-plugin-import`
- `eslint-plugin-prettier`
- `eslint-plugin-promise`
- `eslint-plugin-unicorn`
- `npm-run-all`
- `nodemon`
- `prettier`
- `rimraf`

## Recommended Extensions

We recommend you to install these extensions.

- Extension `prettier` (`esbenp.prettier-vscode`)
- Extension `todo highlight` (`wayou.vscode-todo-highlight`)
- Extension `eslint` (`dbaeumer.vscode-eslint`)

## Scripts

#### <a href="#installscript"></a> Install dependencies

```sh
npm run install
```

#### <a href="#start"></a> Start the project. You must build the project by using `npm run build` command

```sh
npm run start
```

#### <a href="#startdevelopment"></a> Start the project in development environment

```sh
npm run dev
```

#### Fix eslint & prettier errors

```sh
npm run fix
```

## Guides

### Development

1. Install dependencies by using [this](#installscript) script
2. Rename the `.env.development example` file to `.env.development`
3. Start development by using [this](#startdevelopment) script
4. Code somethings...

#### Production

1. Rename the `.env example` file to `.env`
2. Start the project by using [this](#start) script

### `TODO Highlighting` Extension Guide

If you installed "TODO Highlighting" extension,
you can use these prefixes:

- `TODO:` Something that should be done.
- `BUG:` Use this prefix if you write something about the bug.
- `REVIEW:` Something that should be reviewed.
- `NOTE:` Something that should be noted.

## License

This project licensed with `MIT` license
