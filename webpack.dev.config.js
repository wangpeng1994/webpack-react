const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
   // __dirname 当前模块所在文件夹名称的绝对路径(快捷变量) http://nodejs.cn/api/modules.html
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }]
  }
}
