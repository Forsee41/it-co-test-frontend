module.exports = {
  root: true,
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': 'off', // conflicts with ide setup, granularly change rules if needed
  },
  env: {
    'vue/setup-compiler-macros': true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
