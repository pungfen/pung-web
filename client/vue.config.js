module.exports = () => {
  const config = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    devServer: {
      port: '8088',
      proxy: 'http://47.114.7.50:3000'
    }
  }

  return config
}
