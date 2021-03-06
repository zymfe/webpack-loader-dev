/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./loader-order-normal.jpg":
/*!*********************************!*\
  !*** ./loader-order-normal.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "7b22c4b74e2fb78f5367f06bc9d20fc7.jpg"

/***/ }),

/***/ "./loaders/css-loader.js!./loaders/less-loader.js!./src/main.less":
/*!************************************************************************!*\
  !*** ./loaders/css-loader.js!./loaders/less-loader.js!./src/main.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const list = []
list.push("body {\n  background-color: #f00;\n}\nbody .logo {\n  margin-bottom: 20px;\n  width: 260px;\n  height: 260px;\n  background-image: ")
list.push('url('+"https://avatars3.githubusercontent.com/u/25874685?s=460&v=4"+')')
list.push(";\n}\nbody .container {\n  margin-bottom: 20px;\n  width: 200px;\n  height: 100px;\n  line-height: 100px;\n  text-align: center;\n  background-image: ")
list.push('url('+__webpack_require__(/*! ../loader-order-normal.jpg */ "./loader-order-normal.jpg")+')')
list.push(";\n}\ndiv {\n  font-size: 20px;\n  font-weight: 600;\n  color: blue;\n}\n")
module.exports = list.join('')

/***/ }),

/***/ "./src/async.png":
/*!***********************!*\
  !*** ./src/async.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "7ac3307b6b1efa60884062a3e5b43a36.png"

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _async = _interopRequireDefault(__webpack_require__(/*! ./async.png */ "./src/async.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* created by zhaoyiming on 2020/7/9 */
var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "showName",
    value: function showName() {
      return this.name;
    }
  }]);

  return Person;
}();

var p = new Person('zhaoyiming');
var imgEle = document.createElement('img');
imgEle.src = _async["default"];
document.body.appendChild(imgEle);

__webpack_require__(/*! ./main.less */ "./src/main.less");

/***/ }),

/***/ "./src/main.less":
/*!***********************!*\
  !*** ./src/main.less ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    const styleEle = document.createElement('style');
    styleEle.innerHTML = __webpack_require__(/*! !../loaders/css-loader.js!../loaders/less-loader.js!./main.less */ "./loaders/css-loader.js!./loaders/less-loader.js!./src/main.less");
    document.head.appendChild(styleEle);
  

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map