(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter"],{

/***/ "./src/pages/counter/index.js":
/*!************************************!*\
  !*** ./src/pages/counter/index.js ***!
  \************************************/
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

var _counter = __webpack_require__(/*! actions/counter */ "./src/redux/actions/counter.js");

var counterAction = _interopRequireWildcard(_counter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          '\u5F53\u524D\u8BA1\u6570\u4E3A(\u663E\u793A redux \u8BA1\u6570)\uFF1A',
          this.props.counter.count
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.props.increment();
            } },
          '\u81EA\u589E'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.props.decrement();
            } },
          '\u81EA\u51CF'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.props.reset();
            } },
          '\u91CD\u7F6E'
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

  return Counter;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    counter: state.counter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    increment: function increment() {
      return dispatch(counterAction.increment());
    },
    decrement: function decrement() {
      return dispatch(counterAction.decrement());
    },
    reset: function reset() {
      return dispatch(counterAction.reset());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Counter, 'Counter', 'C:/Users/admin/Desktop/webpack-react/src/pages/counter/index.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'C:/Users/admin/Desktop/webpack-react/src/pages/counter/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/admin/Desktop/webpack-react/src/pages/counter/index.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/webpack-react/src/pages/counter/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY291bnRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb3VudGVyQWN0aW9uIiwiQ291bnRlciIsInByb3BzIiwiY291bnRlciIsImNvdW50IiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwicmVzZXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVOQyxPOzs7Ozs7Ozs7Ozs2QkFDSztBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBeUIsZUFBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CQztBQUE1QyxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtGLEtBQUwsQ0FBV0csU0FBWCxFQUFOO0FBQUEsYUFBakI7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBUSxTQUFTO0FBQUEscUJBQU0sT0FBS0gsS0FBTCxDQUFXSSxTQUFYLEVBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUEsU0FIRjtBQUlFO0FBQUE7QUFBQSxZQUFRLFNBQVM7QUFBQSxxQkFBTSxPQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUpGLE9BREY7QUFRRDs7Ozs7Ozs7Ozs7RUFWbUJDLGdCQUFNQyxTOztBQWE1QixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDUixhQUFTUSxNQUFNUjtBQURtQixHQUFaO0FBQUEsQ0FBeEI7O0FBS0EsSUFBTVMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENSLGVBQVc7QUFBQSxhQUFNUSxTQUFTYixjQUFjSyxTQUFkLEVBQVQsQ0FBTjtBQUFBLEtBRDZCO0FBRXhDQyxlQUFXO0FBQUEsYUFBTU8sU0FBU2IsY0FBY00sU0FBZCxFQUFULENBQU47QUFBQSxLQUY2QjtBQUd4Q0MsV0FBTztBQUFBLGFBQU1NLFNBQVNiLGNBQWNPLEtBQWQsRUFBVCxDQUFOO0FBQUE7QUFIaUMsR0FBZjtBQUFBLENBQTNCOztlQU1lLHlCQUFRRyxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNYLE9BQTdDLEM7Ozs7Ozs7Ozs7Ozs7OzBCQXhCVEEsTzswQkFhQVMsZTswQkFLQUUsa0IiLCJmaWxlIjoiY291bnRlci5hMTM1MzQ1ZTY2YzViZTkxMWUxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBjb3VudGVyQWN0aW9uIGZyb20gJ2FjdGlvbnMvY291bnRlcicgXHJcblxyXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+5b2T5YmN6K6h5pWw5Li6KOaYvuekuiByZWR1eCDorqHmlbAp77yae3RoaXMucHJvcHMuY291bnRlci5jb3VudH08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaW5jcmVtZW50KCl9PuiHquWinjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWNyZW1lbnQoKX0+6Ieq5YePPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlc2V0KCl9PumHjee9rjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyXHJcbn0pXHJcblxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGluY3JlbWVudDogKCkgPT4gZGlzcGF0Y2goY291bnRlckFjdGlvbi5pbmNyZW1lbnQoKSksXHJcbiAgZGVjcmVtZW50OiAoKSA9PiBkaXNwYXRjaChjb3VudGVyQWN0aW9uLmRlY3JlbWVudCgpKSxcclxuICByZXNldDogKCkgPT4gZGlzcGF0Y2goY291bnRlckFjdGlvbi5yZXNldCgpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlcikiXSwic291cmNlUm9vdCI6IiJ9