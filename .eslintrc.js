module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:cypress/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['src/**/*.*'],
      extends: [
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: { project: ['./tsconfig.json'] },
      rules: {
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false },
        ],
      },
    },
  ],
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: { version: 'detect' },
  },
  ignorePatterns: ['build', 'dist'],
  rules: {
    'no-shadow': 'error',
    'no-console': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    'react/self-closing-comp': 'error',
    'react/no-array-index-key': 'error',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
