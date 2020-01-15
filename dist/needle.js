/*!
 * Needle (0.6.0) by Sander Hidding
 * Find your needle in a haystack. Needle is a small and fast query builder for sorting, manipulating and retrieving data.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/needle.git)
 */
var Needle =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/needle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Core.js":
/*!*********************!*\
  !*** ./src/Core.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_setup_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/setup/_extends */ \"./src/setup/_extends.js\");\n/* harmony import */ var _js_methods_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/methods/helpers */ \"./src/methods/helpers.js\");\n/* harmony import */ var _js_methods_trail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/methods/trail */ \"./src/methods/trail.js\");\n/* harmony import */ var _js_methods_retrieve_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/methods/retrieve/base */ \"./src/methods/retrieve/base.js\");\n/* harmony import */ var _js_methods_sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/methods/sorting */ \"./src/methods/sorting.js\");\n/* harmony import */ var _js_methods_debugging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js/methods/debugging */ \"./src/methods/debugging.js\");\n/* harmony import */ var _js_methods_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js/methods/template */ \"./src/methods/template.js\");\n/* harmony import */ var _js_methods_numbers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js/methods/numbers */ \"./src/methods/numbers.js\");\n/* harmony import */ var _js_methods_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @js/methods/dates */ \"./src/methods/dates.js\");\n/* harmony import */ var _js_methods_matches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @js/methods/matches */ \"./src/methods/matches.js\");\n/* harmony import */ var _js_methods_combinations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @js/methods/combinations */ \"./src/methods/combinations.js\");\n/* harmony import */ var _js_methods_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @js/methods/store */ \"./src/methods/store.js\");\n/* harmony import */ var _js_methods_crud__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @js/methods/crud */ \"./src/methods/crud.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** ----------------------------------------\n    Initiate Needle Core\n ---------------------------------------- */\nvar Core = function Core() {\n  _classCallCheck(this, Core);\n};\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n     Helpers\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Needle Helpers\n ---------------------------------------- */\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_trail__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/** ----------------------------------------\n    Methods\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Needle Methods\n ---------------------------------------- */\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_retrieve_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_sorting__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_debugging__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_template__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_numbers__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_dates__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_matches__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_combinations__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n/** ----------------------------------------\n     Handlers\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Needle Handlers\n ---------------------------------------- */\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_store__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _js_methods_crud__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\n\n//# sourceURL=webpack://Needle/./src/Core.js?");

/***/ }),

/***/ "./src/config/default.config.js":
/*!**************************************!*\
  !*** ./src/config/default.config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Create Constructor\n ---------------------------------------- */\nvar setDefaults = function setDefaults(data, trail) {\n  /** ----------------------------------------\n      Configuration\n   ---------------------------------------- */\n  var defaults = [\n  /** ----------------------------------------\n       Amount\n   ---------------------------------------- */\n  {\n    name: 'amount',\n    value: data.length || 0\n  },\n  /** ----------------------------------------\n      Calc\n   ---------------------------------------- */\n  {\n    name: 'calc',\n    value: 0\n  },\n  /** ----------------------------------------\n      Chunks\n   ---------------------------------------- */\n  {\n    name: 'chunks',\n    value: []\n  },\n  /** ----------------------------------------\n       Content\n   ---------------------------------------- */\n  {\n    name: 'content',\n    value: {}\n  },\n  /** ----------------------------------------\n      Data\n   ---------------------------------------- */\n  {\n    name: 'data',\n    value: data\n  },\n  /** ----------------------------------------\n       Info\n   ---------------------------------------- */\n  {\n    name: 'info',\n    value: {\n      length: data.length\n    }\n  },\n  /** ----------------------------------------\n       Trail\n   ---------------------------------------- */\n  {\n    name: 'trail',\n    value: trail || {\n      exe: [],\n      data: [],\n      prev: []\n    }\n  }];\n  return defaults;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDefaults);\n\n//# sourceURL=webpack://Needle/./src/config/default.config.js?");

/***/ }),

/***/ "./src/config/method.config.js":
/*!*************************************!*\
  !*** ./src/config/method.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Configuration\n ---------------------------------------- */\nvar methods = {\n  /** ----------------------------------------\n       Sorting\n   ---------------------------------------- */\n  sort: {\n    sort: true,\n    sortDate: true\n  },\n\n  /** ----------------------------------------\n       Debugging\n   ---------------------------------------- */\n  debugging: {\n    log: true,\n    print: true,\n    random: true\n  },\n\n  /** ----------------------------------------\n       Template\n   ---------------------------------------- */\n  template: {\n    template: true\n  },\n\n  /** ----------------------------------------\n      Numbers\n   ---------------------------------------- */\n  numbers: {\n    bigger: true,\n    smaller: true,\n    between: true,\n    equal: true,\n    min: true,\n    max: true,\n    positive: true,\n    negative: true,\n    sum: true\n  },\n\n  /** ----------------------------------------\n       Dates\n   ---------------------------------------- */\n  dates: {\n    before: true,\n    after: true,\n    period: true,\n    month: true,\n    year: true,\n    previous: true,\n    upcoming: true\n  },\n\n  /** ----------------------------------------\n      Matches\n   ---------------------------------------- */\n  matches: {\n    is: true,\n    has: true,\n    hasDeep: true,\n    find: true,\n    findDeep: true\n  },\n\n  /** ----------------------------------------\n      Combinations\n   ---------------------------------------- */\n  combinations: {\n    where: true,\n    orWhere: true,\n    _orWhere: true,\n    andWhere: true,\n    _andWhere: true\n  },\n\n  /** ----------------------------------------\n       Store\n   ---------------------------------------- */\n  store: {\n    save: false,\n    retrieve: false\n  },\n\n  /** ----------------------------------------\n       CRUD\n   ---------------------------------------- */\n  crud: {\n    create: true,\n    read: true,\n    update: true,\n    updateValue: true,\n    updateAll: true,\n    remove: true,\n    removeValue: true,\n    removeAll: true\n  }\n};\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (methods);\n\n//# sourceURL=webpack://Needle/./src/config/method.config.js?");

/***/ }),

/***/ "./src/config/months.config.js":
/*!*************************************!*\
  !*** ./src/config/months.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_leapYear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_leapYear */ \"./src/util/_leapYear.js\");\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Configuration\n ---------------------------------------- */\n\nvar months = [{\n  index: 0,\n  month: 'jan',\n  days: 31\n}, {\n  index: 1,\n  month: 'feb',\n  days: _util_leapYear__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? 28 : 29\n}, {\n  index: 2,\n  month: 'mar',\n  days: 31\n}, {\n  index: 3,\n  month: 'apr',\n  days: 30\n}, {\n  index: 4,\n  month: 'may',\n  days: 31\n}, {\n  index: 5,\n  month: 'jun',\n  days: 30\n}, {\n  index: 6,\n  month: 'jul',\n  days: 31\n}, {\n  index: 7,\n  month: 'aug',\n  days: 31\n}, {\n  index: 8,\n  month: 'sep',\n  days: 30\n}, {\n  index: 9,\n  month: 'oct',\n  days: 31\n}, {\n  index: 10,\n  month: 'nov',\n  days: 30\n}, {\n  index: 11,\n  month: 'dec',\n  days: 31\n}];\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (months);\n\n//# sourceURL=webpack://Needle/./src/config/months.config.js?");

/***/ }),

/***/ "./src/config/period.config.js":
/*!*************************************!*\
  !*** ./src/config/period.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_leapYear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_leapYear */ \"./src/util/_leapYear.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Configuration\n ---------------------------------------- */\n\nvar period = function period() {\n  var date = new Date();\n  var month = date.getMonth();\n  var year = date.getFullYear();\n  return [{\n    name: 'days',\n    amount: 1\n  }, {\n    name: 'weeks',\n    amount: 7\n  }, {\n    name: 'months',\n    year: year,\n    month: month,\n    amount: 30\n  }, {\n    name: 'quarters',\n    year: year,\n    amount: Math.round((_util_leapYear__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? 366 : 365) / 4)\n  }, {\n    name: 'years',\n    year: year,\n    amount: _util_leapYear__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? 366 : 365\n  }];\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (period);\n\n//# sourceURL=webpack://Needle/./src/config/period.config.js?");

/***/ }),

/***/ "./src/methods/combinations.js":
/*!*************************************!*\
  !*** ./src/methods/combinations.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Where\n ---------------------------------------- */\n\n/**\n * The where operator can execute a series\n * of commands, combining multiple criteria\n * that need to be matched.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { Needle } object - new instance\n */\nfunction where(key, type, value) {\n  this._hasTrail();\n\n  this._trail['data'] = this._data;\n\n  var filter = this._operator(key, type, value);\n\n  this._trail['prev'] = filter;\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Or Where\n ---------------------------------------- */\n\n/**\n * The orWhere will create a new trail function\n * that will be executed once the trail comes\n * to an end.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { Needle } object - new instance\n */\n\n\nfunction orWhere(key, type, value) {\n  this._addTrail(true, 'orWhere', key, type, value);\n\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    Or Where Executable\n ---------------------------------------- */\n\n/**\n * The actual executable function that will\n * be resolved once the trail ends related\n * to the orWhere() method. The or will\n * resolve from previous data set.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { array } - results from operation\n */\n\n\nfunction _orWhere(key, type, value, data) {\n  return this._operator(key, type, value, false, data);\n}\n/** ----------------------------------------\n    And Where\n ---------------------------------------- */\n\n/**\n * The orWhere will create a new trail function\n * that will be executed once the trail comes\n * to an end.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { Needle } object - new instance\n */\n\n\nfunction andWhere(key, type, value) {\n  this._addTrail(true, 'andWhere', key, type, value);\n\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    And Where Executable\n ---------------------------------------- */\n\n/**\n * The actual executable function that will\n * be resolved once the trail ends related\n * to the andWhere() method. The and will\n * resolve from original data set.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { array } - results from operation\n */\n\n\nfunction _andWhere(key, type, value, data) {\n  return this._operator(key, type, value, false, data);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  where: where,\n  orWhere: orWhere,\n  _orWhere: _orWhere,\n  andWhere: andWhere,\n  _andWhere: _andWhere\n});\n\n//# sourceURL=webpack://Needle/./src/methods/combinations.js?");

/***/ }),

/***/ "./src/methods/crud.js":
/*!*****************************!*\
  !*** ./src/methods/crud.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Create\n ---------------------------------------- */\n\n/**\n * The create method will push a new object\n * to the data set. This can be useful if a user\n * is able to interact with a set off data.\n *\n * @param { object } obj - new object\n */\nfunction create(obj) {\n  this._hasTrail();\n\n  this._data.push(obj);\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n     Read\n ---------------------------------------- */\n\n/**\n * Retrieve a specific item from the data set.\n *\n * @returns { object } - item from data set\n */\n\n\nfunction read(index) {\n  this._hasTrail();\n\n  return this._chain([this._data[index]]);\n}\n/**\n * The update method will basically replace\n * an excising item within the data set.\n *\n * @params { number } index - index of item\n * @params { object } obj - new item\n */\n\n/** ----------------------------------------\n     Update\n ---------------------------------------- */\n\n\nfunction update(index, obj) {\n  this._hasTrail();\n\n  this._data[index] = obj;\n\n  this._chain(this._data);\n}\n/**\n * Will update a single item key within the\n * current data set to a given value.\n *\n * @params { number } index - index of item\n * @params { string } key - target key\n * @params { any } value - new value for key\n */\n\n/** ----------------------------------------\n     Update Value\n ---------------------------------------- */\n\n\nfunction updateValue(index, key, value) {\n  this._hasTrail();\n\n  this._data[index][key] = value;\n\n  this._chain(this._data);\n}\n/**\n * Will update every key within the current\n * data set to a given value.\n *\n * @params { string } key - target key\n * @params { any } value - new value for key\n */\n\n/** ----------------------------------------\n     Update All\n ---------------------------------------- */\n\n\nfunction updateAll(key, value) {\n  this._hasTrail();\n\n  this._data.forEach(function (item) {\n    return item[key] = value;\n  });\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n     Delete\n ---------------------------------------- */\n\n/**\n * Delete a single item from the current\n * data set. Will take the index number\n * of the item to be removed.\n *\n * @params { number } index - index of item\n */\n\n\nfunction remove(index) {\n  this._hasTrail();\n\n  delete this._data[index];\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n     Delete Value\n ---------------------------------------- */\n\n/**\n * With the deleteValue method a single\n * key can be removed from a given item\n * within the current data set.\n *\n * @params { number } index - index of item\n * @params { string } key - key to be removed from item\n */\n\n\nfunction removeValue(index, key) {\n  this._hasTrail();\n\n  delete this._data[index][key];\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n     Delete All\n ---------------------------------------- */\n\n/**\n * The deleteAll method will clear\n * the current data set.\n */\n\n\nfunction removeAll(key) {\n  this._hasTrail();\n\n  this._data.forEach(function (item) {\n    return delete item[key];\n  });\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create: create,\n  read: read,\n  update: update,\n  updateValue: updateValue,\n  updateAll: updateAll,\n  remove: remove,\n  removeValue: removeValue,\n  removeAll: removeAll\n});\n\n//# sourceURL=webpack://Needle/./src/methods/crud.js?");

/***/ }),

/***/ "./src/methods/dates.js":
/*!******************************!*\
  !*** ./src/methods/dates.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_convertDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_convertDate */ \"./src/util/_convertDate.js\");\n/* harmony import */ var _util_dateOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_dateOptions */ \"./src/util/_dateOptions.js\");\n/* harmony import */ var _util_periodOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/_periodOptions */ \"./src/util/_periodOptions.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Before\n ---------------------------------------- */\n\n/**\n * Basically the same as the smaller method\n * but will convert the value into a unix\n * timestamp and compare given value within\n * the data object.\n *\n * @param { string } key - selected key\n * @param { string } value - matching value\n * @returns { Needle } object - new instance\n */\n\nfunction before(key, value) {\n  return this.smaller(key, value, true);\n}\n/** ----------------------------------------\n     After\n ---------------------------------------- */\n\n/**\n * Basically the same as the bigger method\n * but will convert the value into a unix\n * timestamp and compare given value within\n * the data object.\n *\n * @param { string } key - selected key\n * @param { string } value - matching value\n * @returns { Needle } object - new instance\n */\n\n\nfunction after(key, value) {\n  return this.bigger(key, value, true);\n}\n/** ----------------------------------------\n     Period\n ---------------------------------------- */\n\n/**\n * Basically the same as the between method\n * but will convert the values into a unix\n * timestamp and compare given values within\n * a range of the data object.\n *\n * @param { string } key - selected key\n * @param { array } values - matching values max 2\n * @returns { Needle } object - new instance\n */\n\n\nfunction period(key, values) {\n  return this.between(key, values, true);\n}\n/** ----------------------------------------\n     Month\n ---------------------------------------- */\n\n/**\n * Shorthand for working with months, this\n * method accepts the name of the month and\n * year to select a period of dates.\n *\n * @param { string } key - selected key\n * @param { string } month - selected month\n * @param { number } year - selected year\n * @returns { Needle } object - new instance\n */\n\n\nfunction month(key, month, year) {\n  var months = Object(_util_dateOptions__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  var date = this._find('month', month, months)[0];\n\n  var start = Object(_util_convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, \"\".concat(date.month, \"/1/\").concat(year));\n  var end = Object(_util_convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, \"\".concat(date.month, \"/\").concat(date.days, \"/\").concat(year));\n  return this.between(key, [start, end], true);\n}\n/** ----------------------------------------\n     Year\n ---------------------------------------- */\n\n/**\n * Shorthand for working with years, this\n * method accepts the year where the selection\n * needs to take place.\n *\n * @param { string } key - selected key\n * @param { number } year - selected year\n * @returns { Needle } object - new instance\n */\n\n\nfunction year(key, year) {\n  return this.between(key, [\"1/1/\".concat(year), \"12/31/\".concat(year)], true);\n}\n/** ----------------------------------------\n     Named Dates\n ---------------------------------------- */\n\n/**\n * Shorthand for working with years, this\n * method accepts the year where the selection\n * needs to take place.\n *\n * @param { string } selector - selected type\n * @returns { object } - match for date options\n */\n\n\nfunction _namedDates(selector) {\n  var period = Object(_util_periodOptions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  return this._find('name', selector, period)[0];\n}\n/** ----------------------------------------\n     Previous\n ---------------------------------------- */\n\n/**\n * Take last amount of \"years\", \"months\", \"days\" etc.\n * Needs a key (holding a date value) an amount\n * and the type of selector for instance \"months\".\n *\n * @param { string } selector - selected type\n * @returns { object } - match for date options\n */\n\n\nfunction previous(key, amount, selector) {\n  var match = this._namedDates(selector);\n\n  var convert = Object(_util_convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(match.amount * amount);\n  return this.between(key, [convert, new Date()], true);\n}\n/** ----------------------------------------\n     Upcoming\n ---------------------------------------- */\n\n/**\n * Take next amount of \"years\", \"months\", \"days\" etc.\n * Needs a key (holding a date value) an amount\n * and the type of selector for instance \"months\".\n *\n * @param { string } selector - selected type\n * @returns { object } - match for date options\n */\n\n\nfunction upcoming(key, amount, selector) {\n  var match = this._namedDates(selector);\n\n  var convert = Object(_util_convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(match.amount * amount, new Date(), 'future');\n  return this.between(key, [new Date(), convert], true);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  before: before,\n  after: after,\n  period: period,\n  month: month,\n  year: year,\n  _namedDates: _namedDates,\n  previous: previous,\n  upcoming: upcoming\n});\n\n//# sourceURL=webpack://Needle/./src/methods/dates.js?");

/***/ }),

/***/ "./src/methods/debugging.js":
/*!**********************************!*\
  !*** ./src/methods/debugging.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Logging\n ---------------------------------------- */\n\n/**\n * The log method is used for testing and\n * debugging. It will log the latest state\n * of the data array to the console. It can\n * be limited to a given number of items.\n *\n * @param { number } number - amount of items\n * @yields { array } - will console log array of items\n */\nfunction log(number) {\n  this._hasTrail();\n\n  console.log(number && this.take(number) || this._data);\n}\n/** ----------------------------------------\n     Printing\n ---------------------------------------- */\n\n/**\n * The print method is used for testing and\n * debugging. It will print the items of the\n * data array into the DOM, making results\n * visible, it will look for a element with\n * the id \"#result\" by default, and element\n * can also be provided as an argument, if both\n * are unable to match, the function will execute\n * on the body.\n *\n * @param { string } el - CSS selector for DOM element\n * @yields { string } print string to DOM\n */\n\n\nfunction print(el) {\n  this._hasTrail();\n\n  var result = document.querySelector('#result' || false) || document.body;\n  result.textContent = [this._data].map(function (item) {\n    return JSON.stringify(item);\n  });\n}\n/**\n * With the random method a random amount\n * of items can be returned from the latest\n * data state. This makes it easy to quickly\n * test multiple sets of data.\n *\n * @param { number } number - amount of items\n * @returns { Needle } object - new instance\n */\n\n/** ----------------------------------------\n     Randomize\n ---------------------------------------- */\n\n\nfunction random() {\n  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n  this._hasTrail();\n\n  var array = [];\n\n  while (array.length !== number || array.length === this._data.length) {\n    var _random = Math.floor(Math.random() * (1 + this._data.length - 1));\n\n    array.indexOf(this._data[_random]) === -1 && array.push(this._data[_random]);\n  }\n\n  return this._chain(array);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  log: log,\n  print: print,\n  random: random\n});\n\n//# sourceURL=webpack://Needle/./src/methods/debugging.js?");

/***/ }),

/***/ "./src/methods/helpers.js":
/*!********************************!*\
  !*** ./src/methods/helpers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_compareInArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_compareInArray */ \"./src/util/_compareInArray.js\");\n/* harmony import */ var _util_evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_evaluate */ \"./src/util/_evaluate.js\");\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/_isArray */ \"./src/util/_isArray.js\");\n/* harmony import */ var _util_isSingleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/_isSingleArray */ \"./src/util/_isSingleArray.js\");\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n\n/** ----------------------------------------\n    Chain Helper\n ---------------------------------------- */\n\n/**\n * The chain method returns a new instance\n * of the Needle class.\n *\n * @param { array } data - new array of manipulated data\n * @returns { Needle } object - new instance\n */\n\nfunction _chain(data) {\n  return new Needle(data, this._trail);\n}\n/** ----------------------------------------\n    Filter Deep Helper\n ---------------------------------------- */\n\n/**\n * The deep helper will look for keys that\n * contain object values (nested objects).\n *\n * @param { string } key - selected key\n * @param { object } item - base object\n * @returns { array } - filtered items\n */\n\n\nfunction _deep(key, item) {\n  return Object.keys(item).filter(function (key) {\n    return !Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item[key]) && _typeof(item[key]) === 'object' && item;\n  });\n}\n/** ----------------------------------------\n     Find Helper\n ---------------------------------------- */\n\n/**\n * Simple helper that will filter through an array\n * of data, by default this will be the data as\n * stored within the constructor. Give it a key\n * and value to find matching pairs.\n *\n * @param { string } key - selected key\n * @param { string | bool | array | number } value - matching value\n * @param { array } data - array of objects\n * @returns { array } new array of filtered items\n */\n\n\nfunction _find(key, value) {\n  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._data;\n  value = Object(_util_isSingleArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value);\n  var valueType = Object(_util_isType__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(value);\n  var fnType = {\n    'array': function array() {\n      return data.filter(function (item) {\n        return item[key] && item[key].some(function (index) {\n          return value.includes(index);\n        });\n      });\n    },\n    'boolean': function boolean() {\n      return data.filter(function (item) {\n        return item[key];\n      });\n    },\n    'string': function string() {\n      return data.filter(function (item) {\n        return item[key] && Object(_util_compareInArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, key, value);\n      });\n    },\n    'number': function number() {\n      return data.filter(function (item) {\n        return item[key] && Object(_util_compareInArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, key, value);\n      });\n    }\n  };\n  return fnType[valueType]();\n}\n/** ----------------------------------------\n    Format Path Helper\n ---------------------------------------- */\n\n/**\n * This helper will return an array containing\n * each given key from a dot notation in string\n * format, for instance \"contact.email.work\".\n *\n * @param { string } path - using object dot notation\n * @returns { array } array containing split of string\n */\n\n\nfunction _objPath(path) {\n  return path.split('.');\n}\n/** ----------------------------------------\n    Object Reducer Helper\n ---------------------------------------- */\n\n/**\n * This helper will reduce given keys\n * to a new object.\n *\n * @param { array } array - array of keys to be maintained\n * @param { object } item - original object\n * @returns { array } - manipulated object\n */\n\n\nfunction _objReduce(array, item) {\n  return array.map(function (key) {\n    return key;\n  }).reduce(function (array, key) {\n    return array[key];\n  }, item);\n}\n/** ----------------------------------------\n    Operator Helper\n ---------------------------------------- */\n\n/**\n * The operator helper can handle multiple\n * operation based on given arguments. The type\n * will determine the type operation executed.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @param { bool } date - will parse values to date\n * @returns { array } - filtered data\n */\n\n\nfunction _operator(key, type, value) {\n  var date = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this._data;\n  return data.filter(function (item) {\n    return Object(_util_evaluate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item[key], type, value, date);\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _chain: _chain,\n  _deep: _deep,\n  _find: _find,\n  _objPath: _objPath,\n  _objReduce: _objReduce,\n  _operator: _operator\n});\n\n//# sourceURL=webpack://Needle/./src/methods/helpers.js?");

/***/ }),

/***/ "./src/methods/matches.js":
/*!********************************!*\
  !*** ./src/methods/matches.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Is\n ---------------------------------------- */\n\n/**\n * Check for a boolean value of a specific\n * key as passed as an argument. Will only\n * look for first layer of keys.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\nfunction is(key) {\n  this._hasTrail();\n\n  var filter = this._data.filter(function (item) {\n    return item[key];\n  });\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Has\n ---------------------------------------- */\n\n/**\n * The has method will look if a given key\n * is present within the object, will only\n * look for the first layer of keys.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\n\nfunction has(key) {\n  this._hasTrail();\n\n  var filter = this._data.filter(function (item) {\n    return item.hasOwnProperty(key);\n  });\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Has Deep\n ---------------------------------------- */\n\n/**\n * The hasDeep method will look if a given key\n * is present within the object and loop through\n * available nested objects within the given item.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\n\nfunction hasDeep(key) {\n  var _this = this;\n\n  this._hasTrail();\n\n  var array = [];\n\n  var finder = function finder(key) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this._data;\n    var prev = arguments.length > 2 ? arguments[2] : undefined;\n    data.forEach(function (item) {\n      var obj = prev || item;\n\n      var deep = _this._deep(key, item);\n\n      item.hasOwnProperty(key) && array.push(obj);\n      deep.length && finder(key, deep.map(function (key) {\n        return item[key];\n      }), obj);\n    });\n  };\n\n  finder(key);\n  return this._chain(array);\n}\n/** ----------------------------------------\n     Find\n ---------------------------------------- */\n\n/**\n * The find method will return a specific\n * key value pair within the object, the\n * find method only look for the first\n * layer of keys present in the item.\n *\n * @param { string } key - selected key\n * @param { string | bool | array | number } value - matching value\n * @returns { Needle } object - new instance\n */\n\n\nfunction find(key, value) {\n  this._hasTrail();\n\n  var filter = this._find(key, value);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Find Deep\n ---------------------------------------- */\n\n/**\n * The findDeep method will return a specific\n * key value pair within the object, the\n * findDeep method will also look for any\n * nested object inside the item.\n *\n * @param { string } key - selected key\n * @param { string | bool | array | number } value - matching value\n * @returns { Needle } object - new instance\n */\n\n\nfunction findDeep(key, value) {\n  var _this2 = this;\n\n  this._hasTrail();\n\n  var array = [];\n\n  var finder = function finder(key, value) {\n    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this2._data;\n    var prev = arguments.length > 3 ? arguments[3] : undefined;\n    data.forEach(function (item) {\n      var obj = prev || item;\n\n      var deep = _this2._deep(key, item);\n\n      if (obj === item) _this2._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);\n      (deep.length === 0 || Object.keys(item).includes(key)) && _this2._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);\n      deep.length && finder(key, value, deep.map(function (key) {\n        return item[key];\n      }), obj);\n    });\n  };\n\n  finder(key, value);\n  return this._chain(array);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  is: is,\n  has: has,\n  hasDeep: hasDeep,\n  find: find,\n  findDeep: findDeep\n});\n\n//# sourceURL=webpack://Needle/./src/methods/matches.js?");

/***/ }),

/***/ "./src/methods/numbers.js":
/*!********************************!*\
  !*** ./src/methods/numbers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_evaluate */ \"./src/util/_evaluate.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Smaller\n ---------------------------------------- */\n\n/**\n * The smaller method will compare each item\n * to a given value and return the items\n * that match the given criteria.\n *\n * @param { string } key - selected key\n * @param { string | number } value - matching value\n * @param { bool } date - will parse values to date\n * @returns { Needle } object - new instance\n */\n\nfunction smaller(key, value) {\n  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  this._hasTrail();\n\n  var filter = this._operator(key, '<=', value, date);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Bigger\n ---------------------------------------- */\n\n/**\n * The bigger method will compare each item\n * to a given value and return the items\n * that match the given criteria.\n *\n * @param { string } key - selected key\n * @param { string | number } value - matching value\n * @param { bool } date - will parse values to date\n * @returns { Needle } object - new instance\n */\n\n\nfunction bigger(key, value) {\n  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  this._hasTrail();\n\n  var filter = this._operator(key, '>=', value, date);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Between\n ---------------------------------------- */\n\n/**\n * The between method returns an array of\n * items that are in between two given\n * values.\n *\n * @param { string } key - selected key\n * @param { array } values - matching values max 2\n * @param { bool } date - will parse values to date\n * @returns { Needle } object - new instance\n */\n\n\nfunction between(key, values) {\n  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  this._hasTrail();\n\n  var filter = this._data.filter(function (item) {\n    return Object(_util_evaluate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item[key], '>=', values[0], date) && Object(_util_evaluate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item[key], '<=', values[1], date);\n  });\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Equal\n ---------------------------------------- */\n\n/**\n * The equal method will look for a matching\n * item within the data array. This method\n * uses the operator helper method.\n *\n * @param { string } key - selected key\n * @param { number } value - matching value\n * @returns { Needle } object - new instance\n */\n\n\nfunction equal(key, value) {\n  this._hasTrail();\n\n  var filter = this._operator(key, '=', value);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Minimum\n ---------------------------------------- */\n\n/**\n * The min method will map the data array\n * and retrieve minimum of a given key.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\n\nfunction min(key) {\n  this._hasTrail();\n\n  var min = Math.min.apply(Math, _toConsumableArray(this._data.map(function (item) {\n    return item[key];\n  })));\n  return this.find(key, min);\n}\n/** ----------------------------------------\n     Maximum\n ---------------------------------------- */\n\n/**\n * The max method will map the data array\n * and retrieve maximum of a given key.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\n\nfunction max(key) {\n  this._hasTrail();\n\n  var max = Math.max.apply(Math, _toConsumableArray(this._data.map(function (item) {\n    return item[key];\n  })));\n  return this.find(key, max);\n}\n/** ----------------------------------------\n     Positive\n ---------------------------------------- */\n\n/**\n * Return all positive values from an array\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\n\nfunction positive(key) {\n  this._hasTrail();\n\n  var filter = this._operator(key, '>=', 0);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Netagtive\n ---------------------------------------- */\n\n/**\n * Return all negative values from an array\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\n\nfunction negative(key) {\n  this._hasTrail();\n\n  var filter = this._operator(key, '<', 0);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Sum\n ---------------------------------------- */\n\n/**\n * The sum method will retrieve the sum of\n * a given key, meaning sum every value of\n * the given key present within the data array.\n *\n * @param { string } key - selected key\n * @returns { number } amount of sum of given key\n */\n\n\nfunction sum(key) {\n  this._hasTrail();\n\n  this._calc = this._data.reduce(function (total, item) {\n    return total + item[key];\n  }, 0);\n  return this._calc;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  bigger: bigger,\n  smaller: smaller,\n  between: between,\n  equal: equal,\n  min: min,\n  max: max,\n  positive: positive,\n  negative: negative,\n  sum: sum\n});\n\n//# sourceURL=webpack://Needle/./src/methods/numbers.js?");

/***/ }),

/***/ "./src/methods/retrieve/_chunk.js":
/*!****************************************!*\
  !*** ./src/methods/retrieve/_chunk.js ***!
  \****************************************/
/*! exports provided: chunk, _prevChunk, _nextChunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_prevChunk\", function() { return _prevChunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_nextChunk\", function() { return _nextChunk; });\n/** ----------------------------------------\n    Chunk\n ---------------------------------------- */\n\n/**\n * The chunk method will return chunks of data\n * based on a given amount per chunk. Meaning,\n * the data will be defined into separate sections\n * based on the amount declared as a parameter.\n *\n * @param { number } number - selected amount of items\n * @returns { object } - will return an object with chunk data\n */\nfunction chunk(amount) {\n  var _this = this;\n\n  this._hasTrail();\n\n  this._chunks['data'] = [];\n  this._chunks['current'] = 0;\n\n  for (var i = 0; i < this._data.length; i += amount) {\n    this._chunks.data.push(this._data.slice(i, i + amount));\n  }\n\n  var chunked = {\n    chunks: this._chunks.data,\n    current: this._chunks.selected,\n    amount: this._chunks.data.length,\n    size: amount,\n    prev: function prev() {\n      return _this._prevChunk();\n    },\n    next: function next() {\n      return _this._nextChunk();\n    }\n  };\n\n  chunked['start'] = function (callback) {\n    _this.template(callback, _this._chunks.data[0]);\n\n    return chunked;\n  };\n\n  return chunked;\n}\n/** ----------------------------------------\n    Previous Chunk\n ---------------------------------------- */\n\n/**\n * This method will handle returning the previous\n * chunk based on the current count.\n *\n * @returns { array } - will return previous chunk\n */\n\n\nfunction _prevChunk() {\n  var chunk = this._chunks;\n  chunk.current += chunk.current === 0 ? chunk.data.length - 1 : -1;\n  return this._chain(chunk.data[chunk.current]);\n}\n/** ----------------------------------------\n    Next Chunk\n ---------------------------------------- */\n\n/**\n * This method will handle returning the next\n * chunk based on the current count.\n *\n * @returns { array } - will return next chunk\n */\n\n\nfunction _nextChunk() {\n  var chunk = this._chunks;\n  chunk.current += chunk.current < chunk.data.length - 1 ? 1 : -Math.abs(chunk.data.length - 1);\n  return this._chain(chunk.data[chunk.current]);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_chunk.js?");

/***/ }),

/***/ "./src/methods/retrieve/_count.js":
/*!****************************************!*\
  !*** ./src/methods/retrieve/_count.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Count\n ---------------------------------------- */\n\n/**\n * The count method will return the amount\n * of items present within the manipulated\n * data set.\n *\n * @returns { number } - amount of items in current data\n */\nfunction count() {\n  this._hasTrail();\n\n  return this._amount;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (count);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_count.js?");

/***/ }),

/***/ "./src/methods/retrieve/_first.js":
/*!****************************************!*\
  !*** ./src/methods/retrieve/_first.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    First\n ---------------------------------------- */\n\n/**\n * The first method will return the first\n * item from the data array.\n *\n * @returns { Needle } object - new instance\n */\nfunction first() {\n  this._hasTrail();\n\n  var select = this._data[0];\n  return this._chain([select]);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (first);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_first.js?");

/***/ }),

/***/ "./src/methods/retrieve/_get.js":
/*!**************************************!*\
  !*** ./src/methods/retrieve/_get.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Get\n ---------------------------------------- */\n\n/**\n * With the get method the entire class will\n * be returned, making it possible to iterate\n * with any custom script.\n *\n * @returns { Needle } object - new instance\n */\nfunction get() {\n  this._hasTrail();\n\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (get);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_get.js?");

/***/ }),

/***/ "./src/methods/retrieve/_index.js":
/*!****************************************!*\
  !*** ./src/methods/retrieve/_index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Index\n ---------------------------------------- */\n\n/**\n * The index method can retrieve a given\n * index from the data array.\n *\n * @param { number } id - selected index\n * @returns { object } - will return selected item from data\n */\nfunction index(id) {\n  this._hasTrail();\n\n  return this._data[id];\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_index.js?");

/***/ }),

/***/ "./src/methods/retrieve/_last.js":
/*!***************************************!*\
  !*** ./src/methods/retrieve/_last.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Last\n ---------------------------------------- */\n\n/**\n * The last method will return the last\n * item from the data array.\n *\n * @returns { Needle } object - new instance\n */\nfunction last() {\n  this._hasTrail();\n\n  var select = this._data.slice(-1)[0];\n\n  return this._chain([select]);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (last);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_last.js?");

/***/ }),

/***/ "./src/methods/retrieve/_select.js":
/*!*****************************************!*\
  !*** ./src/methods/retrieve/_select.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Select\n ---------------------------------------- */\n\n/**\n * The selected method will convert the items\n * from the data array into a new array of items\n * limiting the keys as based on a given amount\n * of selectors. Can hold multiple strings.\n *\n * @param { array } keys - selected keys to be retrieved\n * @returns { Needle } object - new instance\n */\nfunction select() {\n  var _this = this;\n\n  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {\n    keys[_key] = arguments[_key];\n  }\n\n  this._hasTrail();\n\n  var select = this._data.map(function (item) {\n    var obj = {};\n    keys.forEach(function (key) {\n      var deep = key.indexOf('.') !== -1 && _this._objPath(key);\n\n      if (item[key] || item[deep[0]]) deep ? obj[deep.slice(-1)[0]] = _this._objReduce(deep, item) : obj[key] = item[key];\n    });\n    return obj;\n  });\n\n  return this._chain(select);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (select);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_select.js?");

/***/ }),

/***/ "./src/methods/retrieve/_take.js":
/*!***************************************!*\
  !*** ./src/methods/retrieve/_take.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Take\n ---------------------------------------- */\n\n/**\n * The take method will resolve a selected\n * amount of items from the data array and\n * return all by default, if more items are\n * required it will limit itself to the\n * total amount of items present.\n *\n * @param { number } amount - selected amount of items\n * @param { bool } info - will return info about the query if true\n * @returns { array } - array of (manipulated) data\n */\n\nfunction take() {\n  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._data.length;\n  var info = arguments.length > 1 ? arguments[1] : undefined;\n\n  this._hasTrail();\n\n  if (Object(_util_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(amount) === 'string' && amount === 'all') amount = this._data.length;\n\n  var select = this._data.slice(0, amount);\n\n  var all = !amount || amount >= this._data.length;\n  var result = all && this._data || select;\n  this.info = result.length;\n  return info && {\n    results: result,\n    info: this.info\n  } || result;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (take);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_take.js?");

/***/ }),

/***/ "./src/methods/retrieve/_values.js":
/*!*****************************************!*\
  !*** ./src/methods/retrieve/_values.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Values\n ---------------------------------------- */\n\n/**\n * The values method will retrieve an array of values\n * matching a key available in the item. This function\n * will not chain at is an end of the road utility.\n *\n * @param { string } key - selected key to be retrieved\n * @returns { object } - will return an object with chunk data\n */\nfunction values(key) {\n  var _this = this;\n\n  this._hasTrail();\n\n  var array = [];\n\n  var finder = function finder(key) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this._data;\n    var prev = arguments.length > 2 ? arguments[2] : undefined;\n    data.forEach(function (item) {\n      var obj = prev || item;\n\n      var deep = _this._deep(key, item);\n\n      item.hasOwnProperty(key) && array.push(item[key]);\n      deep.length && finder(key, deep.map(function (key) {\n        return item[key];\n      }), obj);\n    });\n  };\n\n  finder(key);\n  return array;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (values);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_values.js?");

/***/ }),

/***/ "./src/methods/retrieve/base.js":
/*!**************************************!*\
  !*** ./src/methods/retrieve/base.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_chunk */ \"./src/methods/retrieve/_chunk.js\");\n/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_count */ \"./src/methods/retrieve/_count.js\");\n/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_first */ \"./src/methods/retrieve/_first.js\");\n/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_get */ \"./src/methods/retrieve/_get.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_index */ \"./src/methods/retrieve/_index.js\");\n/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_last */ \"./src/methods/retrieve/_last.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_select */ \"./src/methods/retrieve/_select.js\");\n/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_take */ \"./src/methods/retrieve/_take.js\");\n/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_values */ \"./src/methods/retrieve/_values.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  chunk: _chunk__WEBPACK_IMPORTED_MODULE_0__[\"chunk\"],\n  _prevChunk: _chunk__WEBPACK_IMPORTED_MODULE_0__[\"_prevChunk\"],\n  _nextChunk: _chunk__WEBPACK_IMPORTED_MODULE_0__[\"_nextChunk\"],\n  count: _count__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  first: _first__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  get: _get__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  index: _index__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  last: _last__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  select: _select__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  take: _take__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  values: _values__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/base.js?");

/***/ }),

/***/ "./src/methods/sorting.js":
/*!********************************!*\
  !*** ./src/methods/sorting.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_arrange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_arrange */ \"./src/util/_arrange.js\");\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Sort\n ---------------------------------------- */\n\n/**\n * The sort method will sort the items within\n * the data array based on asc or desc order.\n * This can be specified as a second argument\n * and will use a default of asc.\n *\n * @param { number } key - selected key\n * @param { string } type - either \"asc\" or \"desc\"\n * @returns { Needle } object - new instance\n */\n\nfunction sort(key) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';\n\n  this._hasTrail();\n\n  var sort = Object(_util_arrange__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this._data, key, type);\n  return this._chain(sort);\n}\n/** ----------------------------------------\n    Sort Date\n ---------------------------------------- */\n\n/**\n * The sortDate method will sort the items within\n * the data array based on asc or desc order.\n * This sort method should only be used if dates\n * are provided with the selected value of a key.\n *\n * @param { number } key - selected key\n * @param { string } type - either \"asc\" or \"desc\"\n * @returns { Needle } object - new instance\n */\n\n\nfunction sortDate(key) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';\n\n  this._hasTrail();\n\n  var sort = Object(_util_arrange__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this._data, key, type, true);\n  return this._chain(sort);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  sort: sort,\n  sortDate: sortDate\n});\n\n//# sourceURL=webpack://Needle/./src/methods/sorting.js?");

/***/ }),

/***/ "./src/methods/store.js":
/*!******************************!*\
  !*** ./src/methods/store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_randomId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_randomId */ \"./src/util/_randomId.js\");\n/* harmony import */ var _util_stamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_stamp */ \"./src/util/_stamp.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Save\n ---------------------------------------- */\n\n/**\n * The save method will push a collection\n * of data to the store. This means selections\n * can be saved from time to time to create\n * a snapshot of the current data manipulation.\n *\n * @param { string } name - give the snapshot a name\n * @returns { string } - will return identifier name of store\n */\n\nfunction save(name) {\n  name = name || unique();\n  store.forEach(function (item) {\n    return item.id++;\n  });\n  store.push({\n    name: name,\n    id: 1,\n    data: this._data,\n    time: Object(_util_stamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  });\n  store.reverse();\n  return name;\n}\n/** ----------------------------------------\n     Retrieve\n ---------------------------------------- */\n\n/**\n * The retrieve method will return a\n * saved data set from the store by a given\n * name or identifier.\n *\n * @param { string } name - name of data set\n * @returns { object } - will return item from store\n */\n\n\nfunction retrieve(name) {\n  return this._find('name', name, store);\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  save: save,\n  retrieve: retrieve\n});\n\n//# sourceURL=webpack://Needle/./src/methods/store.js?");

/***/ }),

/***/ "./src/methods/template.js":
/*!*********************************!*\
  !*** ./src/methods/template.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Template\n ---------------------------------------- */\n\n/**\n * With the template method a callback will be\n * executed for every item present within the\n * data array. The data of each item will be\n * passed into the callback. The template method\n * will also return a object containing information\n * about the results.\n *\n * @param { function } callback - executable\n * @returns { object } - containing info about the query\n */\nfunction template(callback) {\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._data;\n  if (this._hasTrail()) return this._data.forEach(callback, this);\n  data.forEach(callback, {\n    needle: this,\n    info: this.info\n  });\n  return this.info;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  template: template\n});\n\n//# sourceURL=webpack://Needle/./src/methods/template.js?");

/***/ }),

/***/ "./src/methods/trail.js":
/*!******************************!*\
  !*** ./src/methods/trail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/** ----------------------------------------\n     Has Trail\n ---------------------------------------- */\n\n/**\n * Will check if a trail can be closed and\n * execute the trail. It will concat any\n * results produced by the trail and push\n * these to the data array creating a extended\n * data set based on given query chain.\n */\nfunction _hasTrail() {\n  if (!this._trail.exe.length) return;\n  this._data = [].concat.apply([], this._exeTrail());\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n     Add Trail\n ---------------------------------------- */\n\n/**\n * The addTrail method will create a new\n * function trail that can be executed once\n * the trail ends.\n *\n * @param { bool } trail - should push trail\n * @param { string } fn - name of function\n * @param { array } args - arguments specified\n */\n\n\nfunction _addTrail(trail, fn) {\n  var or = ['orWhere'];\n  var and = ['andWhere'];\n\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  trail && this._trail['exe'].push({\n    type: and.includes(fn) && 'and' || or.includes(fn) && 'or',\n    name: '_' + fn,\n    args: args,\n    exe: this['_' + fn].bind(this)\n  });\n}\n/** ----------------------------------------\n     Reset Trail\n ---------------------------------------- */\n\n/**\n * Will reset the trail to it's native state\n * and make sure that other chained methods\n * will execute without interference.\n */\n\n\nfunction _resetTrail() {\n  this._trail = {\n    exe: [],\n    data: [],\n    prev: []\n  };\n}\n/**\n * If chain is available the executing will\n * process all stacked queries and resolve the\n * results in a new array. This array will be\n * flattened by the hasTrail() method if\n * criteria are matched.\n */\n\n/** ----------------------------------------\n     Execute Trail\n ---------------------------------------- */\n\n\nfunction _exeTrail() {\n  var _this = this;\n\n  var executed = [];\n  var setData = [];\n\n  var result = this._trail.exe.map(function (fn) {\n    if (fn.type === 'or') setData = _this._trail.data;\n    if (fn.type === 'and') setData = _this._trail.prev;\n    executed.push(fn.type);\n    return fn.exe.apply(fn, _toConsumableArray(fn.args).concat([setData]));\n  });\n\n  if (!executed.includes('and')) {\n    result.push(this._trail.prev);\n  }\n\n  this._resetTrail();\n\n  return result;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _hasTrail: _hasTrail,\n  _addTrail: _addTrail,\n  _resetTrail: _resetTrail,\n  _exeTrail: _exeTrail\n});\n\n//# sourceURL=webpack://Needle/./src/methods/trail.js?");

/***/ }),

/***/ "./src/needle.js":
/*!***********************!*\
  !*** ./src/needle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/Core */ \"./src/Core.js\");\n/* harmony import */ var _js_setup_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/setup/_construct */ \"./src/setup/_construct.js\");\n/* harmony import */ var _js_setup_contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/setup/_contents */ \"./src/setup/_contents.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/** ----------------------------------------\n     Needle Core\n ---------------------------------------- */\n\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n     Store\n ---------------------------------------- */\n\nvar model = [];\nvar store = [];\n/** ----------------------------------------\n     Needle\n ---------------------------------------- */\n\nvar Needle =\n/*#__PURE__*/\nfunction (_Core) {\n  _inherits(Needle, _Core);\n\n  function Needle() {\n    var _this;\n\n    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var trail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    _classCallCheck(this, Needle);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Needle).call(this));\n    Object(_js_setup_construct__WEBPACK_IMPORTED_MODULE_1__[\"construct\"])(_assertThisInitialized(_this), data, trail);\n    Object(_js_setup_contents__WEBPACK_IMPORTED_MODULE_2__[\"contents\"])(_assertThisInitialized(_this), data);\n    return _this;\n  }\n  /** ----------------------------------------\n       Data\n   ---------------------------------------- */\n\n\n  _createClass(Needle, [{\n    key: \"data\",\n    get: function get() {\n      return this._data;\n    },\n    set: function set(array) {\n      this._data = array;\n    }\n    /** ----------------------------------------\n        Content\n     ---------------------------------------- */\n\n  }, {\n    key: \"content\",\n    get: function get() {\n      return this._content;\n    }\n    /** ----------------------------------------\n         Information\n     ---------------------------------------- */\n\n  }, {\n    key: \"info\",\n    get: function get() {\n      return this._info;\n    },\n    set: function set(length) {\n      this._info['length'] = length;\n    }\n    /** ----------------------------------------\n         Configuration\n     ---------------------------------------- */\n\n  }, {\n    key: \"config\",\n    set: function set(config) {\n      this._settings = config;\n    },\n    get: function get() {\n      return this._settings;\n    }\n    /** ----------------------------------------\n         Store\n     ---------------------------------------- */\n\n  }, {\n    key: \"store\",\n    get: function get() {\n      return store;\n    }\n  }]);\n\n  return Needle;\n}(_js_Core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Needle);\n\n//# sourceURL=webpack://Needle/./src/needle.js?");

/***/ }),

/***/ "./src/setup/_construct.js":
/*!*********************************!*\
  !*** ./src/setup/_construct.js ***!
  \*********************************/
/*! exports provided: construct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"construct\", function() { return construct; });\n/* harmony import */ var _js_config_default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/config/default.config */ \"./src/config/default.config.js\");\n/** ----------------------------------------\n    Defaults\n ---------------------------------------- */\n\n/** ----------------------------------------\n     Construct\n ---------------------------------------- */\n\nfunction construct(model, data, trail) {\n  var defaults = Object(_js_config_default_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, trail);\n  defaults.forEach(function (config) {\n    return model['_' + config.name] = config.value;\n  });\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n//# sourceURL=webpack://Needle/./src/setup/_construct.js?");

/***/ }),

/***/ "./src/setup/_contents.js":
/*!********************************!*\
  !*** ./src/setup/_contents.js ***!
  \********************************/
/*! exports provided: contents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contents\", function() { return contents; });\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isArray */ \"./src/util/_isArray.js\");\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n     Contents\n ---------------------------------------- */\n\nfunction contents(model, data) {\n  Object.keys(data[0]).forEach(function (value) {\n    if (Object(_util_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data[0][value]) !== 'object') {\n      model['_content'][value] = Object(_util_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data[0][value]);\n    }\n  });\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n//# sourceURL=webpack://Needle/./src/setup/_contents.js?");

/***/ }),

/***/ "./src/setup/_extends.js":
/*!*******************************!*\
  !*** ./src/setup/_extends.js ***!
  \*******************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\n/* harmony import */ var _js_config_method_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/config/method.config */ \"./src/config/method.config.js\");\n/** ----------------------------------------\n    Needle Config\n ---------------------------------------- */\n\n/** ----------------------------------------\n     Extend\n ---------------------------------------- */\n\nvar extend = function extend(model, fn) {\n  var name = Object.keys(fn)[0];\n  Object.keys(fn).forEach(function (method) {\n    var unknow = typeof _js_config_method_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name] === 'undefined';\n    model.prototype[method] = (unknow || _js_config_method_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name][method]) && fn[method];\n  });\n};\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Needle/./src/setup/_extends.js?");

/***/ }),

/***/ "./src/util/_arrange.js":
/*!******************************!*\
  !*** ./src/util/_arrange.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Arrange\n ---------------------------------------- */\nvar arrange = function arrange(array, key, type) {\n  var date = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  var convert = function convert(a, b) {\n    a = date ? new Date(a[key]) : a[key];\n    b = date ? new Date(b[key]) : b[key];\n    return {\n      a: a,\n      b: b\n    };\n  };\n\n  var _asc = function asc(a, b) {\n    var item = convert(a, b);\n    return item.b < item.a ? 1 : item.b > item.a ? -1 : 0;\n  };\n\n  var _desc = function desc(a, b) {\n    var item = convert(a, b);\n    return item.a < item.b ? 1 : item.a > item.b ? -1 : 0;\n  };\n\n  var sortType = {\n    'asc': function asc() {\n      return array.sort(_asc);\n    },\n    'desc': function desc() {\n      return array.sort(_desc);\n    }\n  };\n  return sortType[type]();\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (arrange);\n\n//# sourceURL=webpack://Needle/./src/util/_arrange.js?");

/***/ }),

/***/ "./src/util/_compareInArray.js":
/*!*************************************!*\
  !*** ./src/util/_compareInArray.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isArray */ \"./src/util/_isArray.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Compare In Array\n ---------------------------------------- */\n\nvar compareInArray = function compareInArray(item, key, value) {\n  return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item[key]) ? item[key].includes(value) : item[key] === value;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (compareInArray);\n\n//# sourceURL=webpack://Needle/./src/util/_compareInArray.js?");

/***/ }),

/***/ "./src/util/_convertDate.js":
/*!**********************************!*\
  !*** ./src/util/_convertDate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Convert Date\n ---------------------------------------- */\nvar convertDate = function convertDate(value, convert) {\n  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'history';\n  var date = convert ? new Date(convert) : new Date();\n  value = value * 24 * 60 * 60 * 1000;\n  var dir = {\n    history: date.getTime() - value,\n    future: date.getTime() + value\n  };\n  var calc = new Date(dir[direction]);\n  var day = calc.getDate();\n  var month = calc.getMonth() + 1;\n  var year = calc.getFullYear();\n  return calc;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (convertDate);\n\n//# sourceURL=webpack://Needle/./src/util/_convertDate.js?");

/***/ }),

/***/ "./src/util/_dateOptions.js":
/*!**********************************!*\
  !*** ./src/util/_dateOptions.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_config_months_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/config/months.config */ \"./src/config/months.config.js\");\n/** ----------------------------------------\n    Months\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Date Options\n ---------------------------------------- */\n\nvar dateOptions = function dateOptions() {\n  return _js_config_months_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dateOptions);\n\n//# sourceURL=webpack://Needle/./src/util/_dateOptions.js?");

/***/ }),

/***/ "./src/util/_evaluate.js":
/*!*******************************!*\
  !*** ./src/util/_evaluate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Evaluate\n ---------------------------------------- */\nvar evaluate = function evaluate(item, operator, value, date) {\n  item = date ? new Date(item) : item;\n  value = date ? new Date(value) : value;\n  var compare = {\n    '>': item > value,\n    '<': item < value,\n    '>=': item >= value,\n    '<=': item <= value,\n    '=': item === value\n  };\n  return compare[operator];\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (evaluate);\n\n//# sourceURL=webpack://Needle/./src/util/_evaluate.js?");

/***/ }),

/***/ "./src/util/_isArray.js":
/*!******************************!*\
  !*** ./src/util/_isArray.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Is Array\n ---------------------------------------- */\nvar isArray = function isArray(value) {\n  return Array.isArray(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isArray);\n\n//# sourceURL=webpack://Needle/./src/util/_isArray.js?");

/***/ }),

/***/ "./src/util/_isDate.js":
/*!*****************************!*\
  !*** ./src/util/_isDate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Is Date\n ---------------------------------------- */\nvar isDate = function isDate(value) {\n  return Date.parse(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isDate);\n\n//# sourceURL=webpack://Needle/./src/util/_isDate.js?");

/***/ }),

/***/ "./src/util/_isSingleArray.js":
/*!************************************!*\
  !*** ./src/util/_isSingleArray.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isArray */ \"./src/util/_isArray.js\");\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Is Single Array\n ---------------------------------------- */\n\nvar isSingleArray = function isSingleArray(value) {\n  return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) && value.length === 1 && value[0] || value;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isSingleArray);\n\n//# sourceURL=webpack://Needle/./src/util/_isSingleArray.js?");

/***/ }),

/***/ "./src/util/_isType.js":
/*!*****************************!*\
  !*** ./src/util/_isType.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isDate */ \"./src/util/_isDate.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Is Type\n ---------------------------------------- */\n\nvar isType = function isType(value) {\n  return typeof value !== 'number' && !isNaN(Object(_util_isDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value)) && 'date' || Array.isArray(value) && 'array' || _typeof(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isType);\n\n//# sourceURL=webpack://Needle/./src/util/_isType.js?");

/***/ }),

/***/ "./src/util/_leapYear.js":
/*!*******************************!*\
  !*** ./src/util/_leapYear.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Leap Year\n ---------------------------------------- */\nvar leapYear = function leapYear() {\n  return new Date().getFullYear() % 4 === 0;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (leapYear);\n\n//# sourceURL=webpack://Needle/./src/util/_leapYear.js?");

/***/ }),

/***/ "./src/util/_periodOptions.js":
/*!************************************!*\
  !*** ./src/util/_periodOptions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_config_period_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/config/period.config */ \"./src/config/period.config.js\");\n/** ----------------------------------------\n    Period\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Period Options\n ---------------------------------------- */\n\nvar periodOptions = function periodOptions() {\n  return _js_config_period_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (periodOptions);\n\n//# sourceURL=webpack://Needle/./src/util/_periodOptions.js?");

/***/ }),

/***/ "./src/util/_randomId.js":
/*!*******************************!*\
  !*** ./src/util/_randomId.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Random ID\n ---------------------------------------- */\nvar randomId = function randomId() {\n  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (randomId);\n\n//# sourceURL=webpack://Needle/./src/util/_randomId.js?");

/***/ }),

/***/ "./src/util/_stamp.js":
/*!****************************!*\
  !*** ./src/util/_stamp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Stamp\n ---------------------------------------- */\nvar stamp = function stamp() {\n  return Math.floor(Date.now() / 1000);\n};\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stamp);\n\n//# sourceURL=webpack://Needle/./src/util/_stamp.js?");

/***/ })

/******/ })["default"];module.exports=Needle;