module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'error'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false
    }
  }
};
