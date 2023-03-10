module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
        es6: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', '.prettierrc.js', 'tsconfig.json'],
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    rules: {
        // '@typescript-eslint/ban-ts-comment': 0,
        'no-undef': 'off',
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'func-names': 'off',
        'no-process-exit': 'off',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',

        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'react/function-component-definition': 0,
        '@typescript-eslint/no-misused-promises': ['warn', { checksVoidReturn: true }],
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-floating-promises': 1,
        '@typescript-eslint/explicit-function-return-type': 'error',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'max-len': ['error', { code: 120 }],
        indent: ['error', 4],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        'linebreak-style': 0,

        // Note: you must disable the base rule as it can report incorrect errors
        'import/no-duplicates': 'off',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'warn',

        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off',
    },
    overrides: [],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
