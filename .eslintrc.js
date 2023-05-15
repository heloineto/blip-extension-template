module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'react-app',
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:tailwindcss/recommended',
        'plugin:cypress/recommended',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    settings: {
        react: { version: 'detect' },
    },
    ignorePatterns: ['build'],
    rules: {
        'no-shadow': 'error',
        'no-console': 'warn',
        'react/self-closing-comp': 'error',
        'react/no-array-index-key': 'error',
        '@typescript-eslint/no-var-requires': 'off',
    },
};
