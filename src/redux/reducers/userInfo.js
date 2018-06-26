import * as userInfoAction from 'actions/userInfo'

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case userInfoAction.GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        userInfo: {},
        errorMsg: ''
      }
    case userInfoAction.GET_USER_INFO_SUCCESS:
      console.log(action.userInfo, 6666)
      return {
        ...state,
        isLoading: false,
        userInfo: action.userInfo,
        errorMsg: ''
      }
    case userInfoAction.GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        userInfo: {},
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}