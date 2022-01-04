module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    // Common
    indent: ['error', 2, { SwitchCase: 1, outerIIFEBody: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
