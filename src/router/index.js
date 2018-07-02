import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Loadable from 'react-loadable' // 如果用了babel，babel中也要配置插件， 利用 ES7 dynamicimport 新特性
import { hot } from 'react-hot-loader'
import Home from 'pages/home'
// import Page1 from 'pages/page1'
// import Counter from 'pages/counter'
// import UserInfo from 'pages/userInfo'

const Loading = () => <div>Loading...</div>

const Page1 = Loadable({
  loader: () => import(/* webpackChunkName: "page1" */ 'pages/page1'), // 如果不指定webpackChunkName，则会自动分配数字id 0 1 2 3
  loading: Loading
})

const Counter = Loadable({
  loader: () => import(/* webpackChunkName: "counter" */ 'pages/counter'),
  loading: Loading
})

const UserInfo = Loadable({
  loader: () => import(/* webpackChunkName: "userInfo" */ 'pages/userInfo'),
  loading: Loading
})


const RouteConfig = () => (
  <Router>
    <div>
      <ul>
        <li><Link to={{ pathname: '/' }}>首页</Link></li>
        <li><Link to='/page1'>Page1</Link></li>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/userinfo'>用户查询</Link></li>        
      </ul>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/page1' component={Page1} />
        <Route path='/counter' component={Counter} />
        <Route path='/userinfo' component={UserInfo} />
      </Switch>
    </div>
  </Router>
)

export default hot(module)(RouteConfig)

/**
 * 试验：
 * 1. path属性修改为{}格式 【done】
 * 2. 测试 exact 性质 【done】
 */