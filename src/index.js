import React from 'react'
import ReactDom from 'react-dom'
import RouteConfig from 'router'

// 使用了 react-hot-loader 的 hot 函数后，不需要再手动 patch
// if (module.hot) { // 当模块 更新的时候，通知index.js 必须必，不管是 CLI 还是 webpack 配置文件
//   module.hot.accept()
// }

ReactDom.render(
  <RouteConfig />, // 目前是直接引了路由组件放在这，而后面这里是 App 这样的组件，然后 App 才是真的入口index.js 文件  
  document.getElementById('root')
)