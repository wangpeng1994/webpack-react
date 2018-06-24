import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Home from 'pages/home'
import Page1 from 'pages/page1'

const RouteConfig = () => (
  <Router>
    <div>
      <ul>
        <li><Link to={{ pathname: '/' }}>首页</Link></li>
        <li><Link to='/page1'>Page1</Link></li>
      </ul>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/page1' component={Page1} />
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