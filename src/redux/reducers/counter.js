import * as counterAction from 'actions/counter'

/**
 * 初始化 state
 * 或者在创建 store 时在 createStore 函数中传入第二个参数 initState
 */
const initState = {
  count: 0
}

/**
 * reducer
 */
export default (state = initState, action) => {
  switch (action.type) {
    case counterAction.INCREMENT:
      return {
        count: ++state.count
      }
    case counterAction.DECREMENT:
      return {
        count: --state.count
      }
    case counterAction.RESET:
      return {
        count: 0
      }
    default:
      return state
  }
}

