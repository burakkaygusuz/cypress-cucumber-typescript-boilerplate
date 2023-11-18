# Cypress Cucumber TypeScript Boilerplate

[![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&logoColor=33ff99&style=for-the-badge)](https://www.cypress.io)

## Table of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Description

A boilerplate project demonstrating end-to-end testing with Cypress and Cucumber using TypeScript.

## Dependencies

### Development Dependencies

- [@cypress/webpack-preprocessor](https://www.npmjs.com/package/@cypress/webpack-preprocessor): Webpack preprocessor for Cypress, enhancing module support.
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker): Library for generating fake data, useful for test data creation.
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript type definitions for Node.js.
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): ESLint plugin for TypeScript.
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser): TypeScript parser for ESLint.
- [cypress](https://www.npmjs.com/package/cypress): End-to-end testing framework.
- [eslint](https://www.npmjs.com/package/eslint): JavaScript and TypeScript linter.
- [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress): ESLint plugin for Cypress-specific linting.
- [prettier](https://www.npmjs.com/package/prettier): Code formatter to maintain consistent code style.
- [ts-loader](https://www.npmjs.com/package/ts-loader): TypeScript loader for webpack.
- [typescript](https://www.npmjs.com/package/typescript): TypeScript language support.

### Runtime Dependencies

- [@badeball/cypress-cucumber-preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor): Cypress preprocessor for Cucumber to BDD.
- [dayjs](https://www.npmjs.com/package/dayjs): Lightweight and modular date utility library.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine. If not, follow the installation commands below based on your operating system:

| Operating System   | Installation Commands                                     |
| ------------------ | --------------------------------------------------------- |
| **Windows**        | `winget upgrade && winget install --id OpenJS.NodeJS.LTS` |
| **macOS**          | `brew update && brew install node@20`                     |
| **Linux (Ubuntu)** | `sudo apt-get update && sudo apt-get install nodejs npm`  |

After installing Node.js and npm, proceed with the [installation of the project dependencies](#installation).

## Installation

- Clone the repository:

  ```bash
  git clone https://github.com/burakkaygusuz/cypress-cucumber-typescript-boilerplate.git`
  ```

- Navigate to the project directory.

  ```bash
  cd cypress-cucumber-typescript-boilerplate
  ```

- Install the dependencies.

  ```bash
  npm install
  ```

- Execute the tests.

  ```bash
  npm run cy:run
  ```
