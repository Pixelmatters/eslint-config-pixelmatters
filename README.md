# eslint-config-pixelmatters

> An ESLint config standard for Pixelmatters projects

This is a config that you can extend in your projects using ESLint. 
The config is for a Typescript + Prettier project.

## Setup

To install this Github Package, first you need to authenticate to Github Packages, following the instructions  [here](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

After authentication, the steps are different if you’re using **npm** or **yarn** to manage your packages.

### **Yarn**

If using Yarn:

1. Add an `.yarnrc` file to the root of your project (where you keep your `package.json` file) and add the following text:

```
"@pixelmatters:registry" "https://npm.pkg.github.com"
```

2. Run the following code in the terminal on the root of your project: 

``` shell
yarn add @pixelmatters/eslint-config-pixelmatters --dev
```

3. Add all the missing peer dependencies: 

``` shell
yarn add @typescript-eslint/eslint-plugin eslint-plugin-prettier --dev
```

(This config assumes you have **ESLint**, **Typescript** and **Prettier** already installed; if not, run the following code: )

``` shell
yarn add typescript eslint prettier --dev
```

4. Create an `.eslintrc.js`  file in the root of your project and add the following code:

``` js
module.exports = {
  extends: ['@pixelmatters/eslint-config-pixelmatters'],
};
```


### **NPM**

If using NPM:

1. Add an `.npmrc` file to the root of your project (where you keep your `package.json` file) and add the following text:

```
registry=https://npm.pkg.github.com/Pixelmatters
```

2. Run the following code in the terminal on the root of your project: 

``` shell
npm install @pixelmatters/eslint-config-pixelmatters --save-dev
```

3. Add all the missing peer dependencies: 

``` shell
npm install @typescript-eslint/eslint-plugin eslint-plugin-prettier --save-dev
```

(This config assumes you have **ESLint**, **Typescript** and **Prettier** already installed; if not, run the following code: )

``` shell
npm install typescript eslint prettier --save-dev
```

4. Create an `.eslintrc.js`  file in the root of your project and add the following code:

``` js
module.exports = {
  extends: ['@pixelmatters/eslint-config-pixelmatters'],
};
```

---
At this point you should be good to go 👍





