/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"counter":"counter","userInfo":"userInfo","vendors~page1":"vendors~page1","page1":"page1","bar":"bar"}[chunkId]||chunkId) + "." + {"counter":"a135345e66c5be911e16","userInfo":"b337ef98800e8ad62b31","vendors~page1":"074b4f3878928444f85e","page1":"48d7a48c2b9156f467a9","bar":"64de00ec046dc746a03a"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _store = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(/*! router */ "./src/router/index.js");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 使用了 react-hot-loader 的 hot 函数后，不需要再手动 patch
// if (module.hot) { // 当模块 更新的时候，通知index.js 必须必，不管是 CLI 还是 webpack 配置文件
//   module.hot.accept()
// }

_reactDom2.default.render(
// 目前是直接引了路由组件放在这，而后面这里是 App 这样的组件，然后 App 才是真的入口index.js 文件
_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_router2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
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

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));

    _this.handleClick = function () {
      _this.setState({
        count: ++_this.state.count
      });
    };

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var count = this.state.count;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          'This is home~'
        ),
        _react2.default.createElement(
          'div',
          null,
          '\u5F53\u524D\u8BA1\u6570\uFF1A',
          count
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleClick },
          '\u70B9\u6211\u5427'
        ),
        _react2.default.createElement(
          'div',
          null,
          '\u6D4B\u8BD5\u70ED\u66FF\u6362\u6587\u6848'
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

  return Home;
}(_react2.default.Component);

var _default = Home;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', 'C:/Users/admin/Desktop/webpack-react/src/pages/home/index.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/webpack-react/src/pages/home/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/redux/actions/counter.js":
/*!**************************************!*\
  !*** ./src/redux/actions/counter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var INCREMENT = exports.INCREMENT = 'COUNTER/INCREMENT';
var DECREMENT = exports.DECREMENT = 'COUNTER/DECREMENT';
var RESET = exports.RESET = 'COUNTER/RESET';

var increment = exports.increment = function increment() {
  return {
    type: INCREMENT
  };
};

var decrement = exports.decrement = function decrement() {
  return {
    type: DECREMENT
  };
};

var reset = exports.reset = function reset() {
  return {
    type: RESET
  };
};

// conunter actions 用来定义 actionType 和 action 构造函数
// 分别在 reducer 和 每个需要dispatch 此类 action 的组件的地方会被用到

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INCREMENT, 'INCREMENT', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/counter.js');
  reactHotLoader.register(DECREMENT, 'DECREMENT', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/counter.js');
  reactHotLoader.register(RESET, 'RESET', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/counter.js');
  reactHotLoader.register(increment, 'increment', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/counter.js');
  reactHotLoader.register(decrement, 'decrement', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/counter.js');
  reactHotLoader.register(reset, 'reset', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/counter.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/redux/actions/userInfo.js":
/*!***************************************!*\
  !*** ./src/redux/actions/userInfo.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var GET_USER_INFO_REQUEST = exports.GET_USER_INFO_REQUEST = 'USERINFO/GET_USER_INFO_REQUEST';
var GET_USER_INFO_SUCCESS = exports.GET_USER_INFO_SUCCESS = 'USERINFO/GET_USER_INFO_SUCCESS';
var GET_USER_INFO_FAIL = exports.GET_USER_INFO_FAIL = 'USERINFO/GET_USER_INFO_FAIL';

/* function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
} */

/**
 * 创建三个关于请求的 action 构造函数, 或者直接写在异步 action 的 dispatch 中
 */
var getUserInfoRequest = function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  };
};

var getUserInfoSuccess = function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  };
};

var getUserInfoFail = function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  };
};

/**
 * 异步 action
 * 直接返回的不是 action 对象，而是函数
 * reducer 只能处理 对象形式的 action，所以函数形式的 action 会交给中间件来处理
 * redux-thunk 的作用：函数形式的 action，把他们转为标准的 action 给 reducer
 */
var getUserInfo = exports.getUserInfo = function getUserInfo() {
  return function (dispatch) {
    dispatch(getUserInfoRequest());
    setTimeout(function () {
      fetch('http://localhost:8088/api/user.json').then(function (res) {
        console.log(res);
        return res.json();
      }) // 切记这里的json是内置的方法，必须调用以返回一个 promise
      .then(function (json) {
        return dispatch(getUserInfoSuccess(json));
      }).catch(function () {
        return dispatch(getUserInfoFail());
      });
    }, 1000);
  };
};

/* 
  它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点。 你可以利用 Redux middleware 来进行日志记录、创建崩溃报告、调用异步接口或者路由等等。
*/

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_USER_INFO_REQUEST, 'GET_USER_INFO_REQUEST', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/userInfo.js');
  reactHotLoader.register(GET_USER_INFO_SUCCESS, 'GET_USER_INFO_SUCCESS', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/userInfo.js');
  reactHotLoader.register(GET_USER_INFO_FAIL, 'GET_USER_INFO_FAIL', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/userInfo.js');
  reactHotLoader.register(getUserInfoRequest, 'getUserInfoRequest', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/userInfo.js');
  reactHotLoader.register(getUserInfoSuccess, 'getUserInfoSuccess', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/userInfo.js');
  reactHotLoader.register(getUserInfoFail, 'getUserInfoFail', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/userInfo.js');
  reactHotLoader.register(getUserInfo, 'getUserInfo', 'C:/Users/admin/Desktop/webpack-react/src/redux/actions/userInfo.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/redux/reducers/counter.js":
/*!***************************************!*\
  !*** ./src/redux/reducers/counter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _counter = __webpack_require__(/*! actions/counter */ "./src/redux/actions/counter.js");

var counterAction = _interopRequireWildcard(_counter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * 初始化 state
 * 或者在创建 store 时在 createStore 函数中传入第二个参数 initState
 */
var initState = {
  count: 0

  /**
   * reducer
   */
};
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case counterAction.INCREMENT:
      return {
        count: ++state.count
      };
    case counterAction.DECREMENT:
      return {
        count: --state.count
      };
    case counterAction.RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initState, 'initState', 'C:/Users/admin/Desktop/webpack-react/src/redux/reducers/counter.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/webpack-react/src/redux/reducers/counter.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/redux/reducers/userInfo.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/userInfo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _userInfo = __webpack_require__(/*! actions/userInfo */ "./src/redux/actions/userInfo.js");

var userInfoAction = _interopRequireWildcard(_userInfo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: ''
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case userInfoAction.GET_USER_INFO_REQUEST:
      return _extends({}, state, {
        isLoading: true,
        userInfo: {},
        errorMsg: ''
      });
    case userInfoAction.GET_USER_INFO_SUCCESS:
      console.log(action.userInfo, 6666);
      return _extends({}, state, {
        isLoading: false,
        userInfo: action.userInfo,
        errorMsg: ''
      });
    case userInfoAction.GET_USER_INFO_FAIL:
      return _extends({}, state, {
        isLoading: false,
        userInfo: {},
        errorMsg: '请求错误'
      });
    default:
      return state;
  }
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initState, 'initState', 'C:/Users/admin/Desktop/webpack-react/src/redux/reducers/userInfo.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/webpack-react/src/redux/reducers/userInfo.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _counter = __webpack_require__(/*! reducers/counter */ "./src/redux/reducers/counter.js");

var _counter2 = _interopRequireDefault(_counter);

var _userInfo = __webpack_require__(/*! reducers/userInfo */ "./src/redux/reducers/userInfo.js");

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// import combineReducers from './reducer.js' 使用官方的，顺别废弃reducers文件

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  counter: _counter2.default,
  userInfo: _userInfo2.default
}), (0, _redux.applyMiddleware)(_reduxThunk2.default));

var _default = store;
exports.default = _default;

// store 就是把它们联系到一起的对象。store 有以下职责：

// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 触发reducers方法更新 state；
// 通过subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, 'store', 'C:/Users/admin/Desktop/webpack-react/src/redux/store.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/webpack-react/src/redux/store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactLoadable = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");

var _home = __webpack_require__(/*! pages/home */ "./src/pages/home/index.js");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})(); // 如果用了babel，babel中也要配置插件


// import Page1 from 'pages/page1'
// import Counter from 'pages/counter'
// import UserInfo from 'pages/userInfo'

var Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};

var Page1 = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.all(/*! import() | page1 */[__webpack_require__.e("vendors~page1"), __webpack_require__.e("page1")]).then(__webpack_require__.t.bind(null, /*! pages/page1 */ "./src/pages/page1/index.js", 7));
  },
  loading: Loading
});

var Counter = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | counter */ "counter").then(__webpack_require__.t.bind(null, /*! pages/counter */ "./src/pages/counter/index.js", 7));
  },
  loading: Loading
});

var UserInfo = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | userInfo */ "userInfo").then(__webpack_require__.t.bind(null, /*! pages/userInfo */ "./src/pages/userInfo/index.js", 7));
  },
  loading: Loading
});

var RouteConfig = function RouteConfig() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: { pathname: '/' } },
            '\u9996\u9875'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/page1' },
            'Page1'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/counter' },
            'Counter'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/userinfo' },
            '\u7528\u6237\u67E5\u8BE2'
          )
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/page1', component: Page1 }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/counter', component: Counter }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/userinfo', component: UserInfo })
      )
    )
  );
};

var _default = (0, _reactHotLoader.hot)(module)(RouteConfig);

exports.default = _default;

/**
 * 试验：
 * 1. path属性修改为{}格式 【done】
 * 2. 测试 exact 性质 【done】
 */

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, 'Loading', 'C:/Users/admin/Desktop/webpack-react/src/router/index.js');
  reactHotLoader.register(Page1, 'Page1', 'C:/Users/admin/Desktop/webpack-react/src/router/index.js');
  reactHotLoader.register(Counter, 'Counter', 'C:/Users/admin/Desktop/webpack-react/src/router/index.js');
  reactHotLoader.register(UserInfo, 'UserInfo', 'C:/Users/admin/Desktop/webpack-react/src/router/index.js');
  reactHotLoader.register(RouteConfig, 'RouteConfig', 'C:/Users/admin/Desktop/webpack-react/src/router/index.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/webpack-react/src/router/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJJbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0RG9tIiwicmVuZGVyIiwic3RvcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiSG9tZSIsImFyZ3VtZW50cyIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJjb3VudCIsInN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJSRVNFVCIsImluY3JlbWVudCIsInR5cGUiLCJkZWNyZW1lbnQiLCJyZXNldCIsIkdFVF9VU0VSX0lORk9fUkVRVUVTVCIsIkdFVF9VU0VSX0lORk9fU1VDQ0VTUyIsIkdFVF9VU0VSX0lORk9fRkFJTCIsImdldFVzZXJJbmZvUmVxdWVzdCIsImdldFVzZXJJbmZvU3VjY2VzcyIsInVzZXJJbmZvIiwiZ2V0VXNlckluZm9GYWlsIiwiZ2V0VXNlckluZm8iLCJkaXNwYXRjaCIsInNldFRpbWVvdXQiLCJmZXRjaCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzIiwianNvbiIsImNhdGNoIiwiY291bnRlckFjdGlvbiIsImluaXRTdGF0ZSIsImFjdGlvbiIsInVzZXJJbmZvQWN0aW9uIiwiaXNMb2FkaW5nIiwiZXJyb3JNc2ciLCJjb3VudGVyIiwidGh1bmsiLCJMb2FkaW5nIiwiUGFnZTEiLCJsb2FkZXIiLCJsb2FkaW5nIiwiQ291bnRlciIsIlVzZXJJbmZvIiwiUm91dGVDb25maWciLCJwYXRobmFtZSIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaURBQXlDLHNHQUFzRyw2QkFBNkIsc0tBQXNLO0FBQ2xWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSx5Q0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUF3QixrQ0FBa0M7QUFDMUQsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBLGtEQUEwQyxvQkFBb0IsV0FBVzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDek5BOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsbUJBQVNDLE1BQVQ7QUFDRTtBQUNBO0FBQUMsc0JBQUQ7QUFBQSxJQUFVLE9BQU9DLGVBQWpCO0FBQ0UsZ0NBQUMsZ0JBQUQ7QUFERixDQUZGLEVBS0VDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FMRixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkMsSTs7O0FBQ25CLGtCQUFjO0FBQUE7O0FBQUEsNkdBQ0hDLFNBREc7O0FBQUEsVUFPZEMsV0FQYyxHQU9BLFlBQU07QUFDbEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLGVBQU8sRUFBRSxNQUFLQyxLQUFMLENBQVdEO0FBRFIsT0FBZDtBQUdELEtBWGE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hELGFBQU87QUFESSxLQUFiO0FBRlk7QUFLYjs7Ozs2QkFRUTtBQUFBLFVBQ0RBLEtBREMsR0FDUyxLQUFLQyxLQURkLENBQ0RELEtBREM7O0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFXQTtBQUFYLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtGLFdBQXRCO0FBQUE7QUFBQSxTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLE9BREY7QUFRRDs7Ozs7Ozs7Ozs7RUF4QitCSSxnQkFBTUMsUzs7ZUFBbkJQLEk7Ozs7Ozs7Ozs7Ozs7MEJBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hkLElBQU1RLGdDQUFZLG1CQUFsQjtBQUNBLElBQU1DLGdDQUFZLG1CQUFsQjtBQUNBLElBQU1DLHdCQUFRLGVBQWQ7O0FBRUEsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLFNBQU87QUFDOUJDLFVBQU1KO0FBRHdCLEdBQVA7QUFBQSxDQUFsQjs7QUFJQSxJQUFNSyxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsU0FBTztBQUM5QkQsVUFBTUg7QUFEd0IsR0FBUDtBQUFBLENBQWxCOztBQUlBLElBQU1LLHdCQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUFPO0FBQzFCRixVQUFNRjtBQURvQixHQUFQO0FBQUEsQ0FBZDs7QUFJUDtBQUNBOzs7Ozs7Ozs7Ozs7OzBCQWpCYUYsUzswQkFDQUMsUzswQkFDQUMsSzswQkFFQUMsUzswQkFJQUUsUzswQkFJQUMsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTixJQUFNQyx3REFBd0IsZ0NBQTlCO0FBQ0EsSUFBTUMsd0RBQXdCLGdDQUE5QjtBQUNBLElBQU1DLGtEQUFxQiw2QkFBM0I7O0FBRVA7Ozs7OztBQU1BOzs7QUFHQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFNBQU87QUFDaENOLFVBQU1HO0FBRDBCLEdBQVA7QUFBQSxDQUEzQjs7QUFJQSxJQUFNSSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q1IsVUFBTUkscUJBRGtDO0FBRXhDSTtBQUZ3QyxHQUFmO0FBQUEsQ0FBM0I7O0FBS0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU87QUFDN0JULFVBQU1LO0FBRHVCLEdBQVA7QUFBQSxDQUF4Qjs7QUFJQTs7Ozs7O0FBTU8sSUFBTUssb0NBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQy9CLFNBQU8sb0JBQVk7QUFDakJDLGFBQVNMLG9CQUFUO0FBQ0FNLGVBQVcsWUFBTTtBQUNmQyxZQUFNLHFDQUFOLEVBQ0dDLElBREgsQ0FDUSxlQUFPO0FBQ1hDLGdCQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDQSxlQUFPQSxJQUFJQyxJQUFKLEVBQVA7QUFDRCxPQUpILEVBSUs7QUFKTCxPQUtHSixJQUxILENBS1E7QUFBQSxlQUFRSCxTQUFTSixtQkFBbUJXLElBQW5CLENBQVQsQ0FBUjtBQUFBLE9BTFIsRUFNR0MsS0FOSCxDQU1TO0FBQUEsZUFBTVIsU0FBU0YsaUJBQVQsQ0FBTjtBQUFBLE9BTlQ7QUFPRCxLQVJELEVBUUcsSUFSSDtBQVNELEdBWEQ7QUFZRCxDQWJNOztBQWVQOzs7Ozs7Ozs7Ozs7Ozs7MEJBL0NhTixxQjswQkFDQUMscUI7MEJBQ0FDLGtCOzBCQVdQQyxrQjswQkFJQUMsa0I7MEJBS0FFLGU7MEJBVU9DLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENiOztJQUFZVSxhOzs7Ozs7Ozs7O0FBRVo7Ozs7QUFJQSxJQUFNQyxZQUFZO0FBQ2hCN0IsU0FBTzs7QUFHVDs7O0FBSmtCLENBQWxCO2VBT2Usb0JBQStCO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QjRCLFNBQXNCO0FBQUEsTUFBWEMsTUFBVzs7QUFDNUMsVUFBUUEsT0FBT3RCLElBQWY7QUFDRSxTQUFLb0IsY0FBY3hCLFNBQW5CO0FBQ0UsYUFBTztBQUNMSixlQUFPLEVBQUVDLE1BQU1EO0FBRFYsT0FBUDtBQUdGLFNBQUs0QixjQUFjdkIsU0FBbkI7QUFDRSxhQUFPO0FBQ0xMLGVBQU8sRUFBRUMsTUFBTUQ7QUFEVixPQUFQO0FBR0YsU0FBSzRCLGNBQWN0QixLQUFuQjtBQUNFLGFBQU87QUFDTE4sZUFBTztBQURGLE9BQVA7QUFHRjtBQUNFLGFBQU9DLEtBQVA7QUFkSjtBQWdCRCxDOzs7Ozs7Ozs7Ozs7OzswQkF4Qks0QixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05OOztJQUFZRSxjOzs7Ozs7Ozs7O0FBRVosSUFBTUYsWUFBWTtBQUNoQkcsYUFBVyxLQURLO0FBRWhCaEIsWUFBVSxFQUZNO0FBR2hCaUIsWUFBVTtBQUhNLENBQWxCOztlQU1lLG9CQUErQjtBQUFBLE1BQTlCaEMsS0FBOEIsdUVBQXRCNEIsU0FBc0I7QUFBQSxNQUFYQyxNQUFXOztBQUM1QyxVQUFRQSxPQUFPdEIsSUFBZjtBQUNFLFNBQUt1QixlQUFlcEIscUJBQXBCO0FBQ0UsMEJBQ0tWLEtBREw7QUFFRStCLG1CQUFXLElBRmI7QUFHRWhCLGtCQUFVLEVBSFo7QUFJRWlCLGtCQUFVO0FBSlo7QUFNRixTQUFLRixlQUFlbkIscUJBQXBCO0FBQ0VXLGNBQVFDLEdBQVIsQ0FBWU0sT0FBT2QsUUFBbkIsRUFBNkIsSUFBN0I7QUFDQSwwQkFDS2YsS0FETDtBQUVFK0IsbUJBQVcsS0FGYjtBQUdFaEIsa0JBQVVjLE9BQU9kLFFBSG5CO0FBSUVpQixrQkFBVTtBQUpaO0FBTUYsU0FBS0YsZUFBZWxCLGtCQUFwQjtBQUNFLDBCQUNLWixLQURMO0FBRUUrQixtQkFBVyxLQUZiO0FBR0VoQixrQkFBVSxFQUhaO0FBSUVpQixrQkFBVTtBQUpaO0FBTUY7QUFDRSxhQUFPaEMsS0FBUDtBQXhCSjtBQTBCRCxDOzs7Ozs7Ozs7Ozs7OzswQkFqQ0s0QixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1wQyxRQUFRLHdCQUFZLDRCQUFnQjtBQUN4Q3lDLDRCQUR3QztBQUV4Q2xCO0FBRndDLENBQWhCLENBQVosRUFHViw0QkFBZ0JtQixvQkFBaEIsQ0FIVSxDQUFkOztlQUtlMUMsSzs7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OzswQkFiTUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk47Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O01BRnNDOzs7QUFHdEM7QUFDQTtBQUNBOztBQUVBLElBQU0yQyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjtBQUFBLENBQWhCOztBQUVBLElBQU1DLFFBQVEsNkJBQVM7QUFDckJDLFVBQVE7QUFBQSxXQUFNLHVNQUFOO0FBQUEsR0FEYTtBQUVyQkMsV0FBU0g7QUFGWSxDQUFULENBQWQ7O0FBS0EsSUFBTUksVUFBVSw2QkFBUztBQUN2QkYsVUFBUTtBQUFBLFdBQU0seUpBQU47QUFBQSxHQURlO0FBRXZCQyxXQUFTSDtBQUZjLENBQVQsQ0FBaEI7O0FBS0EsSUFBTUssV0FBVyw2QkFBUztBQUN4QkgsVUFBUTtBQUFBLFdBQU0sNkpBQU47QUFBQSxHQURnQjtBQUV4QkMsV0FBU0g7QUFGZSxDQUFULENBQWpCOztBQU1BLElBQU1NLGNBQWMsU0FBZEEsV0FBYztBQUFBLFNBQ2xCO0FBQUMsaUNBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUMsZ0NBQUQ7QUFBQSxjQUFNLElBQUksRUFBRUMsVUFBVSxHQUFaLEVBQVY7QUFBQTtBQUFBO0FBQUosU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUMsZ0NBQUQ7QUFBQSxjQUFNLElBQUcsUUFBVDtBQUFBO0FBQUE7QUFBSixTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQyxnQ0FBRDtBQUFBLGNBQU0sSUFBRyxVQUFUO0FBQUE7QUFBQTtBQUFKLFNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSTtBQUFDLGdDQUFEO0FBQUEsY0FBTSxJQUFHLFdBQVQ7QUFBQTtBQUFBO0FBQUo7QUFKRixPQURGO0FBT0U7QUFBQyw4QkFBRDtBQUFBO0FBQ0Usc0NBQUMscUJBQUQsSUFBTyxNQUFLLEdBQVosRUFBZ0IsV0FBaEIsRUFBc0IsV0FBVy9DLGNBQWpDLEdBREY7QUFFRSxzQ0FBQyxxQkFBRCxJQUFPLE1BQUssUUFBWixFQUFxQixXQUFXeUMsS0FBaEMsR0FGRjtBQUdFLHNDQUFDLHFCQUFELElBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVdHLE9BQWxDLEdBSEY7QUFJRSxzQ0FBQyxxQkFBRCxJQUFPLE1BQUssV0FBWixFQUF3QixXQUFXQyxRQUFuQztBQUpGO0FBUEY7QUFERixHQURrQjtBQUFBLENBQXBCOztlQW1CZSx5QkFBSUcsTUFBSixFQUFZRixXQUFaLEM7Ozs7QUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBdkNNTixPOzBCQUVBQyxLOzBCQUtBRyxPOzBCQUtBQyxROzBCQU1BQyxXIiwiZmlsZSI6Im1haW4uNmVkODk4ZjY1Y2UyOTI5MTUzMmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJjb3VudGVyXCI6XCJjb3VudGVyXCIsXCJ1c2VySW5mb1wiOlwidXNlckluZm9cIixcInZlbmRvcnN+cGFnZTFcIjpcInZlbmRvcnN+cGFnZTFcIixcInBhZ2UxXCI6XCJwYWdlMVwiLFwiYmFyXCI6XCJiYXJcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCJjb3VudGVyXCI6XCJhMTM1MzQ1ZTY2YzViZTkxMWUxNlwiLFwidXNlckluZm9cIjpcImIzMzdlZjk4ODAwZThhZDYyYjMxXCIsXCJ2ZW5kb3JzfnBhZ2UxXCI6XCIwNzRiNGYzODc4OTI4NDQ0Zjg1ZVwiLFwicGFnZTFcIjpcIjQ4ZDdhNDhjMmI5MTU2ZjQ2N2E5XCIsXCJiYXJcIjpcIjY0ZGUwMGVjMDQ2ZGM3NDZhMDNhXCJ9W2NodW5rSWRdICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknKTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC9zdG9yZSdcbmltcG9ydCBSb3V0ZUNvbmZpZyBmcm9tICdyb3V0ZXInXG5cbi8vIOS9v+eUqOS6hiByZWFjdC1ob3QtbG9hZGVyIOeahCBob3Qg5Ye95pWw5ZCO77yM5LiN6ZyA6KaB5YaN5omL5YqoIHBhdGNoXG4vLyBpZiAobW9kdWxlLmhvdCkgeyAvLyDlvZPmqKHlnZcg5pu05paw55qE5pe25YCZ77yM6YCa55+laW5kZXguanMg5b+F6aG75b+F77yM5LiN566h5pivIENMSSDov5jmmK8gd2VicGFjayDphY3nva7mlofku7Zcbi8vICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuLy8gfVxuXG5SZWFjdERvbS5yZW5kZXIoXG4gIC8vIOebruWJjeaYr+ebtOaOpeW8leS6hui3r+eUsee7hOS7tuaUvuWcqOi/me+8jOiAjOWQjumdoui/memHjOaYryBBcHAg6L+Z5qC355qE57uE5Lu277yM54S25ZCOIEFwcCDmiY3mmK/nnJ/nmoTlhaXlj6NpbmRleC5qcyDmlofku7ZcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlQ29uZmlnIC8+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlciguLi5hcmd1bWVudHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb3VudDogMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY291bnQ6ICsrdGhpcy5zdGF0ZS5jb3VudFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IGNvdW50IH0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+VGhpcyBpcyBob21lfjwvZGl2PlxyXG4gICAgICAgIDxkaXY+5b2T5YmN6K6h5pWw77yae2NvdW50fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+54K55oiR5ZCnPC9idXR0b24+XHJcbiAgICAgICAgPGRpdj7mtYvor5Xng63mm7/mjaLmlofmoYg8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IElOQ1JFTUVOVCA9ICdDT1VOVEVSL0lOQ1JFTUVOVCdcclxuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVCA9ICdDT1VOVEVSL0RFQ1JFTUVOVCdcclxuZXhwb3J0IGNvbnN0IFJFU0VUID0gJ0NPVU5URVIvUkVTRVQnXHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4gKHtcclxuICB0eXBlOiBJTkNSRU1FTlRcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZW1lbnQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IERFQ1JFTUVOVFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBSRVNFVFxyXG59KVxyXG5cclxuLy8gY29udW50ZXIgYWN0aW9ucyDnlKjmnaXlrprkuYkgYWN0aW9uVHlwZSDlkowgYWN0aW9uIOaehOmAoOWHveaVsFxyXG4vLyDliIbliKvlnKggcmVkdWNlciDlkowg5q+P5Liq6ZyA6KaBZGlzcGF0Y2gg5q2k57G7IGFjdGlvbiDnmoTnu4Tku7bnmoTlnLDmlrnkvJrooqvnlKjliLAiLCJleHBvcnQgY29uc3QgR0VUX1VTRVJfSU5GT19SRVFVRVNUID0gJ1VTRVJJTkZPL0dFVF9VU0VSX0lORk9fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0lORk9fU1VDQ0VTUyA9ICdVU0VSSU5GTy9HRVRfVVNFUl9JTkZPX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9JTkZPX0ZBSUwgPSAnVVNFUklORk8vR0VUX1VTRVJfSU5GT19GQUlMJ1xyXG5cclxuLyogZnVuY3Rpb24gZ2V0VXNlckluZm9SZXF1ZXN0KCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBHRVRfVVNFUl9JTkZPX1JFUVVFU1RcclxuICB9XHJcbn0gKi9cclxuXHJcbi8qKlxyXG4gKiDliJvlu7rkuInkuKrlhbPkuo7or7fmsYLnmoQgYWN0aW9uIOaehOmAoOWHveaVsCwg5oiW6ICF55u05o6l5YaZ5Zyo5byC5q2lIGFjdGlvbiDnmoQgZGlzcGF0Y2gg5LitXHJcbiAqL1xyXG5jb25zdCBnZXRVc2VySW5mb1JlcXVlc3QgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IEdFVF9VU0VSX0lORk9fUkVRVUVTVFxyXG59KVxyXG5cclxuY29uc3QgZ2V0VXNlckluZm9TdWNjZXNzID0gKHVzZXJJbmZvKSA9PiAoe1xyXG4gIHR5cGU6IEdFVF9VU0VSX0lORk9fU1VDQ0VTUyxcclxuICB1c2VySW5mb1xyXG59KVxyXG5cclxuY29uc3QgZ2V0VXNlckluZm9GYWlsID0gKCkgPT4gKHtcclxuICB0eXBlOiBHRVRfVVNFUl9JTkZPX0ZBSUxcclxufSlcclxuXHJcbi8qKlxyXG4gKiDlvILmraUgYWN0aW9uXHJcbiAqIOebtOaOpei/lOWbnueahOS4jeaYryBhY3Rpb24g5a+56LGh77yM6ICM5piv5Ye95pWwXHJcbiAqIHJlZHVjZXIg5Y+q6IO95aSE55CGIOWvueixoeW9ouW8j+eahCBhY3Rpb27vvIzmiYDku6Xlh73mlbDlvaLlvI/nmoQgYWN0aW9uIOS8muS6pOe7meS4remXtOS7tuadpeWkhOeQhlxyXG4gKiByZWR1eC10aHVuayDnmoTkvZznlKjvvJrlh73mlbDlvaLlvI/nmoQgYWN0aW9u77yM5oqK5LuW5Lus6L2s5Li65qCH5YeG55qEIGFjdGlvbiDnu5kgcmVkdWNlclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKCkgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRVc2VySW5mb1JlcXVlc3QoKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDg4L2FwaS91c2VyLmpzb24nKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pIC8vIOWIh+iusOi/memHjOeahGpzb27mmK/lhoXnva7nmoTmlrnms5XvvIzlv4XpobvosIPnlKjku6Xov5Tlm57kuIDkuKogcHJvbWlzZVxyXG4gICAgICAgIC50aGVuKGpzb24gPT4gZGlzcGF0Y2goZ2V0VXNlckluZm9TdWNjZXNzKGpzb24pKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZ2V0VXNlckluZm9GYWlsKCkpKVxyXG4gICAgfSwgMTAwMClcclxuICB9XHJcbn1cclxuXHJcbi8qIFxyXG4gIOWug+aPkOS+m+eahOaYr+S9jeS6jiBhY3Rpb24g6KKr5Y+R6LW35LmL5ZCO77yM5Yiw6L6+IHJlZHVjZXIg5LmL5YmN55qE5omp5bGV54K544CCIOS9oOWPr+S7peWIqeeUqCBSZWR1eCBtaWRkbGV3YXJlIOadpei/m+ihjOaXpeW/l+iusOW9leOAgeWIm+W7uuW0qea6g+aKpeWRiuOAgeiwg+eUqOW8guatpeaOpeWPo+aIluiAhei3r+eUseetieetieOAglxyXG4qL1xyXG4iLCJpbXBvcnQgKiBhcyBjb3VudGVyQWN0aW9uIGZyb20gJ2FjdGlvbnMvY291bnRlcidcclxuXHJcbi8qKlxyXG4gKiDliJ3lp4vljJYgc3RhdGVcclxuICog5oiW6ICF5Zyo5Yib5bu6IHN0b3JlIOaXtuWcqCBjcmVhdGVTdG9yZSDlh73mlbDkuK3kvKDlhaXnrKzkuozkuKrlj4LmlbAgaW5pdFN0YXRlXHJcbiAqL1xyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgY291bnQ6IDBcclxufVxyXG5cclxuLyoqXHJcbiAqIHJlZHVjZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBjb3VudGVyQWN0aW9uLklOQ1JFTUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb3VudDogKytzdGF0ZS5jb3VudFxyXG4gICAgICB9XHJcbiAgICBjYXNlIGNvdW50ZXJBY3Rpb24uREVDUkVNRU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50OiAtLXN0YXRlLmNvdW50XHJcbiAgICAgIH1cclxuICAgIGNhc2UgY291bnRlckFjdGlvbi5SRVNFVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb3VudDogMFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIHVzZXJJbmZvQWN0aW9uIGZyb20gJ2FjdGlvbnMvdXNlckluZm8nXHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICB1c2VySW5mbzoge30sXHJcbiAgZXJyb3JNc2c6ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSB1c2VySW5mb0FjdGlvbi5HRVRfVVNFUl9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHVzZXJJbmZvOiB7fSxcclxuICAgICAgICBlcnJvck1zZzogJydcclxuICAgICAgfVxyXG4gICAgY2FzZSB1c2VySW5mb0FjdGlvbi5HRVRfVVNFUl9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi51c2VySW5mbywgNjY2NilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJJbmZvOiBhY3Rpb24udXNlckluZm8sXHJcbiAgICAgICAgZXJyb3JNc2c6ICcnXHJcbiAgICAgIH1cclxuICAgIGNhc2UgdXNlckluZm9BY3Rpb24uR0VUX1VTRVJfSU5GT19GQUlMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgdXNlckluZm86IHt9LFxyXG4gICAgICAgIGVycm9yTXNnOiAn6K+35rGC6ZSZ6K+vJ1xyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgY291bnRlciBmcm9tICdyZWR1Y2Vycy9jb3VudGVyJ1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSAncmVkdWNlcnMvdXNlckluZm8nXHJcbi8vIGltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VyLmpzJyDkvb/nlKjlrpjmlrnnmoTvvIzpobrliKvlup/lvINyZWR1Y2Vyc+aWh+S7tlxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGNvdW50ZXIsXHJcbiAgdXNlckluZm9cclxufSksIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG5cclxuLy8gc3RvcmUg5bCx5piv5oqK5a6D5Lus6IGU57O75Yiw5LiA6LW355qE5a+56LGh44CCc3RvcmUg5pyJ5Lul5LiL6IGM6LSj77yaXHJcblxyXG4vLyDnu7TmjIHlupTnlKjnmoQgc3RhdGXvvJtcclxuLy8g5o+Q5L6bIGdldFN0YXRlKCkg5pa55rOV6I635Y+WIHN0YXRl77ybXHJcbi8vIOaPkOS+myBkaXNwYXRjaChhY3Rpb24pIOinpuWPkXJlZHVjZXJz5pa55rOV5pu05pawIHN0YXRl77ybXHJcbi8vIOmAmui/h3N1YnNjcmliZShsaXN0ZW5lcikg5rOo5YaM55uR5ZCs5ZmoO1xyXG4vLyDpgJrov4cgc3Vic2NyaWJlKGxpc3RlbmVyKSDov5Tlm57nmoTlh73mlbDms6jplIDnm5HlkKzlmajjgIJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZScgLy8g5aaC5p6c55So5LqGYmFiZWzvvIxiYWJlbOS4reS5n+imgemFjee9ruaPkuS7tlxyXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9ob21lJ1xyXG4vLyBpbXBvcnQgUGFnZTEgZnJvbSAncGFnZXMvcGFnZTEnXHJcbi8vIGltcG9ydCBDb3VudGVyIGZyb20gJ3BhZ2VzL2NvdW50ZXInXHJcbi8vIGltcG9ydCBVc2VySW5mbyBmcm9tICdwYWdlcy91c2VySW5mbydcclxuXHJcbmNvbnN0IExvYWRpbmcgPSAoKSA9PiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuXHJcbmNvbnN0IFBhZ2UxID0gTG9hZGFibGUoe1xyXG4gIGxvYWRlcjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZTFcIiAqLyAncGFnZXMvcGFnZTEnKSxcclxuICBsb2FkaW5nOiBMb2FkaW5nXHJcbn0pXHJcblxyXG5jb25zdCBDb3VudGVyID0gTG9hZGFibGUoe1xyXG4gIGxvYWRlcjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY291bnRlclwiICovICdwYWdlcy9jb3VudGVyJyksXHJcbiAgbG9hZGluZzogTG9hZGluZ1xyXG59KVxyXG5cclxuY29uc3QgVXNlckluZm8gPSBMb2FkYWJsZSh7XHJcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ1c2VySW5mb1wiICovICdwYWdlcy91c2VySW5mbycpLFxyXG4gIGxvYWRpbmc6IExvYWRpbmdcclxufSlcclxuXHJcblxyXG5jb25zdCBSb3V0ZUNvbmZpZyA9ICgpID0+IChcclxuICA8Um91dGVyPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT48TGluayB0bz17eyBwYXRobmFtZTogJy8nIH19PummlumhtTwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz0nL3BhZ2UxJz5QYWdlMTwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz0nL2NvdW50ZXInPkNvdW50ZXI8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89Jy91c2VyaW5mbyc+55So5oi35p+l6K+iPC9MaW5rPjwvbGk+ICAgICAgICBcclxuICAgICAgPC91bD5cclxuICAgICAgPFN3aXRjaD5cclxuICAgICAgICA8Um91dGUgcGF0aD0nLycgZXhhY3QgY29tcG9uZW50PXtIb21lfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvcGFnZTEnIGNvbXBvbmVudD17UGFnZTF9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9jb3VudGVyJyBjb21wb25lbnQ9e0NvdW50ZXJ9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy91c2VyaW5mbycgY29tcG9uZW50PXtVc2VySW5mb30gLz5cclxuICAgICAgPC9Td2l0Y2g+XHJcbiAgICA8L2Rpdj5cclxuICA8L1JvdXRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoUm91dGVDb25maWcpXHJcblxyXG4vKipcclxuICog6K+V6aqM77yaXHJcbiAqIDEuIHBhdGjlsZ7mgKfkv67mlLnkuLp7feagvOW8jyDjgJBkb25l44CRXHJcbiAqIDIuIOa1i+ivlSBleGFjdCDmgKfotKgg44CQZG9uZeOAkVxyXG4gKi8iXSwic291cmNlUm9vdCI6IiJ9