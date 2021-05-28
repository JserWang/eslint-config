module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@jserwang/eslint-config-ts'
  ],
  rules: {
    'no-submodule-imports': ['off', '/@'],
    'no-implicit-dependencies': ['off', ['/@']],
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/html-indent': ['error', 2],
    'vue/script-indent': 'off',
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }]
  }
}
