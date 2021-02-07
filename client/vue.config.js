module.exports = () => {
  const config = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
      port: '8088',
      proxy: 'http://localhost:3001'
    }
  }

  return config
}
