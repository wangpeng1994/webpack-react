import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import counter from 'reducers/counter'
import userInfo from 'reducers/userInfo'
// import combineReducers from './reducer.js' 使用官方的，顺别废弃reducers文件

const store = createStore(combineReducers({
  counter,
  userInfo
}), applyMiddleware(thunk))

export default store

// store 就是把它们联系到一起的对象。store 有以下职责：

// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 触发reducers方法更新 state；
// 通过subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。
