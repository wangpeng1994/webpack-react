const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js', // 每次都要手动修改HTML中入口js名字，so: HtmlWebpackPlugin
    chunkFilename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
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
  plugins: [ 
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
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
