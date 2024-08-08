module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', 'tsx', '.json'],
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multi-word-component-names': 'warn',

    // import处理
    'simple-import-sort/imports': [
      'error',
      {
        // The default grouping, but with type imports last as a separate group.
        groups: [
          ['^\\u0000'],
          ['^node:'],
          ['^@?\\w'],
          ['^'],
          ['^\\.'],
          ['^.+\\u0000$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'off',

    // 暂时手动过滤两个依赖的css导入的报错
    'import/no-unresolved': [2, { ignore: ['element-plus|uno'] }],
  },
};
