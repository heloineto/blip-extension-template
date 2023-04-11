module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:tailwindcss/recommended',
        'plugin:cypress/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    settings: {
        react: { version: 'detect' },
    },
    ignorePatterns: ['dist'],
    rules: {
        'no-shadow': 'error',
        'no-console': 'warn',
        'react/self-closing-comp': 'error',
        'react/no-array-index-key': 'error',
        'tailwindcss/no-custom-classname': [
            'error',
            { config: './tailwind.config.cjs' },
        ],
    },
};
