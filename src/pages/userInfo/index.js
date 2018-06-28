import React from 'react'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'
import * as userInfoAction from 'actions/userInfo'

import Loading from './loading'

const LazyBar = Loadable({
  loader: () => import(/*webpackChunkName: 'bar'*/ './bar'),
  loading: Loading
})

class UserInfo extends React.Component {
  state = {
    showBar: false
  }

  handleClick = () => {
    this.setState({ showBar: true })
  }

  handleMouseOver = () => {
    LazyBar.preload()
  }

  render() {
    const { userInfo, isLoading, errorMsg } = this.props.userInfo
    console.log(this.props.userInfo)
    return (
      <div>
        {
          isLoading ?
            '请求信息中...'
            : (
              errorMsg ?
                errorMsg
                : <div>
                  <p>--用户信息--</p>
                  <p>用户名：{userInfo.name}</p>
                  <p>简介：{userInfo.intro}</p>
                  <hr/>
                  <button
                    onClick={this.handleClick}
                    onMouseOver={this.handleMouseOver}>
                    加载bar
                  </button>
                  {
                    this.state.showBar && <LazyBar />
                  }
                </div>
            )
        }
        <button onClick={() => this.props.getUserInfo()}>点击查询</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  // 这个 dispatch 的时候会被 thunk 拦截，然后根据异步请求的结果再进行不同的 dispatch
  getUserInfo: () => dispatch(userInfoAction.getUserInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)