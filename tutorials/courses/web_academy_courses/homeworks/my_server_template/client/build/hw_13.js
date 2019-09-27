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
/******/ 	return __webpack_require__(__webpack_require__.s = 351);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lamp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(354);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TARGET_CLASS_NAME = 'lamp';
var COLOR_CLASS_NAME = TARGET_CLASS_NAME + '__color';
var CONTROL_CLASS_NAME = TARGET_CLASS_NAME + '__control';
var LAMP_ACTIVE_CLASS_NAME = 'lamp__active';

var colors = ['red', 'yellow', 'green', 'blue', 'orange'];

var randomColor = Math.floor(Math.random() * colors.length);

var Lamp = exports.Lamp = function () {
  function Lamp(targetEl, optionsList) {
    _classCallCheck(this, Lamp);

    this.targetEl = targetEl;
    this.isExpand = false;
    this.colorEl = null;
    this.controlEl = null;
    this.render();
  }

  _createClass(Lamp, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.renderColor();
      this.renderControl();
      this.targetEl.classList.add(TARGET_CLASS_NAME);
      this.targetEl.addEventListener('click', function () {
        if (_this.isExpand) {
          _this.disable();
        } else {
          _this.enable();
        }
      });
    }
  }, {
    key: 'renderColor',
    value: function renderColor() {
      this.colorEl = document.createElement('div');
      this.colorEl.classList.add(COLOR_CLASS_NAME);
      this.targetEl.appendChild(this.colorEl);
    }
  }, {
    key: 'renderControl',
    value: function renderControl() {
      this.controlEl = document.createElement('div');
      this.controlEl.classList.add(CONTROL_CLASS_NAME);
      this.controlEl.textContent = 'ON / OFF';
      this.targetEl.appendChild(this.controlEl);
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.targetEl.classList.add(LAMP_ACTIVE_CLASS_NAME);
      this.colorEl.style.backgroundColor = colors[randomColor];
      this.controlEl.style.backgroundColor = "green";
      this.isExpand = true;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.targetEl.classList.remove(LAMP_ACTIVE_CLASS_NAME);
      this.colorEl.removeAttribute('style');
      this.controlEl.removeAttribute('style');
      this.isExpand = false;
    }
  }]);

  return Lamp;
}();

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(353);

var _lamp = __webpack_require__(125);

var _lampsManager = __webpack_require__(355);

var manager = new _lampsManager.LampsManager(document.querySelector('.lamps-wrapper'));

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LampsManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lamp = __webpack_require__(125);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LAMP_ACTIVE_CLASS_NAME = 'lamp__active';

var LampsManager = exports.LampsManager = function () {
  function LampsManager(targetEl) {
    _classCallCheck(this, LampsManager);

    this.targetEl = targetEl;
    this.lamps = [];
    this.isDisabled = this.targetEl.classList.contains(LAMP_ACTIVE_CLASS_NAME);
    this.render();
  }

  _createClass(LampsManager, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.addBtn = document.createElement('button');
      this.toggleAllBtn = document.createElement('button');

      this.addBtn.textContent = 'ADD LAMP';
      this.toggleAllBtn.textContent = 'TOGGLE ALL';

      this.addBtn.addEventListener('click', function () {
        return _this.addLamp();
      });
      this.toggleAllBtn.addEventListener('click', function () {
        return _this.toggleAll();
      });

      this.targetEl.appendChild(this.addBtn);
      this.targetEl.appendChild(this.toggleAllBtn);
    }
  }, {
    key: 'addLamp',
    value: function addLamp() {
      var lampWrapper = document.createElement('div');
      var lamp = new _lamp.Lamp(lampWrapper);
      this.lamps.push(lamp);
      this.targetEl.appendChild(lampWrapper);
    }
  }, {
    key: 'toggleAll',
    value: function toggleAll() {
      if (this.isDisabled) {
        this.disableAll();
      } else {
        this.enableAll();
      }
    }
  }, {
    key: 'enableAll',
    value: function enableAll() {
      this.lamps.forEach(function (lamp) {
        return lamp.enable();
      });
    }
  }, {
    key: 'disableAll',
    value: function disableAll() {
      this.lamps.forEach(function (lamp) {
        return lamp.disable();
      });
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.targetEl.classList.add(LAMP_ACTIVE_CLASS_NAME);
      this.colorEl.style.backgroundColor = colors[randomColor];
      this.controlEl.style.backgroundColor = "green";
      this.isDisabled = true;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.targetEl.classList.remove(LAMP_ACTIVE_CLASS_NAME);
      this.colorEl.removeAttribute('style');
      this.controlEl.removeAttribute('style');
      this.isDisabled = false;
    }
  }]);

  return LampsManager;
}();

/***/ })

/******/ });