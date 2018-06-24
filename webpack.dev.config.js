const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
   // __dirname 当前模块所在文件夹名称的绝对路径(快捷变量) http://nodejs.cn/api/modules.html
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8088,
    contentBase: './dist',
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.resolve(__dirname, 'src')
    }]
  },
  // plugins: [ // 使用命令行 --hot 的方式更简洁
  //   new webpack.HotModuleReplacementPlugin()
  // ]
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      component: path.resolve(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router')
    }
  }
}

console.log()