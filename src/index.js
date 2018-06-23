import React from 'react'
import ReactDom from 'react-dom'
import RouteConfig from './router'

ReactDom.render(
  <RouteConfig />, // 目前是直接引了路由组件放在这，而后面这里是 App 这样的组件，然后 App 才是真的入口index.js 文件  
  document.getElementById('root')
)