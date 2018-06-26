import * as counterAction from './actions/counter'
import store from './store'

// 打印初始状态
console.log('initState', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// 发送一系列 actionn 
store.dispatch(counterAction.increment())
store.dispatch(counterAction.decrement())
store.dispatch(counterAction.reset())

// 停止监听 state 更新
unsubscribe()

// 这个 testRedux 就是为了说明 redux 和 react 没有强关联，虽然 redux 和 react 可以很好的合作 