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
/******/ 	return __webpack_require__(__webpack_require__.s = 331);
/******/ })
/************************************************************************/
/******/ ({

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(332);


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(333);

__webpack_require__(334);

__webpack_require__(335);

__webpack_require__(336);

__webpack_require__(337);

__webpack_require__(338);

__webpack_require__(339);

__webpack_require__(340);

__webpack_require__(341);

__webpack_require__(342);

__webpack_require__(343);

__webpack_require__(344);

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \".scripts/date.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//1
function randomInteger(min, max) {
	var randomise = min + Math.random() * (max + 1 - min);
	randomise = Math.floor(randomise);
	return randomise;
};

alert(randomInteger(4, 10));

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: c:/Users/Alex/Desktop/web_academy_courses/my_template/client/src/hw_9/scripts/user.js: Unexpected token, expected ; (2:9)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[90m//2\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 2 | \u001b[39mlet user {}\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 3 | \u001b[39muser\u001b[33m.\u001b[39mname \u001b[33m=\u001b[39m \u001b[32m'Вася'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39muser\u001b[33m.\u001b[39msurname \u001b[33m=\u001b[39m \u001b[32m'Петров'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39muser\u001b[33m.\u001b[39mname \u001b[33m=\u001b[39m \u001b[32m'Сергей'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//3

var obj = {};

function isEmpty(obj) {
	for (var key in obj) {
		return false;
	}
	return true;
}

isEmpty();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//4

function calc(employeeList) {
  var total = 0;

  for (var key in employeeList) {
    var salaryAmount = Number(employeeList[key]);
    if (!isNaN(salaryAmount)) {
      total = total + salaryAmount;
    } else {
      console.warn('Salary amount is NaN', key, employeeList[key]);
    }
  }

  return total;
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//5

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert(maxName || "нет сотрудников");

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//6

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//7

var array = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var randomValue = Math.floor(Math.random() * array.length);

alert(array[randomValue]);

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//8

var numbers = [];

while (true) {
	var value = prompt('введите число', 0);
	if (value === "" || value === null || isNaN(value)) break;{
		numbers.push(+value);
	}
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

alert(sum);

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: c:/Users/Alex/Desktop/web_academy_courses/my_template/client/src/hw_9/scripts/find.js: Unexpected token (6:3)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m\t\u001b[36mfor\u001b[39m (\u001b[36mvar\u001b[39m i \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m i \u001b[33m<\u001b[39m arr\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m i\u001b[33m++\u001b[39m) {\n \u001b[90m 5 | \u001b[39m\t\t\u001b[36mif\u001b[39m (arr[i] \u001b[33m==\u001b[39m value) \u001b[36mreturn\u001b[39m i\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m\t}\t\u001b[36melse\u001b[39m\n \u001b[90m   | \u001b[39m\t \t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 7 | \u001b[39m\t\t\u001b[36mreturn\u001b[39m \u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 8 | \u001b[39m}\u001b[0m\n");

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//10

function filterRange(arr, a, b) {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
			result.push(arr[i]);
		}
	}

	return result;
}

var arr = ['4', '5', '7', '0', '6', '2'];

var filter = filterRange(arr, 2, 6);

alert(filter);

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//11

function pow(x, n) {
	var result = x;

	for (var i = 0; i < n; i++) {
		result *= n;
	}

	return result;
}

if (n <= 1) {
	alert("never give up!");
} else {
	alert(pow(x, n));
}

/***/ })

/******/ });