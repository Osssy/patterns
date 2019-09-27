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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 336);
/******/ })
/************************************************************************/
/******/ ({

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(338);

var listElem = document.querySelector(".accordion__list");
var textClosed = document.querySelector(".text__closed");
var textOpened = document.querySelector(".text__opened");
var accordion = document.querySelector(".accordion");

var isDisabled = accordion.classList.contains(textClosed);

function open() {
  isDisabled = false;
  lighter.classList.remove(textClosed);
}

function close() {
  isDisabled = true;
  lighter.classList.add(textClosed);
}

listElem.onclick = function open() {
  textClosed.classList.remove("text__closed");
  textOpened.classList.add("text__opened");
};

function toggleOpened() {
  if (isDisabled === true) {
    open();
  } else {
    close();
  }
}

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });