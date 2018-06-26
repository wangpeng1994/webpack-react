export const INCREMENT = 'COUNTER/INCREMENT'
export const DECREMENT = 'COUNTER/DECREMENT'
export const RESET = 'COUNTER/RESET'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const reset = () => ({
  type: RESET
})

// conunter actions 用来定义 actionType 和 action 构造函数
// 分别在 reducer 和 每个需要dispatch 此类 action 的组件的地方会被用到