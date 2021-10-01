module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        indent: ['error', 4],
        'max-len': ['error', 120, 2, {
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
        }],
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.ts',
                    '.tsx',
                ],
            },
        ],
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'react/jsx-max-props-per-line': [
            1,
            {
                maximum: 1,
                when: 'always',
            },
        ],
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-props': [
            2,
            {
                callbacksLast: true,
            },
        ],
        'react/prop-types': 'off',
        'sort-keys': [
            'error',
            'asc',
            {
                natural: true,
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.ts',
                    '.tsx',
                ],
                paths: ['src'],
            },
        },
    },
};
