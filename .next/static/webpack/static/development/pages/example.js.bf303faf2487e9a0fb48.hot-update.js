webpackHotUpdate("static/development/pages/example.js",{

/***/ "./utils/auth/withAuth.js":
/*!********************************!*\
  !*** ./utils/auth/withAuth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _initFirebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./initFirebase */ \"./utils/auth/initFirebase.js\");\n/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/authActions */ \"./redux/actions/authActions.js\");\n/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/counterActions */ \"./redux/actions/counterActions.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/anjan/workspace/firebaseAuth/utils/auth/withAuth.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import { auth } from \"firebase\";\n\n\n\n\n\n\n\nvar withAuth = function withAuth(Component) {\n  return /*#__PURE__*/function (_React$Component) {\n    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class, _React$Component);\n\n    var _super = _createSuper(_class);\n\n    function _class(props) {\n      var _this;\n\n      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _class);\n\n      _this = _super.call(this, props);\n      _this.state = {\n        status: \"LOADING\"\n      };\n      return _this;\n    }\n\n    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_class, [{\n      key: \"componentDidMount\",\n      value: function componentDidMount() {\n        var _this2 = this;\n\n        //   this.props.loginRequest();\n        //   this.props.incrementCounter();\n        Object(_initFirebase__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n        var auth = firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.auth();\n        auth.onAuthStateChanged(function (authUser) {\n          console.log(\"hohohoho\");\n          console.log(authUser);\n\n          if (authUser) {\n            _this2.setState({\n              status: \"SIGNED_IN\"\n            });\n          } else {\n            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(\"/\");\n          }\n        });\n      }\n    }, {\n      key: \"renderContent\",\n      value: function renderContent() {\n        var status = this.state.status;\n\n        if (status == \"LOADING\") {\n          return __jsx(\"h1\", {\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 16\n            }\n          }, \"Loading ......\");\n        } else if (status == \"SIGNED_IN\") {\n          return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, this.props, {\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 16\n            }\n          }));\n        }\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 14\n          }\n        }, this.renderContent()); //   return <React.Fragment>{this.renderContent()}</React.Fragment>;\n      }\n    }]);\n\n    return _class;\n  }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n}; // export default withAuth;\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    counter: state.counter.value\n  };\n};\n\nvar mapDispatchToProps = {\n  loginRequest: _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_13__[\"loginRequest\"],\n  loginSuccess: _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_13__[\"loginSuccess\"],\n  loginFailure: _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_13__[\"loginFailure\"],\n  incrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_14__[\"incrementCounter\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, mapDispatchToProps)(withAuth)); // export default connect()(withAuth);\n// export default compose(connect(mapStateToProps, mapDispatchToProps))(withAuth);\n// export default withAuth;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoL3dpdGhBdXRoLmpzP2I2NDMiXSwibmFtZXMiOlsid2l0aEF1dGgiLCJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwic3RhdHVzIiwiaW5pdEZpcmViYXNlIiwiYXV0aCIsImZpcmViYXNlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJwdXNoIiwicmVuZGVyQ29udGVudCIsIlJlYWN0IiwibWFwU3RhdGVUb1Byb3BzIiwiY291bnRlciIsInZhbHVlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibG9naW5SZXF1ZXN0IiwibG9naW5TdWNjZXNzIiwibG9naW5GYWlsdXJlIiwiaW5jcmVtZW50Q291bnRlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxTQUFELEVBQWU7QUFDOUI7QUFBQTs7QUFBQTs7QUFDRSxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixnQ0FBTUEsS0FBTjtBQUNBLFlBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFNLEVBQUU7QUFERyxPQUFiO0FBRmlCO0FBS2xCOztBQU5IO0FBQUE7QUFBQSwwQ0FPd0I7QUFBQTs7QUFDbEI7QUFDQTtBQUNBQyxzRUFBWTtBQUVaLFlBQU1DLElBQUksR0FBR0Msb0RBQVEsQ0FBQ0QsSUFBVCxFQUFiO0FBRUFBLFlBQUksQ0FBQ0Usa0JBQUwsQ0FBd0IsVUFBQ0MsUUFBRCxFQUFjO0FBQzVCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUVWRCxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7O0FBQ0EsY0FBSUEsUUFBSixFQUFjO0FBQ1osa0JBQUksQ0FBQ0csUUFBTCxDQUFjO0FBQ1pSLG9CQUFNLEVBQUU7QUFESSxhQUFkO0FBR0QsV0FKRCxNQUlPO0FBQ0xTLDhEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixTQVhDO0FBWUg7QUExQkg7QUFBQTtBQUFBLHNDQTJCa0I7QUFBQSxZQUNOVixNQURNLEdBQ0ssS0FBS0QsS0FEVixDQUNOQyxNQURNOztBQUVkLFlBQUlBLE1BQU0sSUFBSSxTQUFkLEVBQXlCO0FBQ3ZCLGlCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQVA7QUFDRCxTQUZELE1BRU8sSUFBSUEsTUFBTSxJQUFJLFdBQWQsRUFBMkI7QUFDaEMsaUJBQU8sTUFBQyxTQUFELHlGQUFlLEtBQUtGLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEO0FBQ0Y7QUFsQ0g7QUFBQTtBQUFBLCtCQW1DVztBQUNQLGVBQU8sTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFpQixLQUFLYSxhQUFMLEVBQWpCLENBQVAsQ0FETyxDQUVUO0FBQ0M7QUF0Q0g7O0FBQUE7QUFBQSxJQUFxQkMsNENBQUssQ0FBQ2YsU0FBM0I7QUF3Q0QsQ0F6Q0QsQyxDQTBDQTs7O0FBRUEsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ2QsS0FBRDtBQUFBLFNBQVk7QUFDbENlLFdBQU8sRUFBRWYsS0FBSyxDQUFDZSxPQUFOLENBQWNDO0FBRFcsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1DLGtCQUFrQixHQUFHO0FBQ3pCQyxjQUFZLEVBQUVBLHdFQURXO0FBRXpCQyxjQUFZLEVBQUVBLHdFQUZXO0FBR3pCQyxjQUFZLEVBQUVBLHdFQUhXO0FBSXpCQyxrQkFBZ0IsRUFBRUEsK0VBQWdCQTtBQUpULENBQTNCO0FBTWVDLDBIQUFPLENBQUNSLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDcEIsUUFBN0MsQ0FBZixFLENBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vdXRpbHMvYXV0aC93aXRoQXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcblxuLy8gaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJmaXJlYmFzZVwiO1xuXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IGluaXRGaXJlYmFzZSBmcm9tIFwiLi9pbml0RmlyZWJhc2VcIjtcbmltcG9ydCB7IGxvZ2luUmVxdWVzdCwgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWx1cmUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xuaW1wb3J0IHsgaW5jcmVtZW50Q291bnRlciB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XG5cblxuY29uc3Qgd2l0aEF1dGggPSAoQ29tcG9uZW50KSA9PiB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHN0YXR1czogXCJMT0FESU5HXCIsXG4gICAgICB9O1xuICAgIH1cbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyAgIHRoaXMucHJvcHMubG9naW5SZXF1ZXN0KCk7XG4gICAgICAgIC8vICAgdGhpcy5wcm9wcy5pbmNyZW1lbnRDb3VudGVyKCk7XG4gICAgICAgIGluaXRGaXJlYmFzZSgpO1xuXG4gICAgICAgIGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG5cbiAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKGF1dGhVc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhvaG9ob2hvXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGF1dGhVc2VyKTtcbiAgICAgICAgaWYgKGF1dGhVc2VyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGF0dXM6IFwiU0lHTkVEX0lOXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgaWYgKHN0YXR1cyA9PSBcIkxPQURJTkdcIikge1xuICAgICAgICByZXR1cm4gPGgxPkxvYWRpbmcgLi4uLi4uPC9oMT47XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSBcIlNJR05FRF9JTlwiKSB7XG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57dGhpcy5yZW5kZXJDb250ZW50KCl9PC9SZWFjdC5GcmFnbWVudD47XG4gICAgLy8gICByZXR1cm4gPFJlYWN0LkZyYWdtZW50Pnt0aGlzLnJlbmRlckNvbnRlbnQoKX08L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG4gIH07XG59O1xuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgY291bnRlcjogc3RhdGUuY291bnRlci52YWx1ZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvZ2luUmVxdWVzdDogbG9naW5SZXF1ZXN0LFxuICBsb2dpblN1Y2Nlc3M6IGxvZ2luU3VjY2VzcyxcbiAgbG9naW5GYWlsdXJlOiBsb2dpbkZhaWx1cmUsXG4gIGluY3JlbWVudENvdW50ZXI6IGluY3JlbWVudENvdW50ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoQXV0aCk7XG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KCkod2l0aEF1dGgpO1xuLy8gZXhwb3J0IGRlZmF1bHQgY29tcG9zZShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSkod2l0aEF1dGgpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoQXV0aDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth/withAuth.js\n");

/***/ })

})