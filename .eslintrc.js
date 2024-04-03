module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Adjust if your tsconfig is located elsewhere
  },
  settings: {
    next: {
      rootDir: 'apps/next/',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    // TypeScript specific rules or overrides
    '@typescript-eslint/explicit-function-return-type': 'off', // Example rule
  },
  root: true,
};
