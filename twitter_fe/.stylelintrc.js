module.exports = {
    plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-order',
        'stylelint-config-rational-order',
        'stylelint-config-rational-order/plugin',
    ],
    rules: {
        // rules
        'max-empty-lines': [2, { ignore: ['comments'] }],
        'selector-list-comma-newline-after': null,
        indentation: 4,
        'string-quotes': 'single',
        'color-no-invalid-hex': true,
        'max-line-length': 120,
        'selector-pseudo-element-colon-notation': 'single',
        'value-keyword-case': ['lower', 'upper'],
        'at-rule-empty-line-before': null,

        // plugins
        'plugin/declaration-block-no-ignored-properties': true,

        // scss: recommended rules
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': false,

        // stylelint-config-standard-scss
        'scss/dollar-variable-empty-line-before': null,
        'scss/dollar-variable-pattern': null,

        // order
        'order/properties-order': [],
        'plugin/rational-order': [
            true,
            {
                'border-in-box-model': false,
                'empty-line-between-groups': false,
            },
        ],
    },
    ignoreFiles: ['**/*.{js,jsx,ts,tsx,json}'],
};
