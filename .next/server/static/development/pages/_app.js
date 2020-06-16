module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\nvar _jsxFileName = \"/Users/anjan/workspace/firebaseAuth/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n // import { createMuiTheme } from \"@material-ui/core/styles\";\n// import { ThemeProvider } from \"styled-components\";\n// const theme = createMuiTheme({\n//   palette: {\n//     primary: {\n//       main: \"#ffffff\",\n//     },\n//     // secondary: '#ff3d00',\n//   },\n// });\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector(\"#jss-server-side\");\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  const store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(pageProps.initialReduxState);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwREMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixNQUFNO0FBQ3BCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEO0FBQ0YsR0FORCxFQU1HLEVBTkg7QUFRQSxRQUFNSyxLQUFLLEdBQUdDLDZEQUFRLENBQUNULFNBQVMsQ0FBQ1UsaUJBQVgsQ0FBdEI7QUFFQSxTQUNFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVGLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLFNBQUQsZUFBZVIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkosQ0FERjtBQU9EIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuXG4vLyBpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbi8vIGltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4vLyAgIHBhbGV0dGU6IHtcbi8vICAgICBwcmltYXJ5OiB7XG4vLyAgICAgICBtYWluOiBcIiNmZmZmZmZcIixcbi8vICAgICB9LFxuLy8gICAgIC8vIHNlY29uZGFyeTogJyNmZjNkMDAnLFxuLy8gICB9LFxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzcy1zZXJ2ZXItc2lkZVwiKTtcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgey8qIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+ICovfVxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICB7LyogPC9UaGVtZVByb3ZpZGVyPiAqL31cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, loginRequest, loginSuccess, loginFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_REQUEST\", function() { return LOGIN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_SUCCESS\", function() { return LOGIN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_FAILURE\", function() { return LOGIN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT_REQUEST\", function() { return LOGOUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT_SUCCESS\", function() { return LOGOUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT_FAILURE\", function() { return LOGOUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequest\", function() { return loginRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginSuccess\", function() { return loginSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginFailure\", function() { return loginFailure; });\n// export const REGISTER_REQUEST = \"REGISTER_REQUEST\";\n// export const REGISTER_SUCCESS = \"REGISTER_SUCCESS\";\n// export const REGISTER_FAILURE = \"REGISTER_FAILURE\";\nconst LOGIN_REQUEST = \"LOGIN_REQUEST\";\nconst LOGIN_SUCCESS = \"LOGIN_SUCCESS\";\nconst LOGIN_FAILURE = \"LOGIN_FAILURE\";\nconst LOGOUT_REQUEST = \"LOGOUT_REQUEST\";\nconst LOGOUT_SUCCESS = \"LOGOUT_SUCCESS\";\nconst LOGOUT_FAILURE = \"LOGOUT_FAILURE\"; //Action Creator\n\nconst loginRequest = payload => ({\n  type: LOGIN_REQUEST,\n  payload\n});\nconst loginSuccess = payload => ({\n  type: LOGIN_SUCCESS,\n  payload\n});\nconst loginFailure = payload => ({\n  type: LOGIN_FAILURE,\n  payload\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzP2QxOTEiXSwibmFtZXMiOlsiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIiwiTE9HT1VUX1JFUVVFU1QiLCJMT0dPVVRfU1VDQ0VTUyIsIkxPR09VVF9GQUlMVVJFIiwibG9naW5SZXF1ZXN0IiwicGF5bG9hZCIsInR5cGUiLCJsb2dpblN1Y2Nlc3MiLCJsb2dpbkZhaWx1cmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCLEMsQ0FFUDs7QUFDTyxNQUFNQyxZQUFZLEdBQUlDLE9BQUQsS0FBYztBQUN4Q0MsTUFBSSxFQUFFUixhQURrQztBQUV4Q087QUFGd0MsQ0FBZCxDQUFyQjtBQUtBLE1BQU1FLFlBQVksR0FBSUYsT0FBRCxLQUFjO0FBQ3hDQyxNQUFJLEVBQUVQLGFBRGtDO0FBRXhDTTtBQUZ3QyxDQUFkLENBQXJCO0FBTUEsTUFBTUcsWUFBWSxHQUFJSCxPQUFELEtBQWM7QUFDeENDLE1BQUksRUFBRU4sYUFEa0M7QUFFeENLO0FBRndDLENBQWQsQ0FBckIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1JFUVVFU1QgPSBcIlJFR0lTVEVSX1JFUVVFU1RcIjtcbi8vIGV4cG9ydCBjb25zdCBSRUdJU1RFUl9TVUNDRVNTID0gXCJSRUdJU1RFUl9TVUNDRVNTXCI7XG4vLyBleHBvcnQgY29uc3QgUkVHSVNURVJfRkFJTFVSRSA9IFwiUkVHSVNURVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9IFwiTE9HSU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSBcIkxPR0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMVVJFID0gXCJMT0dJTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dPVVRfUkVRVUVTVCA9IFwiTE9HT1VUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dPVVRfU1VDQ0VTUyA9IFwiTE9HT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dPVVRfRkFJTFVSRSA9IFwiTE9HT1VUX0ZBSUxVUkVcIjtcblxuLy9BY3Rpb24gQ3JlYXRvclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdCA9IChwYXlsb2FkKSA9PiAoe1xuICB0eXBlOiBMT0dJTl9SRVFVRVNULFxuICBwYXlsb2FkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3MgPSAocGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcbiAgcGF5bG9hZCxcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmUgPSAocGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogTE9HSU5fRkFJTFVSRSxcbiAgcGF5bG9hZCxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions/authActions.js\n");

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, incrementCounter, decrementCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCREMENT_COUNTER\", function() { return INCREMENT_COUNTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DECREMENT_COUNTER\", function() { return DECREMENT_COUNTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementCounter\", function() { return incrementCounter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decrementCounter\", function() { return decrementCounter; });\n//Action Types\nconst INCREMENT_COUNTER = \"INCREMENT_COUNTER\";\nconst DECREMENT_COUNTER = \"DECREMENT_COUNTER\"; //Action Creator\n\nconst incrementCounter = () => ({\n  type: INCREMENT_COUNTER\n});\nconst decrementCounter = () => ({\n  type: DECREMENT_COUNTER\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zLmpzPzkzMmMiXSwibmFtZXMiOlsiSU5DUkVNRU5UX0NPVU5URVIiLCJERUNSRU1FTlRfQ09VTlRFUiIsImluY3JlbWVudENvdW50ZXIiLCJ0eXBlIiwiZGVjcmVtZW50Q291bnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUEsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCLEMsQ0FFUDs7QUFDTyxNQUFNQyxnQkFBZ0IsR0FBRyxPQUFPO0FBQ3JDQyxNQUFJLEVBQUVIO0FBRCtCLENBQVAsQ0FBekI7QUFJQSxNQUFNSSxnQkFBZ0IsR0FBRyxPQUFPO0FBQ3JDRCxNQUFJLEVBQUVGO0FBRCtCLENBQVAsQ0FBekIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9BY3Rpb24gVHlwZXNcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfQ09VTlRFUiA9IFwiSU5DUkVNRU5UX0NPVU5URVJcIjtcbmV4cG9ydCBjb25zdCBERUNSRU1FTlRfQ09VTlRFUiA9IFwiREVDUkVNRU5UX0NPVU5URVJcIjtcblxuLy9BY3Rpb24gQ3JlYXRvclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudENvdW50ZXIgPSAoKSA9PiAoe1xuICB0eXBlOiBJTkNSRU1FTlRfQ09VTlRFUixcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVjcmVtZW50Q291bnRlciA9ICgpID0+ICh7XG4gIHR5cGU6IERFQ1JFTUVOVF9DT1VOVEVSLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/counterActions.js\n");

/***/ }),

/***/ "./redux/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/authActions */ \"./redux/actions/authActions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import {\n//   DECREMENT_COUNTER,\n//   INCREMENT_COUNTER,\n// } from \"../actions/aut\";\n // let initialState = {};\n\nlet initialState = {\n  isFetching: false,\n  isAuthenticated: false,\n  user: null\n};\n\nconst authReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_authActions__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_REQUEST\"]:\n      console.log(action);\n      return Object.assign({}, state, {\n        isFetching: true,\n        isAuthenticated: false // user: action.creds.email,\n\n      });\n\n    case _actions_authActions__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_SUCCESS\"]:\n      console.log(action);\n      return Object.assign({}, state, {\n        isFetching: false,\n        isAuthenticated: true // user: action.creds.email,\n\n      });\n\n    case _actions_authActions__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_FAILURE\"]:\n      console.log(action);\n      return Object.assign({}, state, {\n        isFetching: false,\n        isAuthenticated: false // user: action.creds.email,\n\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcz80MmJhIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzRmV0Y2hpbmciLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMT0dJTl9SRVFVRVNUIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImFzc2lnbiIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBRUEsSUFBSUEsWUFBWSxHQUFHO0FBQ2pCQyxZQUFVLEVBQUUsS0FESztBQUVqQkMsaUJBQWUsRUFBRSxLQUZBO0FBR2pCQyxNQUFJLEVBQUU7QUFIVyxDQUFuQjs7QUFNQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTCxZQUFULEVBQXVCTSxNQUF2QixLQUFrQztBQUNwRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxrRUFBTDtBQUNFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBLGFBQU9LLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCSixrQkFBVSxFQUFFLElBRGtCO0FBRTlCQyx1QkFBZSxFQUFFLEtBRmEsQ0FHOUI7O0FBSDhCLE9BQXpCLENBQVA7O0FBS0YsU0FBS1csa0VBQUw7QUFDRUosYUFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQSxhQUFPSyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxLQUFsQixFQUF5QjtBQUM5Qkosa0JBQVUsRUFBRSxLQURrQjtBQUU5QkMsdUJBQWUsRUFBRSxJQUZhLENBRzlCOztBQUg4QixPQUF6QixDQUFQOztBQUtGLFNBQUtZLGtFQUFMO0FBQ0VMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0EsYUFBT0ssTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQlAsS0FBbEIsRUFBeUI7QUFDOUJKLGtCQUFVLEVBQUUsS0FEa0I7QUFFOUJDLHVCQUFlLEVBQUUsS0FGYSxDQUc5Qjs7QUFIOEIsT0FBekIsQ0FBUDs7QUFLRjtBQUNFLCtCQUFZRyxLQUFaO0FBdkJKO0FBeUJELENBMUJEOztBQTRCZUQsMEVBQWYiLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7XG4vLyAgIERFQ1JFTUVOVF9DT1VOVEVSLFxuLy8gICBJTkNSRU1FTlRfQ09VTlRFUixcbi8vIH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0XCI7XG5cbmltcG9ydCB7IExPR0lOX1JFUVVFU1QsIExPR0lOX1NVQ0NFU1MsIExPR0lOX0ZBSUxVUkUgfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xuXG4vLyBsZXQgaW5pdGlhbFN0YXRlID0ge307XG5cbmxldCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICB1c2VyOiBudWxsLFxufTtcblxuY29uc3QgYXV0aFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0dJTl9SRVFVRVNUOlxuICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgICAvLyB1c2VyOiBhY3Rpb24uY3JlZHMuZW1haWwsXG4gICAgICB9KTtcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgIC8vIHVzZXI6IGFjdGlvbi5jcmVkcy5lbWFpbCxcbiAgICAgIH0pO1xuICAgIGNhc2UgTE9HSU5fRkFJTFVSRTpcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgIC8vIHVzZXI6IGFjdGlvbi5jcmVkcy5lbWFpbCxcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/authReducer.js\n");

/***/ }),

/***/ "./redux/reducers/counterReducer.js":
/*!******************************************!*\
  !*** ./redux/reducers/counterReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/counterActions */ \"./redux/actions/counterActions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst counterReducer = (state = {\n  value: 0\n}, action) => {\n  switch (action.type) {\n    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__[\"INCREMENT_COUNTER\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        value: state.value + 3\n      });\n\n    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__[\"DECREMENT_COUNTER\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        value: state.value - 1\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (counterReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jb3VudGVyUmVkdWNlci5qcz8xODZjIl0sIm5hbWVzIjpbImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJ2YWx1ZSIsImFjdGlvbiIsInR5cGUiLCJJTkNSRU1FTlRfQ09VTlRFUiIsIkRFQ1JFTUVOVF9DT1VOVEVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUtBLE1BQU1BLGNBQWMsR0FBRyxDQUFDQyxLQUFLLEdBQUc7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBVCxFQUF1QkMsTUFBdkIsS0FBa0M7QUFDdkQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MseUVBQUw7QUFDRSw2Q0FBWUosS0FBWjtBQUFtQkMsYUFBSyxFQUFFRCxLQUFLLENBQUNDLEtBQU4sR0FBYztBQUF4Qzs7QUFDRixTQUFLSSx5RUFBTDtBQUNFLDZDQUFZTCxLQUFaO0FBQW1CQyxhQUFLLEVBQUVELEtBQUssQ0FBQ0MsS0FBTixHQUFjO0FBQXhDOztBQUNGO0FBQ0UsK0JBQVlELEtBQVo7QUFOSjtBQVFELENBVEQ7O0FBV2VELDZFQUFmIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvY291bnRlclJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBERUNSRU1FTlRfQ09VTlRFUixcbiAgSU5DUkVNRU5UX0NPVU5URVIsXG59IGZyb20gXCIuLi9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XG5cbmNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gKHN0YXRlID0geyB2YWx1ZTogMCB9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5DUkVNRU5UX0NPVU5URVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmFsdWU6IHN0YXRlLnZhbHVlICsgMyB9O1xuICAgIGNhc2UgREVDUkVNRU5UX0NPVU5URVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmFsdWU6IHN0YXRlLnZhbHVlIC0gMSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/counterReducer.js\n");

/***/ }),

/***/ "./redux/reducers/rootReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counterReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterReducer */ \"./redux/reducers/counterReducer.js\");\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ \"./redux/reducers/authReducer.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"combineReducers\"])({\n  counter: _counterReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci5qcz8wM2IxIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY291bnRlciIsImNvdW50ZXJSZWR1Y2VyIiwiYXV0aCIsImF1dGhSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxTQUFPLEVBQUVDLHVEQUR5QjtBQUVsQ0MsTUFBSSxFQUFFQyxvREFBV0E7QUFGaUIsQ0FBRCxDQUFuQztBQUtlTCwwRUFBZiIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvdW50ZXJSZWR1Y2VyIGZyb20gXCIuL2NvdW50ZXJSZWR1Y2VyXCI7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vYXV0aFJlZHVjZXJcIjtcblxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY291bnRlcjogY291bnRlclJlZHVjZXIsXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/rootReducer.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/rootReducer */ \"./redux/reducers/rootReducer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nlet store;\nconst initialState = {\n  lastUpdate: 0,\n  light: false,\n  count: 0\n};\n\nfunction initStore(preloadedState = initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])()));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n} // import { createStore, applyMiddleware } from \"redux\";\n// import thunk from \"redux-thunk\";\n// import { composeWithDevTools } from \"redux-devtools-extension\";\n// const store = createStore(\n//     rootReducer,\n//     composeWithDevTools(applyMiddleware(thunk))\n// );\n// export default store;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz82NTI0Il0sIm5hbWVzIjpbInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwibGFzdFVwZGF0ZSIsImxpZ2h0IiwiY291bnQiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFlBQVUsRUFBRSxDQURPO0FBRW5CQyxPQUFLLEVBQUUsS0FGWTtBQUduQkMsT0FBSyxFQUFFO0FBSFksQ0FBckI7O0FBT0EsU0FBU0MsU0FBVCxDQUFtQkMsY0FBYyxHQUFHTCxZQUFwQyxFQUFrRDtBQUNoRCxTQUFPTSx5REFBVyxDQUNoQkMsNkRBRGdCLEVBRWhCRixjQUZnQixFQUdoQkcsb0ZBQW1CLENBQUNDLDZEQUFlLEVBQWhCLENBSEgsQ0FBbEI7QUFLRDs7QUFFTSxNQUFNQyxlQUFlLEdBQUlMLGNBQUQsSUFBb0I7QUFBQTs7QUFDakQsTUFBSU0sTUFBTSxjQUFHWixLQUFILDZDQUFZSyxTQUFTLENBQUNDLGNBQUQsQ0FBL0IsQ0FEaUQsQ0FHakQ7QUFDQTs7O0FBQ0EsTUFBSUEsY0FBYyxJQUFJTixLQUF0QixFQUE2QjtBQUMzQlksVUFBTSxHQUFHUCxTQUFTLGlDQUNiTCxLQUFLLENBQUNhLFFBQU4sRUFEYSxHQUViUCxjQUZhLEVBQWxCLENBRDJCLENBSzNCOztBQUNBTixTQUFLLEdBQUdjLFNBQVI7QUFDRCxHQVpnRCxDQWNqRDs7O0FBQ0EsWUFBbUMsT0FBT0YsTUFBUCxDQWZjLENBZ0JqRDs7QUFDQSxNQUFJLENBQUNaLEtBQUwsRUFBWUEsS0FBSyxHQUFHWSxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0JkLFlBQWxCLEVBQWdDO0FBQ3JDLFFBQU1ELEtBQUssR0FBR2dCLHFEQUFPLENBQUMsTUFBTUwsZUFBZSxDQUFDVixZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPRCxLQUFQO0FBQ0QsQyxDQUdEO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJztcblxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcblxubGV0IHN0b3JlO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxhc3RVcGRhdGU6IDAsXG4gIGxpZ2h0OiBmYWxzZSxcbiAgY291bnQ6IDAsXG59O1xuXG5cbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgcHJlbG9hZGVkU3RhdGUsXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKTtcblxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcbiAgICB9KTtcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxuICAgIHN0b3JlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfc3RvcmU7XG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlO1xuXG4gIHJldHVybiBfc3RvcmU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG5cblxuLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuXG4vLyBpbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbi8vIGltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5cbi8vIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4vLyAgICAgcm9vdFJlZHVjZXIsXG4vLyAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKVxuLy8gKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });