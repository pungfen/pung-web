module.exports = () => {
  const config = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    devServer: {
      port: '8088',
      proxy: 'http://localhost:3000'
    }
  }

  return config
}
