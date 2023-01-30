module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  root: true,
  rules: {
    '@typescript-eslint/no-namespace': 'off',
  },
  ignorePatterns: ['dist/**/*'],
}
