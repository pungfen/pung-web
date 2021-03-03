## 基础库分离

### html-webpack-externals-plugin

思路: 将`react`, `react-dom` 基础包通过cdn引入, 不打入bundle中

``` js
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

plugins: [
  new HtmlWebpackExternalsPlugin(
    {
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@17/umd/react.development.js',
          global: 'React'
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@17/umd/react-dom.development.js',
          global: 'ReactDom'
        }
      ]
    }
  )
]
```

### split-chunks-plugin

webpack4内置的，代替CommonschunkPlugin插件

chunks 参数说明:
- async 异步引入的库进行分离(默认)
- initial 同步引入的库进行分离
- all 所有引入的库进行分离(推荐)

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000, // 最小chunks的字节
      minRemainingSize: 0,
      maxSize: 0, // 最大chunks的字节
      minChunks: 1, // 设置最小引用 的次数
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        }
      }
    }
  }
}
```

#### 分离基础包
