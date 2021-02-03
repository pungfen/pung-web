module.exports = () => {
  const config = {
    lintOnSave: true,
    devServer: {
      port: '8088',
      proxy: 'http://localhost:3001'
    }
  }

  return config
}
