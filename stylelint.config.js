export default {
  root: true,
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  customSyntax: 'postcss-html',
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
    'scss/dollar-variable-pattern': /[a-z][a-zA-Z]+/,
    'scss/at-mixin-pattern': /[a-z][a-zA-Z]+/,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: [':deep'],
          },
        ],
      },
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'rule-empty-line-before': 'never',
      },
    },
  ],
};
