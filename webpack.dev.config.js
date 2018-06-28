const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
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
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, { // url-loader 内部封装了 file-loader
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader:  'url-loader',
        options: {
          limit: 8192 // 小于8k会转为base64URL，直接插入HTML中，大于8k则使用file-loader复制并处理路径,但还是要安装 file-loader
        }
      }]
    }]
  },
  // plugins: [ // 使用命令行 --hot 的方式更简洁
  //   new webpack.HotModuleReplacementPlugin()
  // ]
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      component: path.resolve(__dirname, 'src/component'),
      router: path.resolve(__dirname, 'src/router'),
      actions: path.resolve(__dirname, 'src/redux/actions'),
      reducers: path.resolve(__dirname, 'src/redux/reducers')
    }
  }
}
