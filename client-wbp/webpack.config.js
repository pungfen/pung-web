const path = require('path')

const { ProvidePlugin, DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, { mode }) => {
  const configuration = {
    mode,
    entry: {
      app: './src/main.js'
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.join(__dirname, 'src'),
        process: 'process/browser'
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
      new VueLoaderPlugin(),
      new ProvidePlugin({ process: 'process/browser' }),
      new DefinePlugin({
        "__VUE_OPTIONS_API__": true,
        "__VUE_PROD_DEVTOOLS__": false
      })
    ],
    output: {
      filename: 'app.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/'
    },
    devServer: {
      contentBase: './dist',
      host: 'localhost',
      port: 8088
    },
    stats: 'errors-warnings'
  }

  return configuration
}
