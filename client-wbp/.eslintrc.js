module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'prettier',
    'prettier/vue'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "comma-dangle": ["error", "never"]
  }
}
