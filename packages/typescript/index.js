module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@werheng/eslint-config-basic',
  ],
  rules: {
    // off
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
