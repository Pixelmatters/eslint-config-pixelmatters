module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'emotion'],
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
  },
};
