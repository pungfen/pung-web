module.exports = {
  env: {
    node: true
  },
  extends: 'koa',
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: [0],
    'arrow-parens': [0]
  }
}
