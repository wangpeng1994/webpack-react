const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // entry: path.resolve(__dirname, 'src/index.js'),
  entry: {
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
    app: path.resolve(__dirname, 'src/index.js')
  },
   // __dirname 当前模块所在文件夹名称的绝对路径(快捷变量) http://nodejs.cn/api/modules.html
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js', // 每次都要手动修改HTML中入口js名字，so: HtmlWebpackPlugin  chunkhash 在这里会和 devServer 冲突，生产环境可以使用，chunkhash 代表了长期缓存配置
    chunkFilename: '[name].[chunkhash].js'
  },
  devServer: {
    port: 8088,
    contentBase: './dist',
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true
  },
  // goodbye CommonsChunkPlugin ↓↓↓
  optimization: {   // 1. 自动根据是否来自node_modules, 大于30kb，import调用共享 等条件进行拆分块
    splitChunks: {
      chunks: 'all' // "initial"、"async"和"all"。分别用于选择初始块、按需加载的块和所有块
    }
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
  plugins: [ 
    // new webpack.HotModuleReplacementPlugin() // 使用命令行 --hot 的方式更简洁
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
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
