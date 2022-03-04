module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    ignorePatterns: ['jest.config.js', '.eslintrc.js', 'next.config.js'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['~', './src/']],
                extensions: ['.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            // Tests only:
            files: ['*.test.ts', '*.test.tsx'],
            extends: [
                'plugin:jest/recommended',
                'plugin:testing-library/recommended',
                'plugin:testing-library/react',
            ],
        },
        {
            // Stories only:
            files: ['*.story.tsx'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
        {
            // TS only: (do not apply to JS files)
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: './tsconfig.json',
            },
            extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/unbound-method': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
            },
        },
    ],
    rules: {
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'internal',
                    },
                ],
            },
        ],
        'react/jsx-curly-brace-presence': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'warn',
        'react/display-name': 'off',
        semi: [2, 'never'],
    },
}
