(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userInfo"],{

/***/ "./src/pages/userInfo/index.js":
/*!*************************************!*\
  !*** ./src/pages/userInfo/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactLoadable = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _userInfo = __webpack_require__(/*! actions/userInfo */ "./src/redux/actions/userInfo.js");

var userInfoAction = _interopRequireWildcard(_userInfo);

var _loading = __webpack_require__(/*! ./loading */ "./src/pages/userInfo/loading.js");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyBar = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | bar */ "bar").then(__webpack_require__.t.bind(null, /*! ./bar */ "./src/pages/userInfo/bar.js", 7));
  },
  loading: _loading2.default
});

var UserInfo = function (_React$Component) {
  _inherits(UserInfo, _React$Component);

  function UserInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showBar: false
    }, _this.handleClick = function () {
      _this.setState({ showBar: true });
    }, _this.handleMouseOver = function () {
      LazyBar.preload();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserInfo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$userInfo = this.props.userInfo,
          userInfo = _props$userInfo.userInfo,
          isLoading = _props$userInfo.isLoading,
          errorMsg = _props$userInfo.errorMsg;

      console.log(this.props.userInfo);
      return _react2.default.createElement(
        'div',
        null,
        isLoading ? '请求信息中...' : errorMsg ? errorMsg : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            '--\u7528\u6237\u4FE1\u606F--'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u7528\u6237\u540D\uFF1A',
            userInfo.name
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u7B80\u4ECB\uFF1A',
            userInfo.intro
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'button',
            {
              onClick: this.handleClick,
              onMouseOver: this.handleMouseOver },
            '\u52A0\u8F7Dbar'
          ),
          this.state.showBar && _react2.default.createElement(LazyBar, null)
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.props.getUserInfo();
            } },
          '\u70B9\u51FB\u67E5\u8BE2'
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return UserInfo;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // 这个 dispatch 的时候会被 thunk 拦截，然后根据异步请求的结果再进行不同的 dispatch
    getUserInfo: function getUserInfo() {
      return dispatch(userInfoAction.getUserInfo());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserInfo);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LazyBar, 'LazyBar', 'C:/Users/admin/Desktop/webpack-react/src/pages/userInfo/index.js');
  reactHotLoader.register(UserInfo, 'UserInfo', 'C:/Users/admin/Desktop/webpack-react/src/pages/userInfo/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'C:/Users/admin/Desktop/webpack-react/src/pages/userInfo/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/admin/Desktop/webpack-react/src/pages/userInfo/index.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/webpack-react/src/pages/userInfo/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/pages/userInfo/loading.js":
/*!***************************************!*\
  !*** ./src/pages/userInfo/loading.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/webpack-react/src/pages/userInfo/loading.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlckluZm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3VzZXJJbmZvL2xvYWRpbmcuanMiXSwibmFtZXMiOlsidXNlckluZm9BY3Rpb24iLCJMYXp5QmFyIiwibG9hZGVyIiwibG9hZGluZyIsIkxvYWRpbmciLCJVc2VySW5mbyIsInN0YXRlIiwic2hvd0JhciIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJoYW5kbGVNb3VzZU92ZXIiLCJwcmVsb2FkIiwicHJvcHMiLCJ1c2VySW5mbyIsImlzTG9hZGluZyIsImVycm9yTXNnIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJpbnRybyIsImdldFVzZXJJbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztJQUFZQSxjOztBQUVaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1DLFVBQVUsNkJBQVM7QUFDdkJDLFVBQVE7QUFBQSxXQUFNLHdJQUFOO0FBQUEsR0FEZTtBQUV2QkMsV0FBU0M7QUFGYyxDQUFULENBQWhCOztJQUtNQyxROzs7Ozs7Ozs7Ozs7OzswTEFDSkMsSyxHQUFRO0FBQ05DLGVBQVM7QUFESCxLLFFBSVJDLFcsR0FBYyxZQUFNO0FBQ2xCLFlBQUtDLFFBQUwsQ0FBYyxFQUFFRixTQUFTLElBQVgsRUFBZDtBQUNELEssUUFFREcsZSxHQUFrQixZQUFNO0FBQ3RCVCxjQUFRVSxPQUFSO0FBQ0QsSzs7Ozs7NkJBRVE7QUFBQTs7QUFBQSw0QkFDbUMsS0FBS0MsS0FBTCxDQUFXQyxRQUQ5QztBQUFBLFVBQ0NBLFFBREQsbUJBQ0NBLFFBREQ7QUFBQSxVQUNXQyxTQURYLG1CQUNXQSxTQURYO0FBQUEsVUFDc0JDLFFBRHRCLG1CQUNzQkEsUUFEdEI7O0FBRVBDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLTCxLQUFMLENBQVdDLFFBQXZCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFFSUMsb0JBQ0UsVUFERixHQUdJQyxXQUNFQSxRQURGLEdBRUk7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBUUYscUJBQVNLO0FBQWpCLFdBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFPTCxxQkFBU007QUFBaEIsV0FIQTtBQUlBLG1EQUpBO0FBS0E7QUFBQTtBQUFBO0FBQ0UsdUJBQVMsS0FBS1gsV0FEaEI7QUFFRSwyQkFBYSxLQUFLRSxlQUZwQjtBQUFBO0FBQUEsV0FMQTtBQVdFLGVBQUtKLEtBQUwsQ0FBV0MsT0FBWCxJQUFzQiw4QkFBQyxPQUFEO0FBWHhCLFNBUFo7QUF1QkU7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtLLEtBQUwsQ0FBV1EsV0FBWCxFQUFOO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBdkJGLE9BREY7QUEyQkQ7Ozs7Ozs7Ozs7O0VBM0NvQkMsZ0JBQU1DLFM7O0FBOEM3QixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNqQixLQUFEO0FBQUEsU0FBWTtBQUNsQ08sY0FBVVAsTUFBTU87QUFEa0IsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1XLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDO0FBQ0FMLGlCQUFhO0FBQUEsYUFBTUssU0FBU3pCLGVBQWVvQixXQUFmLEVBQVQsQ0FBTjtBQUFBO0FBRjJCLEdBQWY7QUFBQSxDQUEzQjs7ZUFLZSx5QkFBUUcsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDbkIsUUFBN0MsQzs7Ozs7Ozs7Ozs7Ozs7MEJBNURUSixPOzBCQUtBSSxROzBCQThDQWtCLGU7MEJBSUFDLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RE47Ozs7Ozs7Ozs7OztlQUVlO0FBQUEsU0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47QUFBQSxDIiwiZmlsZSI6InVzZXJJbmZvLmIzMzdlZjk4ODAwZThhZDYyYjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSdcclxuaW1wb3J0ICogYXMgdXNlckluZm9BY3Rpb24gZnJvbSAnYWN0aW9ucy91c2VySW5mbydcclxuXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZydcclxuXHJcbmNvbnN0IExhenlCYXIgPSBMb2FkYWJsZSh7XHJcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoLyp3ZWJwYWNrQ2h1bmtOYW1lOiAnYmFyJyovICcuL2JhcicpLFxyXG4gIGxvYWRpbmc6IExvYWRpbmdcclxufSlcclxuXHJcbmNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dCYXI6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QmFyOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICBMYXp5QmFyLnByZWxvYWQoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VySW5mbywgaXNMb2FkaW5nLCBlcnJvck1zZyB9ID0gdGhpcy5wcm9wcy51c2VySW5mb1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy51c2VySW5mbylcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgJ+ivt+axguS/oeaBr+S4rS4uLidcclxuICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgZXJyb3JNc2cgP1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2dcclxuICAgICAgICAgICAgICAgIDogPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+LS3nlKjmiLfkv6Hmga8tLTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+55So5oi35ZCN77yae3VzZXJJbmZvLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD7nroDku4vvvJp7dXNlckluZm8uaW50cm99PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVNb3VzZU92ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIOWKoOi9vWJhclxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0JhciAmJiA8TGF6eUJhciAvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ2V0VXNlckluZm8oKX0+54K55Ye75p+l6K+iPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHVzZXJJbmZvOiBzdGF0ZS51c2VySW5mb1xyXG59KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIC8vIOi/meS4qiBkaXNwYXRjaCDnmoTml7blgJnkvJrooqsgdGh1bmsg5oum5oiq77yM54S25ZCO5qC55o2u5byC5q2l6K+35rGC55qE57uT5p6c5YaN6L+b6KGM5LiN5ZCM55qEIGRpc3BhdGNoXHJcbiAgZ2V0VXNlckluZm86ICgpID0+IGRpc3BhdGNoKHVzZXJJbmZvQWN0aW9uLmdldFVzZXJJbmZvKCkpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VySW5mbykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9