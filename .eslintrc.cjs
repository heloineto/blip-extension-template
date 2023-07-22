module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:cypress/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-refresh'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
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
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false },
        ],
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-shadow': 'error',
    'no-console': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    'react/self-closing-comp': 'error',
    'react/no-array-index-key': 'error',
  },
};
