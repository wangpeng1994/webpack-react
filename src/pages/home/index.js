import React from 'react'
import ReactDom from 'react-dom'

// 尝试检查全局node变量
if (process.env.NODE_ENV === 'production') console.log('Looks like we are in production mode!')

export default class Home extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: ++this.state.count
    })
  }

  render() {
    let { count } = this.state
    return (
      <div>
        <div>This is home~</div>
        <div>当前计数：{count}</div>
        <button onClick={this.handleClick}>点我吧</button>
        <div>测试热替换文案</div>
      </div>
    )
  }
}