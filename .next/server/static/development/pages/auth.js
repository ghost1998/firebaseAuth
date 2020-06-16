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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FirebaseAuth.js":
/*!************************************!*\
  !*** ./components/FirebaseAuth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"react-firebaseui/StyledFirebaseAuth\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_auth_initFirebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/auth/initFirebase */ \"./utils/auth/initFirebase.js\");\nvar _jsxFileName = \"/Users/anjan/workspace/firebaseAuth/components/FirebaseAuth.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* globals window */\n\n\n\n\n\n // Init the Firebase app.\n\nObject(_utils_auth_initFirebase__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nconst firebaseAuthConfig = {\n  signInFlow: 'popup',\n  // Auth providers\n  // https://github.com/firebase/firebaseui-web#configure-oauth-providers\n  signInOptions: [{\n    provider: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.auth.EmailAuthProvider.PROVIDER_ID,\n    requireDisplayName: false\n  }],\n  signInSuccessUrl: '/',\n  credentialHelper: 'none',\n  callbacks: {\n    signInSuccessWithAuthResult: async ({\n      user\n    }, redirectUrl) => {\n      // xa is the access token, which can be retrieved through\n      // firebase.auth().currentUser.getIdToken()\n      const {\n        uid,\n        email,\n        xa\n      } = user;\n      const userData = {\n        id: uid,\n        email,\n        token: xa\n      };\n      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('auth', userData, {\n        expires: 1\n      });\n    }\n  }\n};\n\nconst FirebaseAuth = () => {\n  // Do not SSR FirebaseUI, because it is not supported.\n  // https://github.com/firebase/firebaseui-web/issues/213\n  const {\n    0: renderAuth,\n    1: setRenderAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (false) {}\n  }, []);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, renderAuth ? __jsx(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    uiConfig: firebaseAuthConfig,\n    firebaseAuth: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.auth(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }) : null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirebaseAuth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmViYXNlQXV0aC5qcz8wNjYwIl0sIm5hbWVzIjpbImluaXRGaXJlYmFzZSIsImZpcmViYXNlQXV0aENvbmZpZyIsInNpZ25JbkZsb3ciLCJzaWduSW5PcHRpb25zIiwicHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJFbWFpbEF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwicmVxdWlyZURpc3BsYXlOYW1lIiwic2lnbkluU3VjY2Vzc1VybCIsImNyZWRlbnRpYWxIZWxwZXIiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQiLCJ1c2VyIiwicmVkaXJlY3RVcmwiLCJ1aWQiLCJlbWFpbCIsInhhIiwidXNlckRhdGEiLCJpZCIsInRva2VuIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsIkZpcmViYXNlQXV0aCIsInJlbmRlckF1dGgiLCJzZXRSZW5kZXJBdXRoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQUEsd0VBQVk7QUFFWixNQUFNQyxrQkFBa0IsR0FBRztBQUN6QkMsWUFBVSxFQUFFLE9BRGE7QUFFekI7QUFDQTtBQUNBQyxlQUFhLEVBQUUsQ0FDYjtBQUNFQyxZQUFRLEVBQUVDLG1EQUFRLENBQUNDLElBQVQsQ0FBY0MsaUJBQWQsQ0FBZ0NDLFdBRDVDO0FBRUVDLHNCQUFrQixFQUFFO0FBRnRCLEdBRGEsQ0FKVTtBQVV6QkMsa0JBQWdCLEVBQUUsR0FWTztBQVd6QkMsa0JBQWdCLEVBQUUsTUFYTztBQVl6QkMsV0FBUyxFQUFFO0FBQ1RDLCtCQUEyQixFQUFFLE9BQU87QUFBRUM7QUFBRixLQUFQLEVBQWlCQyxXQUFqQixLQUFpQztBQUM1RDtBQUNBO0FBQ0EsWUFBTTtBQUFFQyxXQUFGO0FBQU9DLGFBQVA7QUFBY0M7QUFBZCxVQUFxQkosSUFBM0I7QUFDQSxZQUFNSyxRQUFRLEdBQUc7QUFDZkMsVUFBRSxFQUFFSixHQURXO0FBRWZDLGFBRmU7QUFHZkksYUFBSyxFQUFFSDtBQUhRLE9BQWpCO0FBS0FJLHNEQUFNLENBQUNDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CSixRQUFuQixFQUE2QjtBQUMzQkssZUFBTyxFQUFFO0FBRGtCLE9BQTdCO0FBR0Q7QUFiUTtBQVpjLENBQTNCOztBQTZCQSxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QjtBQUNBO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQyxzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsZUFBbUMsRUFFbEM7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFVBQVUsR0FDVCxNQUFDLDBFQUFEO0FBQ0UsWUFBUSxFQUFFekIsa0JBRFo7QUFFRSxnQkFBWSxFQUFFSSxtREFBUSxDQUFDQyxJQUFULEVBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUyxHQUtQLElBTk4sQ0FERjtBQVVELENBbkJEOztBQXFCZW1CLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaXJlYmFzZUF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHdpbmRvdyAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlZEZpcmViYXNlQXV0aCBmcm9tICdyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aCdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBpbml0RmlyZWJhc2UgZnJvbSAnLi4vdXRpbHMvYXV0aC9pbml0RmlyZWJhc2UnXG5cbi8vIEluaXQgdGhlIEZpcmViYXNlIGFwcC5cbmluaXRGaXJlYmFzZSgpXG5cbmNvbnN0IGZpcmViYXNlQXV0aENvbmZpZyA9IHtcbiAgc2lnbkluRmxvdzogJ3BvcHVwJyxcbiAgLy8gQXV0aCBwcm92aWRlcnNcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZpcmViYXNlL2ZpcmViYXNldWktd2ViI2NvbmZpZ3VyZS1vYXV0aC1wcm92aWRlcnNcbiAgc2lnbkluT3B0aW9uczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGVyOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgcmVxdWlyZURpc3BsYXlOYW1lOiBmYWxzZSxcbiAgICB9LFxuICBdLFxuICBzaWduSW5TdWNjZXNzVXJsOiAnLycsXG4gIGNyZWRlbnRpYWxIZWxwZXI6ICdub25lJyxcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0OiBhc3luYyAoeyB1c2VyIH0sIHJlZGlyZWN0VXJsKSA9PiB7XG4gICAgICAvLyB4YSBpcyB0aGUgYWNjZXNzIHRva2VuLCB3aGljaCBjYW4gYmUgcmV0cmlldmVkIHRocm91Z2hcbiAgICAgIC8vIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKClcbiAgICAgIGNvbnN0IHsgdWlkLCBlbWFpbCwgeGEgfSA9IHVzZXJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgICBpZDogdWlkLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgdG9rZW46IHhhLFxuICAgICAgfVxuICAgICAgY29va2llLnNldCgnYXV0aCcsIHVzZXJEYXRhLCB7XG4gICAgICAgIGV4cGlyZXM6IDEsXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59XG5cbmNvbnN0IEZpcmViYXNlQXV0aCA9ICgpID0+IHtcbiAgLy8gRG8gbm90IFNTUiBGaXJlYmFzZVVJLCBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maXJlYmFzZS9maXJlYmFzZXVpLXdlYi9pc3N1ZXMvMjEzXG4gIGNvbnN0IFtyZW5kZXJBdXRoLCBzZXRSZW5kZXJBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0UmVuZGVyQXV0aCh0cnVlKVxuICAgIH1cbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJBdXRoID8gKFxuICAgICAgICA8U3R5bGVkRmlyZWJhc2VBdXRoXG4gICAgICAgICAgdWlDb25maWc9e2ZpcmViYXNlQXV0aENvbmZpZ31cbiAgICAgICAgICBmaXJlYmFzZUF1dGg9e2ZpcmViYXNlLmF1dGgoKX1cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpcmViYXNlQXV0aFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FirebaseAuth.js\n");

/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FirebaseAuth */ \"./components/FirebaseAuth.js\");\nvar _jsxFileName = \"/Users/anjan/workspace/firebaseAuth/pages/auth.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Auth = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, \"Sign in\"), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(_components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLmpzP2NhNGUiXSwibmFtZXMiOlsiQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBREY7QUFRRCxDQVREOztBQVdlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlyZWJhc2VBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWJhc2VBdXRoJ1xuXG5jb25zdCBBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5TaWduIGluPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEZpcmViYXNlQXV0aCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ }),

/***/ "./utils/auth/initFirebase.js":
/*!************************************!*\
  !*** ./utils/auth/initFirebase.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFirebase; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n  apiKey: \"AIzaSyBzJT-KIndoBuef18RDnOlSi29JoKJHbWs\",\n  authDomain: \"rain-5a450.firebaseapp.com\",\n  databaseURL: \"https://rain-5a450.firebaseio.com\",\n  projectId: \"rain-5a450\"\n};\nfunction initFirebase() {\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n    // console.log(\"hello\");\n    // console.log(config);\n    // console.log(process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY);\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoL2luaXRGaXJlYmFzZS5qcz83NWM4Il0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwiaW5pdEZpcmViYXNlIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUVDLHlDQURLO0FBRWJDLFlBQVUsRUFBRUQsNEJBRkM7QUFHYkUsYUFBVyxFQUFFRixtQ0FIQTtBQUliRyxXQUFTLEVBQUVILFlBQTJDSTtBQUp6QyxDQUFmO0FBT2UsU0FBU0MsWUFBVCxHQUF3QjtBQUNyQyxNQUFJLENBQUNDLG1EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekI7QUFDQTtBQUNBO0FBQ0FGLHVEQUFRLENBQUNHLGFBQVQsQ0FBdUJYLE1BQXZCO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3V0aWxzL2F1dGgvaW5pdEZpcmViYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcblxuY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BVQkxJQ19BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0RmlyZWJhc2UoKSB7XG4gIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFVCTElDX0FQSV9LRVkpO1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/auth/initFirebase.js\n");

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/auth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anjan/workspace/firebaseAuth/pages/auth.js */"./pages/auth.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-firebaseui/StyledFirebaseAuth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiPzcyOTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZmlyZWJhc2V1aS9TdHlsZWRGaXJlYmFzZUF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-firebaseui/StyledFirebaseAuth\n");

/***/ })

/******/ });