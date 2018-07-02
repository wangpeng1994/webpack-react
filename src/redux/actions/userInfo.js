export const GET_USER_INFO_REQUEST = 'USERINFO/GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'USERINFO/GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAIL = 'USERINFO/GET_USER_INFO_FAIL'

/* function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
} */

/**
 * 创建三个关于请求的 action 构造函数, 或者直接写在异步 action 的 dispatch 中
 */
const getUserInfoRequest = () => ({
  type: GET_USER_INFO_REQUEST
})

const getUserInfoSuccess = (userInfo) => ({
  type: GET_USER_INFO_SUCCESS,
  userInfo
})

const getUserInfoFail = () => ({
  type: GET_USER_INFO_FAIL
})

/**
 * 异步 action
 * 直接返回的不是 action 对象，而是函数
 * reducer 只能处理 对象形式的 action，所以函数形式的 action 会交给中间件来处理
 * redux-thunk 中间件的作用：将函数形式的 action 进过异步处理后，再次包装成 dispatch(action) 的形式传递给 reducer
 */
export const getUserInfo = () => {
  return dispatch => {
    dispatch(getUserInfoRequest())
    setTimeout(() => {
      fetch('http://localhost:8088/api/user.json')
        .then(res => {
          console.log(res)
          return res.json()
        }) // 切记这里的json是内置的方法，必须调用以返回一个 promise
        .then(json => dispatch(getUserInfoSuccess(json)))
        .catch(() => dispatch(getUserInfoFail()))
    }, 1000)
  }
}

/* 
  它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点。 你可以利用 Redux middleware 来进行日志记录、创建崩溃报告、调用异步接口或者路由等等。
*/
