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
        'plugin:@typescript-eslint/recommended',
        'plugin:tailwindcss/recommended',
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
        },
        {
            files: ['./*.cjs'],
            rules: { '@typescript-eslint/no-var-requires': 'off' },
        },
    ],
    plugins: ['react', '@typescript-eslint'],
    settings: {
        react: { version: 'detect' },
    },
    ignorePatterns: ['dist'],
    rules: {
        'no-shadow': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'react/self-closing-comp': 'error',
        'react/no-array-index-key': 'error',
        'tailwindcss/no-custom-classname': [
            'error',
            {
                config: './tailwind.config.cjs',
            },
        ],
    },
};
