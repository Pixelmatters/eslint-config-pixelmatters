<h1 align="center">
  eslint-config-pixelmatters
</h1>

<h3 align="center">
  An ESLint config standard for Pixelmatters projects
</h3>

<p align="center">
This is a ESLint config that you can use in your projects.
</p>

<p align="center">
  <a href="https://github.com/Pixelmatters/eslint-config-pixelmatters/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="eslint-config-pixelmatters is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/@pixelmatters/eslint-config-pixelmatters">
    <img src="https://img.shields.io/npm/v/@pixelmatters/eslint-config-pixelmatters.svg" alt="Current npm package version." />
  </a>
  <a href="https://github.com/Pixelmatters/eslint-config-pixelmatters/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=pixelmatters_">
    <img src="https://img.shields.io/twitter/follow/pixelmatters_.svg?label=Follow%20@pixelmatters_" alt="Follow @pixelmatters_" />
  </a>
</p>

## 🚀 Get Up and Running

You can install this package using either **npm** or **yarn**.

### **Yarn**

If using Yarn:

1. Install the package as a development dependency:

```shell
yarn add @pixelmatters/eslint-config-pixelmatters --dev
```

2. Add all the missing peer dependencies:

```shell
yarn add @typescript-eslint/eslint-plugin eslint-plugin-prettier --dev
```

(This config assumes you have **ESLint**, **Typescript** and **Prettier** already installed; if not, run the following code: )

``` shell
yarn add typescript eslint prettier --dev
```

3. Create an `.eslintrc.js`  file in the root of your project and add the following code:

``` js
module.exports = {
  extends: ['@pixelmatters/eslint-config-pixelmatters'],
};
```

### **NPM**

If using NPM:

1. Install the package as a development dependency:

```shell
npm install @pixelmatters/eslint-config-pixelmatters --save-dev
```

2. Add all the missing peer dependencies:

```shell
npm install @typescript-eslint/eslint-plugin eslint-plugin-prettier --save-dev
```

(This config assumes you have **ESLint**, **Typescript** and **Prettier** already installed; if not, run the following code: )

``` shell
npm install typescript eslint prettier --save-dev
```

3. Create an `.eslintrc.js`  file in the root of your project and add the following code:

``` js
module.exports = {
  extends: ['@pixelmatters/eslint-config-pixelmatters'],
};
```

At this point you should be good to go 👍

## 🤝 How to Contribute

Whether you're helping us fix bugs, improve the docs, or spread the word, thank you! 💪 🧡

Check out our [**Contributing Guide**](https://github.com/Pixelmatters/eslint-config-pixelmatters/blob/master/CONTRIBUTING.md) for ideas on contributing and setup steps.

## :memo: License

Licensed under the [MIT License](./LICENSE).