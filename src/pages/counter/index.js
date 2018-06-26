import React from 'react'
import { connect } from 'react-redux'
import * as counterAction from 'actions/counter' 

class Counter extends React.Component {
  render() {
    return (
      <div>
        <div>当前计数为(显示 redux 计数)：{this.props.counter.count}</div>
        <button onClick={() => this.props.increment()}>自增</button>
        <button onClick={() => this.props.decrement()}>自减</button>
        <button onClick={() => this.props.reset()}>重置</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})


const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(counterAction.increment()),
  decrement: () => dispatch(counterAction.decrement()),
  reset: () => dispatch(counterAction.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)