# Reactor

Reactor is a JS library containing typical UI components, standard user experience cases and helpful features.

## Used stack

1. JS core framework/library: [React](https://react.dev/) + [Redux](https://redux.js.org/)
2. Types syntax for JS: [Typescript](https://www.typescriptlang.org/)
3. Builder: [Webpack](https://webpack.js.org/)
4. Styles preprocessor: [Sass](https://sass-lang.com/)
5. Code quality: [ESLint](https://eslint.org/) + [Stylelint](https://stylelint.io/) + [Prettier](https://prettier.io/)

## Installation

> **Warning!**<br />
> This installation instruction is relevant to Windows 11
> and was not tested with other operating systems.

1. Install [Node.js](https://nodejs.org/) using installation file.
2. **Windows only:** install WSL via **cmd**: ``wsl --install``
3. Do ``npm ci`` in project root directory

## Scripts

1. ``npm run dev`` is a basic script for local development. It starts local server and watch file changes.
2. ``npm run build`` creates a production build and places it to a production directory.

## Project structure

- **src** - This directory contains source files of project.
  - **assets** - Contains images, icons, documents etc.
  - **components** - Project components
  - **controllers** - Controllers level of MVC.
  - **model** - Model level of MVC.
  - **plugins** - All third-party plugins are imported and wrapped here.
  - **style** - Project styles.
  - **types** - Project types

## Code style - JS

1. Use **camelCase**
2. Imports:<br />
2.1. Local names of imported entities should be started from $ sign and capitalized first letter of original entity name:
	```
	import { someVariable as $SomeVariable } from 'some-plugin';
	```
3. Destructure:<br />
3.1 Local names of destructured entities should be started from __:
   ```
   const { someVariable as __someVariable } = somePlugin();
   ```
