const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const configuration = {
    entry: {
      app: './src/main.js'
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    module: {
      rules: [
        { test: /\.vue$/, loader: 'vue-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.(ttf|woff$)$/, loader: 'file-loader' },
        {
          test: /\.m?js$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './public/index.html' }),
      new VueLoaderPlugin()
    ],
    devServer: {
      contentBase: './dist',
      host: 'localhost',
      port: 8088
    }
  }

  return configuration
}
