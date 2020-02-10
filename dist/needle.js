/*!
 * Needle (0.8.1) by Sander Hidding
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Needle.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_setup_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/setup/_extends */ \"./src/setup/_extends.js\");\n/* harmony import */ var _method_helpers_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @method/helpers/base */ \"./src/methods/helpers/base.js\");\n/* harmony import */ var _method_trail_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @method/trail/base */ \"./src/methods/trail/base.js\");\n/* harmony import */ var _method_retrieve_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @method/retrieve/base */ \"./src/methods/retrieve/base.js\");\n/* harmony import */ var _method_sorting_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @method/sorting/base */ \"./src/methods/sorting/base.js\");\n/* harmony import */ var _method_debugging_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @method/debugging/base */ \"./src/methods/debugging/base.js\");\n/* harmony import */ var _method_template_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @method/template/base */ \"./src/methods/template/base.js\");\n/* harmony import */ var _method_numbers_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @method/numbers/base */ \"./src/methods/numbers/base.js\");\n/* harmony import */ var _method_dates_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @method/dates/base */ \"./src/methods/dates/base.js\");\n/* harmony import */ var _method_matches_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @method/matches/base */ \"./src/methods/matches/base.js\");\n/* harmony import */ var _method_combinations_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @method/combinations/base */ \"./src/methods/combinations/base.js\");\n/* harmony import */ var _method_custom_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @method/custom/base */ \"./src/methods/custom/base.js\");\n/* harmony import */ var _method_store_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @method/store/base */ \"./src/methods/store/base.js\");\n/* harmony import */ var _method_crud_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @method/crud/base */ \"./src/methods/crud/base.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** ----------------------------------------\n    Initiate Needle Core\n ---------------------------------------- */\nvar Core = function Core() {\n  _classCallCheck(this, Core);\n};\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n     Helpers\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Needle Helpers\n ---------------------------------------- */\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_helpers_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_trail_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/** ----------------------------------------\n    Methods\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Needle Methods\n ---------------------------------------- */\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_retrieve_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_sorting_base__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_debugging_base__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_template_base__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_numbers_base__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_dates_base__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_matches_base__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_combinations_base__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_custom_base__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n/** ----------------------------------------\n     Handlers\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Needle Handlers\n ---------------------------------------- */\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_store_base__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Core, _method_crud_base__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\n\n//# sourceURL=webpack://Needle/./src/Core.js?");

/***/ }),

/***/ "./src/Needle.js":
/*!***********************!*\
  !*** ./src/Needle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/Core */ \"./src/Core.js\");\n/* harmony import */ var _js_setup_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/setup/_construct */ \"./src/setup/_construct.js\");\n/* harmony import */ var _js_setup_contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/setup/_contents */ \"./src/setup/_contents.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/** ----------------------------------------\n     Needle Core\n ---------------------------------------- */\n\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n     Needle\n ---------------------------------------- */\n\nvar Needle =\n/*#__PURE__*/\nfunction (_Core) {\n  _inherits(Needle, _Core);\n\n  function Needle() {\n    var _this;\n\n    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var trail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    _classCallCheck(this, Needle);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Needle).call(this));\n    Object(_js_setup_construct__WEBPACK_IMPORTED_MODULE_1__[\"construct\"])(_assertThisInitialized(_this), data, trail);\n    Object(_js_setup_contents__WEBPACK_IMPORTED_MODULE_2__[\"contents\"])(_assertThisInitialized(_this), data);\n    return _this;\n  }\n  /** ----------------------------------------\n       Data\n   ---------------------------------------- */\n\n\n  _createClass(Needle, [{\n    key: \"data\",\n    get: function get() {\n      return this._data;\n    },\n    set: function set(array) {\n      this._data = array;\n    }\n    /** ----------------------------------------\n        Content\n     ---------------------------------------- */\n\n  }, {\n    key: \"content\",\n    get: function get() {\n      return this._content;\n    }\n    /** ----------------------------------------\n         Information\n     ---------------------------------------- */\n\n  }, {\n    key: \"info\",\n    get: function get() {\n      return this._info;\n    },\n    set: function set(length) {\n      this._info['length'] = length;\n    }\n    /** ----------------------------------------\n         Configuration\n     ---------------------------------------- */\n\n  }, {\n    key: \"config\",\n    set: function set(config) {\n      this._settings = config;\n    },\n    get: function get() {\n      return this._settings;\n    }\n  }]);\n\n  return Needle;\n}(_js_Core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Needle);\n\n//# sourceURL=webpack://Needle/./src/Needle.js?");

/***/ }),

/***/ "./src/config/default.config.js":
/*!**************************************!*\
  !*** ./src/config/default.config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Model\n ---------------------------------------- */\nvar model = [];\n/** ----------------------------------------\n     Create Constructor\n ---------------------------------------- */\n\nvar setDefaults = function setDefaults(data, trail) {\n  /** ----------------------------------------\n      Set Model\n   ---------------------------------------- */\n  model = model.length > 0 ? model : data;\n  /** ----------------------------------------\n      Configuration\n   ---------------------------------------- */\n\n  var defaults = [\n  /** ----------------------------------------\n       Amount\n   ---------------------------------------- */\n  {\n    name: 'amount',\n    value: data.length || 0\n  },\n  /** ----------------------------------------\n      Calc\n   ---------------------------------------- */\n  {\n    name: 'calc',\n    value: 0\n  },\n  /** ----------------------------------------\n      Chunks\n   ---------------------------------------- */\n  {\n    name: 'chunks',\n    value: {}\n  },\n  /** ----------------------------------------\n       Content\n   ---------------------------------------- */\n  {\n    name: 'content',\n    value: {}\n  },\n  /** ----------------------------------------\n      Data\n   ---------------------------------------- */\n  {\n    name: 'data',\n    value: data\n  },\n  /** ----------------------------------------\n       Info\n   ---------------------------------------- */\n  {\n    name: 'info',\n    value: {\n      set: model.length,\n      length: data.length\n    }\n  },\n  /** ----------------------------------------\n       Trail\n   ---------------------------------------- */\n  {\n    name: 'trail',\n    value: trail || {\n      exe: [],\n      data: [],\n      prev: []\n    }\n  }];\n  return defaults;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDefaults);\n\n//# sourceURL=webpack://Needle/./src/config/default.config.js?");

/***/ }),

/***/ "./src/config/method.config.js":
/*!*************************************!*\
  !*** ./src/config/method.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Configuration\n ---------------------------------------- */\nvar methods = {\n  /** ----------------------------------------\n       Sorting\n   ---------------------------------------- */\n  sort: {\n    sort: true\n  },\n\n  /** ----------------------------------------\n       Debugging\n   ---------------------------------------- */\n  debugging: {\n    log: true,\n    print: true,\n    random: true\n  },\n\n  /** ----------------------------------------\n       Template\n   ---------------------------------------- */\n  template: {\n    template: true\n  },\n\n  /** ----------------------------------------\n      Numbers\n   ---------------------------------------- */\n  numbers: {\n    bigger: true,\n    smaller: true,\n    between: true,\n    min: true,\n    max: true,\n    positive: true,\n    negative: true,\n    sum: true\n  },\n\n  /** ----------------------------------------\n       Dates\n   ---------------------------------------- */\n  dates: {\n    before: true,\n    after: true,\n    period: true,\n    month: true,\n    year: true,\n    previous: true,\n    upcoming: true\n  },\n\n  /** ----------------------------------------\n      Matches\n   ---------------------------------------- */\n  matches: {\n    is: true,\n    has: true,\n    hasDeep: true,\n    find: true,\n    findDeep: true\n  },\n\n  /** ----------------------------------------\n      Combinations\n   ---------------------------------------- */\n  combinations: {\n    where: true,\n    orWhere: true,\n    _orWhere: true,\n    andWhere: true,\n    _andWhere: true\n  },\n\n  /** ----------------------------------------\n       Store\n   ---------------------------------------- */\n  store: {\n    save: false,\n    retrieve: false\n  },\n\n  /** ----------------------------------------\n       CRUD\n   ---------------------------------------- */\n  crud: {\n    create: true,\n    read: true,\n    update: true,\n    updateValue: true,\n    updateAll: true,\n    remove: true,\n    removeValue: true,\n    removeAll: true\n  },\n\n  /** ----------------------------------------\n       Custom\n   ---------------------------------------- */\n  custom: {\n    customEach: true,\n    customFilter: true\n  }\n};\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (methods);\n\n//# sourceURL=webpack://Needle/./src/config/method.config.js?");

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

/***/ "./src/methods/combinations/_and.js":
/*!******************************************!*\
  !*** ./src/methods/combinations/_and.js ***!
  \******************************************/
/*! exports provided: and, _and */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"and\", function() { return and; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_and\", function() { return _and; });\n/** ----------------------------------------\n    And\n ---------------------------------------- */\n\n/**\n * The and method will handle the trail based\n * on the initial load of the query method and\n * pass a callback to the trail.\n *\n * @param { function } callback - executable function\n * @returns { Needle } object - new instance\n */\nfunction and(callback) {\n  this._addTrail(true, 'and', callback);\n\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    And Executable\n ---------------------------------------- */\n\n/**\n * The and method will execute a given query\n * that will handle a inclusive selection\n * of items as based on custom logic.\n *\n * @param { function } callback - executable function\n * @param { array } data - set of data\n * @returns { Needle } object - new instance\n */\n\n\nfunction _and(callback, data) {\n  return callback(new Needle(data), data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/_and.js?");

/***/ }),

/***/ "./src/methods/combinations/_andQuery.js":
/*!***********************************************!*\
  !*** ./src/methods/combinations/_andQuery.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    And Query\n ---------------------------------------- */\n\n/**\n * The andQuery will execute a list of queries\n * matching all inclusive queries. Meaning where\n * all values match common values.\n *\n * @param { array } callback - array containing queries\n * @returns { Needle } object - new instance\n */\nfunction andQuery(callback) {\n  var filter = this._query(callback(this), 'doubles');\n\n  var check = filter.merge.count === filter.amount;\n  return this._chain(check ? filter.merge.result : []);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (andQuery);\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/_andQuery.js?");

/***/ }),

/***/ "./src/methods/combinations/_andWhere.js":
/*!***********************************************!*\
  !*** ./src/methods/combinations/_andWhere.js ***!
  \***********************************************/
/*! exports provided: andWhere, _andWhere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"andWhere\", function() { return andWhere; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_andWhere\", function() { return _andWhere; });\n/** ----------------------------------------\n    And Where\n ---------------------------------------- */\n\n/**\n * The orWhere will create a new trail function\n * that will be executed once the trail comes\n * to an end.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { Needle } object - new instance\n */\nfunction andWhere(key, type, value) {\n  !value && (value = type) && (type = '=');\n  value && value.length !== 0 && this._addTrail(true, 'andWhere', key, type, value);\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    And Where Executable\n ---------------------------------------- */\n\n/**\n * The actual executable function that will\n * be resolved once the trail ends related\n * to the andWhere() method. The and will\n * resolve from original data set.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { array } - results from operation\n */\n\n\nfunction _andWhere(key, type, value, data) {\n  return this._operator(key, type, value, false, data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/_andWhere.js?");

/***/ }),

/***/ "./src/methods/combinations/_or.js":
/*!*****************************************!*\
  !*** ./src/methods/combinations/_or.js ***!
  \*****************************************/
/*! exports provided: or, _or */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"or\", function() { return or; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_or\", function() { return _or; });\n/** ----------------------------------------\n    Or\n ---------------------------------------- */\n\n/**\n * The or method will handle the trail based\n * on the initial load of the query method and\n * pass a callback to the trail.\n *\n * @param { function } callback - executable function\n * @returns { Needle } object - new instance\n */\nfunction or(callback) {\n  this._addTrail(true, 'or', callback);\n\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    Or Executable\n ---------------------------------------- */\n\n/**\n * The or method will execute a given query\n * that will handle a exclusive selection\n * of items as based on custom logic.\n *\n * @param { function } callback - executable function\n * @param { array } data - set of data\n * @returns { Needle } object - new instance\n */\n\n\nfunction _or(callback, data) {\n  return callback(new Needle(data), data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/_or.js?");

/***/ }),

/***/ "./src/methods/combinations/_orQuery.js":
/*!**********************************************!*\
  !*** ./src/methods/combinations/_orQuery.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Or Query\n ---------------------------------------- */\n\n/**\n * The orQuery will execute a list of queries\n * matching all inclusive queries. Meaning where\n * all values match unique values.\n *\n * @param { array } callback - array containing queries\n * @returns { Needle } object - new instance\n */\nfunction orQuery(callback) {\n  var filter = this._query(callback(this), 'unique');\n\n  return this._chain(filter.merge);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (orQuery);\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/_orQuery.js?");

/***/ }),

/***/ "./src/methods/combinations/_orWhere.js":
/*!**********************************************!*\
  !*** ./src/methods/combinations/_orWhere.js ***!
  \**********************************************/
/*! exports provided: orWhere, _orWhere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orWhere\", function() { return orWhere; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_orWhere\", function() { return _orWhere; });\n/** ----------------------------------------\n    Or Where\n ---------------------------------------- */\n\n/**\n * The orWhere will create a new trail function\n * that will be executed once the trail comes\n * to an end.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { Needle } object - new instance\n */\nfunction orWhere(key, type, value) {\n  !value && (value = type) && (type = '=');\n  value && value.length !== 0 && this._addTrail(true, 'orWhere', key, type, value);\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    Or Where Executable\n ---------------------------------------- */\n\n/**\n * The actual executable function that will\n * be resolved once the trail ends related\n * to the orWhere() method. The or will\n * resolve from previous data set.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { array } - results from operation\n */\n\n\nfunction _orWhere(key, type, value, data) {\n  return this._operator(key, type, value, false, data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/_orWhere.js?");

/***/ }),

/***/ "./src/methods/combinations/_query.js":
/*!********************************************!*\
  !*** ./src/methods/combinations/_query.js ***!
  \********************************************/
/*! exports provided: query, _query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return query; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_query\", function() { return _query; });\n/* harmony import */ var _util_doubles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_doubles */ \"./src/util/_doubles.js\");\n/* harmony import */ var _util_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_flatten */ \"./src/util/_flatten.js\");\n/* harmony import */ var _util_unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/_unique */ \"./src/util/_unique.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Query\n ---------------------------------------- */\n\n/**\n * The query method can be used to chain\n * and and or queries or make a custom iteration\n * with a little bit of help from Needle. The\n * function receives a callback and expects an\n * array to be returned. The function will store\n * a pre-filtered data set and set a new data set\n * that is available during the execution of the\n * or() and and() method.\n *\n * @param { function } callback - executable function\n * @returns { Needle } object - new instance\n */\n\nfunction query(callback) {\n  this._hasTrail();\n\n  this._trail['data'] = this._data;\n  var result = callback(this, this._data);\n  this._trail['prev'] = result;\n  return this._chain(Object(_util_unique__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(result));\n}\n/** ----------------------------------------\n    Query\n ---------------------------------------- */\n\n/**\n * The query method will be responsible for\n * running an array of inclusive or exclusive\n * queries set by the andQuery or orQuery method.\n * This query function will be used behind the\n * scenes and is not documented in the README.\n *\n * @param { array } array - callbacks\n * @param { string } type - flatten option\n * @returns { Needle } object - new instance\n */\n\n\nfunction _query(array, type) {\n  this._hasTrail();\n\n  var types = {\n    unique: _util_unique__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    doubles: _util_doubles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  };\n  var results = array.map(function (fn) {\n    return fn.data;\n  });\n  var merge = types[type](Object(_util_flatten__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(results));\n  return {\n    amount: array.length,\n    merge: merge\n  };\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/_query.js?");

/***/ }),

/***/ "./src/methods/combinations/_where.js":
/*!********************************************!*\
  !*** ./src/methods/combinations/_where.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Where\n ---------------------------------------- */\n\n/**\n * The where operator can execute a series\n * of commands, combining multiple criteria\n * that need to be matched.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @returns { Needle } object - new instance\n */\nfunction where(key, type, value) {\n  !value && (value = type) && (type = '=');\n\n  this._hasTrail();\n\n  this._trail['data'] = this._data;\n\n  var filter = value && value.length !== 0 && this._operator(key, type, value) || this._data;\n\n  this._trail['prev'] = filter;\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (where);\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/_where.js?");

/***/ }),

/***/ "./src/methods/combinations/base.js":
/*!******************************************!*\
  !*** ./src/methods/combinations/base.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _where__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_where */ \"./src/methods/combinations/_where.js\");\n/* harmony import */ var _andWhere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_andWhere */ \"./src/methods/combinations/_andWhere.js\");\n/* harmony import */ var _orWhere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_orWhere */ \"./src/methods/combinations/_orWhere.js\");\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_query */ \"./src/methods/combinations/_query.js\");\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_and */ \"./src/methods/combinations/_and.js\");\n/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_or */ \"./src/methods/combinations/_or.js\");\n/* harmony import */ var _andQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_andQuery */ \"./src/methods/combinations/_andQuery.js\");\n/* harmony import */ var _orQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_orQuery */ \"./src/methods/combinations/_orQuery.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  where: _where__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  andWhere: _andWhere__WEBPACK_IMPORTED_MODULE_1__[\"andWhere\"],\n  _andWhere: _andWhere__WEBPACK_IMPORTED_MODULE_1__[\"_andWhere\"],\n  orWhere: _orWhere__WEBPACK_IMPORTED_MODULE_2__[\"orWhere\"],\n  _orWhere: _orWhere__WEBPACK_IMPORTED_MODULE_2__[\"_orWhere\"],\n  query: _query__WEBPACK_IMPORTED_MODULE_3__[\"query\"],\n  _query: _query__WEBPACK_IMPORTED_MODULE_3__[\"_query\"],\n  and: _and__WEBPACK_IMPORTED_MODULE_4__[\"and\"],\n  _and: _and__WEBPACK_IMPORTED_MODULE_4__[\"_and\"],\n  or: _or__WEBPACK_IMPORTED_MODULE_5__[\"or\"],\n  _or: _or__WEBPACK_IMPORTED_MODULE_5__[\"_or\"],\n  orQuery: _orQuery__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  andQuery: _andQuery__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/combinations/base.js?");

/***/ }),

/***/ "./src/methods/crud/_create.js":
/*!*************************************!*\
  !*** ./src/methods/crud/_create.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Create\n ---------------------------------------- */\n\n/**\n * The create method will push a new object\n * to the data set. This can be useful if a user\n * is able to interact with a set off data.\n *\n * @param { object } obj - new object\n */\nfunction create(obj) {\n  this._hasTrail();\n\n  this._data.push(obj);\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create);\n\n//# sourceURL=webpack://Needle/./src/methods/crud/_create.js?");

/***/ }),

/***/ "./src/methods/crud/_read.js":
/*!***********************************!*\
  !*** ./src/methods/crud/_read.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Read\n ---------------------------------------- */\n\n/**\n * Retrieve a specific item from the data set.\n *\n * @returns { object } - item from data set\n */\nfunction read(index) {\n  this._hasTrail();\n\n  return this._chain([this._data[index]]);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (read);\n\n//# sourceURL=webpack://Needle/./src/methods/crud/_read.js?");

/***/ }),

/***/ "./src/methods/crud/_remove.js":
/*!*************************************!*\
  !*** ./src/methods/crud/_remove.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Remove\n ---------------------------------------- */\n\n/**\n * Delete a single item from the current\n * data set. Will take the index number\n * of the item to be removed.\n *\n * @params { number } index - index of item\n */\nfunction remove(index) {\n  this._hasTrail();\n\n  this._data.splice(index, 1);\n\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (remove);\n\n//# sourceURL=webpack://Needle/./src/methods/crud/_remove.js?");

/***/ }),

/***/ "./src/methods/crud/_removeAll.js":
/*!****************************************!*\
  !*** ./src/methods/crud/_removeAll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Remove All\n ---------------------------------------- */\n\n/**\n * The deleteAll method will clear\n * the current data set.\n */\nfunction removeAll(key) {\n  this._hasTrail();\n\n  this._data.forEach(function (item) {\n    return delete item[key];\n  });\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeAll);\n\n//# sourceURL=webpack://Needle/./src/methods/crud/_removeAll.js?");

/***/ }),

/***/ "./src/methods/crud/_removeValue.js":
/*!******************************************!*\
  !*** ./src/methods/crud/_removeValue.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Remove Value\n ---------------------------------------- */\n\n/**\n * With the deleteValue method a single\n * key can be removed from a given item\n * within the current data set.\n *\n * @params { number } index - index of item\n * @params { string } key - key to be removed from item\n */\nfunction removeValue(index, key) {\n  this._hasTrail();\n\n  delete this._data[index][key];\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeValue);\n\n//# sourceURL=webpack://Needle/./src/methods/crud/_removeValue.js?");

/***/ }),

/***/ "./src/methods/crud/_update.js":
/*!*************************************!*\
  !*** ./src/methods/crud/_update.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Update\n ---------------------------------------- */\n\n/**\n * The update method will basically replace\n * an excising item within the data set.\n *\n * @params { number } index - index of item\n * @params { object } obj - new item\n */\nfunction update(index, obj) {\n  this._hasTrail();\n\n  this._data[index] = obj;\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (update);\n\n//# sourceURL=webpack://Needle/./src/methods/crud/_update.js?");

/***/ }),

/***/ "./src/methods/crud/_updateAll.js":
/*!****************************************!*\
  !*** ./src/methods/crud/_updateAll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Update All\n ---------------------------------------- */\n\n/**\n * Will update every key within the current\n * data set to a given value.\n *\n * @params { string } key - target key\n * @params { any } value - new value for key\n */\nfunction updateAll(key, value) {\n  this._hasTrail();\n\n  this._data.forEach(function (item) {\n    return item[key] = value;\n  });\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateAll);\n\n//# sourceURL=webpack://Needle/./src/methods/crud/_updateAll.js?");

/***/ }),

/***/ "./src/methods/crud/_updateValue.js":
/*!******************************************!*\
  !*** ./src/methods/crud/_updateValue.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Update Value\n ---------------------------------------- */\n\n/**\n * Will update a single item key within the\n * current data set to a given value.\n *\n * @params { number } index - index of item\n * @params { string } key - target key\n * @params { any } value - new value for key\n */\nfunction updateValue(index, key, value) {\n  this._hasTrail();\n\n  this._data[index][key] = value;\n\n  this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateValue);\n\n//# sourceURL=webpack://Needle/./src/methods/crud/_updateValue.js?");

/***/ }),

/***/ "./src/methods/crud/base.js":
/*!**********************************!*\
  !*** ./src/methods/crud/base.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_create */ \"./src/methods/crud/_create.js\");\n/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_read */ \"./src/methods/crud/_read.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_remove */ \"./src/methods/crud/_remove.js\");\n/* harmony import */ var _removeValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_removeValue */ \"./src/methods/crud/_removeValue.js\");\n/* harmony import */ var _removeAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_removeAll */ \"./src/methods/crud/_removeAll.js\");\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_update */ \"./src/methods/crud/_update.js\");\n/* harmony import */ var _updateValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_updateValue */ \"./src/methods/crud/_updateValue.js\");\n/* harmony import */ var _updateAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_updateAll */ \"./src/methods/crud/_updateAll.js\");\n/** ----------------------------------------\n Utilities\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create: _create__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  read: _read__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  remove: _remove__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  removeValue: _removeValue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  removeAll: _removeAll__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  update: _update__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  updateValue: _updateValue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  updateAll: _updateAll__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/crud/base.js?");

/***/ }),

/***/ "./src/methods/custom/_customEach.js":
/*!*******************************************!*\
  !*** ./src/methods/custom/_customEach.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Custom Each\n ---------------------------------------- */\n\n/**\n * The custom each method makes it easy to\n * hook into Needle with a custom function.\n *\n * @param { function } callback - executable\n * @param { array } data - array of data, default is constructed\n * @returns { Needle } object - new instance\n */\nfunction customEach(callback) {\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._data;\n\n  this._hasTrail();\n\n  var customMap = data.map(callback);\n  return this._chain(customMap);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (customEach);\n\n//# sourceURL=webpack://Needle/./src/methods/custom/_customEach.js?");

/***/ }),

/***/ "./src/methods/custom/_customFilter.js":
/*!*********************************************!*\
  !*** ./src/methods/custom/_customFilter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Custom Filter\n ---------------------------------------- */\n\n/**\n * The custom filter method makes it easy to\n * hook into Needle with a custom function.\n * Has to return true for items kept within\n * the data set.\n *\n * @param { function } callback - executable\n * @param { array } data - array of data, default is constructed\n * @returns { Needle } object - new instance\n */\nfunction customFilter(callback) {\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._data;\n\n  this._hasTrail();\n\n  var customFilter = data.filter(callback);\n  return this._chain(customFilter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (customFilter);\n\n//# sourceURL=webpack://Needle/./src/methods/custom/_customFilter.js?");

/***/ }),

/***/ "./src/methods/custom/base.js":
/*!************************************!*\
  !*** ./src/methods/custom/base.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _customEach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_customEach */ \"./src/methods/custom/_customEach.js\");\n/* harmony import */ var _customFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_customFilter */ \"./src/methods/custom/_customFilter.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  customEach: _customEach__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  customFilter: _customFilter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/custom/base.js?");

/***/ }),

/***/ "./src/methods/dates/_after.js":
/*!*************************************!*\
  !*** ./src/methods/dates/_after.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    After\n ---------------------------------------- */\n\n/**\n * Basically the same as the bigger method\n * but will convert the value into a unix\n * timestamp and compare given value within\n * the data object.\n *\n * @param { string } key - selected key\n * @param { string } value - matching value\n * @returns { Needle } object - new instance\n */\nfunction after(key, value) {\n  return this.bigger(key, value, true);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (after);\n\n//# sourceURL=webpack://Needle/./src/methods/dates/_after.js?");

/***/ }),

/***/ "./src/methods/dates/_before.js":
/*!**************************************!*\
  !*** ./src/methods/dates/_before.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Before\n ---------------------------------------- */\n\n/**\n * Basically the same as the smaller method\n * but will convert the value into a unix\n * timestamp and compare given value within\n * the data object.\n *\n * @param { string } key - selected key\n * @param { string } value - matching value\n * @returns { Needle } object - new instance\n */\nfunction before(key, value) {\n  return this.smaller(key, value, true);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (before);\n\n//# sourceURL=webpack://Needle/./src/methods/dates/_before.js?");

/***/ }),

/***/ "./src/methods/dates/_month.js":
/*!*************************************!*\
  !*** ./src/methods/dates/_month.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_convertDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_convertDate */ \"./src/util/_convertDate.js\");\n/* harmony import */ var _util_dateOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_dateOptions */ \"./src/util/_dateOptions.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Month\n ---------------------------------------- */\n\n/**\n * Shorthand for working with months, this\n * method accepts the name of the month and\n * year to select a period of dates.\n *\n * @param { string } key - selected key\n * @param { string } month - selected month\n * @param { number } year - selected year\n * @returns { Needle } object - new instance\n */\n\nfunction month(key, month, year) {\n  var getMonths = Object(_util_dateOptions__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  var findDate = this._find('month', month, getMonths)[0];\n\n  var startDate = Object(_util_convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, \"\".concat(findDate.month, \"/1/\").concat(year));\n  var endDate = Object(_util_convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, \"\".concat(findDate.month, \"/\").concat(findDate.days, \"/\").concat(year));\n  return this.between(key, [startDate, endDate], true);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (month);\n\n//# sourceURL=webpack://Needle/./src/methods/dates/_month.js?");

/***/ }),

/***/ "./src/methods/dates/_namedDates.js":
/*!******************************************!*\
  !*** ./src/methods/dates/_namedDates.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_periodOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_periodOptions */ \"./src/util/_periodOptions.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Named Dates\n ---------------------------------------- */\n\n/**\n * Shorthand for working with years, this\n * method accepts the year where the selection\n * needs to take place.\n *\n * @param { string } selector - selected type\n * @returns { object } - match for date options\n */\n\nfunction _namedDates(selector) {\n  var getPeriod = Object(_util_periodOptions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  return this._find('name', selector, getPeriod)[0];\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_namedDates);\n\n//# sourceURL=webpack://Needle/./src/methods/dates/_namedDates.js?");

/***/ }),

/***/ "./src/methods/dates/_period.js":
/*!**************************************!*\
  !*** ./src/methods/dates/_period.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Period\n ---------------------------------------- */\n\n/**\n * Basically the same as the between method\n * but will convert the values into a unix\n * timestamp and compare given values within\n * a range of the data object.\n *\n * @param { string } key - selected key\n * @param { array } values - matching values max 2\n * @returns { Needle } object - new instance\n */\nfunction period(key, values) {\n  return this.between(key, values, true);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (period);\n\n//# sourceURL=webpack://Needle/./src/methods/dates/_period.js?");

/***/ }),

/***/ "./src/methods/dates/_previous.js":
/*!****************************************!*\
  !*** ./src/methods/dates/_previous.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_convertDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_convertDate */ \"./src/util/_convertDate.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Previous\n ---------------------------------------- */\n\n/**\n * Take last amount of \"years\", \"months\", \"days\" etc.\n * Needs a key (holding a date value) an amount\n * and the type of selector for instance \"months\".\n *\n * @param { string } selector - selected type\n * @returns { object } - match for date options\n */\n\nfunction previous(key, amount, selector) {\n  var getPeriod = this._namedDates(selector);\n\n  var convertedDate = Object(_util_convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getPeriod.amount * amount);\n  return this.between(key, [convertedDate, new Date()], true);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (previous);\n\n//# sourceURL=webpack://Needle/./src/methods/dates/_previous.js?");

/***/ }),

/***/ "./src/methods/dates/_upcoming.js":
/*!****************************************!*\
  !*** ./src/methods/dates/_upcoming.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_convertDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_convertDate */ \"./src/util/_convertDate.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Upcoming\n ---------------------------------------- */\n\n/**\n * Take next amount of \"years\", \"months\", \"days\" etc.\n * Needs a key (holding a date value) an amount\n * and the type of selector for instance \"months\".\n *\n * @param { string } selector - selected type\n * @returns { object } - match for date options\n */\n\nfunction upcoming(key, amount, selector) {\n  var match = this._namedDates(selector);\n\n  var convertedDate = Object(_util_convertDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(match.amount * amount, new Date(), 'future');\n  return this.between(key, [new Date(), convertedDate], true);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (upcoming);\n\n//# sourceURL=webpack://Needle/./src/methods/dates/_upcoming.js?");

/***/ }),

/***/ "./src/methods/dates/_year.js":
/*!************************************!*\
  !*** ./src/methods/dates/_year.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Year\n ---------------------------------------- */\n\n/**\n * Shorthand for working with years, this\n * method accepts the year where the selection\n * needs to take place.\n *\n * @param { string } key - selected key\n * @param { number } year - selected year\n * @returns { Needle } object - new instance\n */\nfunction year(key, year) {\n  return this.between(key, [\"1/1/\".concat(year), \"12/31/\".concat(year)], true);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (year);\n\n//# sourceURL=webpack://Needle/./src/methods/dates/_year.js?");

/***/ }),

/***/ "./src/methods/dates/base.js":
/*!***********************************!*\
  !*** ./src/methods/dates/base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _after__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_after */ \"./src/methods/dates/_after.js\");\n/* harmony import */ var _before__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_before */ \"./src/methods/dates/_before.js\");\n/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_month */ \"./src/methods/dates/_month.js\");\n/* harmony import */ var _namedDates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_namedDates */ \"./src/methods/dates/_namedDates.js\");\n/* harmony import */ var _period__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_period */ \"./src/methods/dates/_period.js\");\n/* harmony import */ var _previous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_previous */ \"./src/methods/dates/_previous.js\");\n/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_upcoming */ \"./src/methods/dates/_upcoming.js\");\n/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_year */ \"./src/methods/dates/_year.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  after: _after__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  before: _before__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  month: _month__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  _namedDates: _namedDates__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  period: _period__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  previous: _previous__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  upcoming: _upcoming__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  year: _year__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/dates/base.js?");

/***/ }),

/***/ "./src/methods/debugging/_log.js":
/*!***************************************!*\
  !*** ./src/methods/debugging/_log.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n Logging\n ---------------------------------------- */\n\n/**\n * The log method is used for testing and\n * debugging. It will log the latest state\n * of the data array to the console. It can\n * be limited to a given number of items.\n *\n * @param { number } number - amount of items\n * @yields { array } - will console log array of items\n */\nfunction log(number) {\n  this._hasTrail();\n\n  console.log(number && this.take(number) || this._data);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (log);\n\n//# sourceURL=webpack://Needle/./src/methods/debugging/_log.js?");

/***/ }),

/***/ "./src/methods/debugging/_print.js":
/*!*****************************************!*\
  !*** ./src/methods/debugging/_print.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Printing\n ---------------------------------------- */\n\n/**\n * The print method is used for testing and\n * debugging. It will print the items of the\n * data array into the DOM, making results\n * visible, it will look for a element with\n * the id \"#result\" by default, and element\n * can also be provided as an argument, if both\n * are unable to match, the function will execute\n * on the body.\n *\n * @param { string } el - CSS selector for DOM element\n * @yields { string } print string to DOM\n */\nfunction print(el) {\n  this._hasTrail();\n\n  var result = document.querySelector('#result' || false) || document.body;\n  result.textContent = [this._data].map(function (item) {\n    return JSON.stringify(item);\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (print);\n\n//# sourceURL=webpack://Needle/./src/methods/debugging/_print.js?");

/***/ }),

/***/ "./src/methods/debugging/_random.js":
/*!******************************************!*\
  !*** ./src/methods/debugging/_random.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Random\n ---------------------------------------- */\n\n/**\n * With the random method a random amount\n * of items can be returned from the latest\n * data state. This makes it easy to quickly\n * test multiple sets of data.\n *\n * @param { number } number - amount of items\n * @returns { Needle } object - new instance\n */\nfunction random() {\n  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n  this._hasTrail();\n\n  var array = [];\n\n  while (array.length !== number || array.length === this._data.length) {\n    var _random = Math.floor(Math.random() * (1 + this._data.length - 1));\n\n    array.indexOf(this._data[_random]) === -1 && array.push(this._data[_random]);\n  }\n\n  return this._chain(array);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (random);\n\n//# sourceURL=webpack://Needle/./src/methods/debugging/_random.js?");

/***/ }),

/***/ "./src/methods/debugging/base.js":
/*!***************************************!*\
  !*** ./src/methods/debugging/base.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_log */ \"./src/methods/debugging/_log.js\");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_print */ \"./src/methods/debugging/_print.js\");\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_random */ \"./src/methods/debugging/_random.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  log: _log__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  print: _print__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  random: _random__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/debugging/base.js?");

/***/ }),

/***/ "./src/methods/helpers/_chain.js":
/*!***************************************!*\
  !*** ./src/methods/helpers/_chain.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Chain\n ---------------------------------------- */\n\n/**\n * The chain method returns a new instance\n * of the Needle class.\n *\n * @param { array } data - new array of manipulated data\n * @returns { Needle } object - new instance\n */\nfunction _chain(data) {\n  return new Needle(data, this._trail);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_chain);\n\n//# sourceURL=webpack://Needle/./src/methods/helpers/_chain.js?");

/***/ }),

/***/ "./src/methods/helpers/_find.js":
/*!**************************************!*\
  !*** ./src/methods/helpers/_find.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_compareInArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_compareInArray */ \"./src/util/_compareInArray.js\");\n/* harmony import */ var _util_isSingleArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_isSingleArray */ \"./src/util/_isSingleArray.js\");\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/_isArray */ \"./src/util/_isArray.js\");\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Find\n ---------------------------------------- */\n\n/**\n * Simple helper that will filter through an array\n * of data, by default this will be the data as\n * stored within the constructor. Give it a key\n * and value to find matching pairs.\n *\n * @param { string } key - selected key\n * @param { string | bool | array | number } value - matching value\n * @param { array } data - array of objects\n * @returns { array } new array of filtered items\n */\n\nfunction _find(key, value) {\n  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._data;\n  value = Object(_util_isSingleArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value);\n  var valueType = Object(_util_isType__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value);\n\n  var arrayValue = function arrayValue(item) {\n    return value.includes(item[key]);\n  };\n\n  var arrayData = function arrayData(item) {\n    return item[key].some(function (index) {\n      return value.includes(index);\n    });\n  };\n\n  var singleValue = function singleValue(item) {\n    return item[key] && Object(_util_compareInArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, key, value);\n  };\n\n  var fnType = {\n    'array': function array() {\n      return data.filter(function (item) {\n        return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item[key]) ? arrayData(item) : arrayValue(item);\n      });\n    },\n    'boolean': function boolean() {\n      return data.filter(function (item) {\n        return item[key];\n      });\n    },\n    'string': function string() {\n      return data.filter(singleValue);\n    },\n    'number': function number() {\n      return data.filter(singleValue);\n    }\n  };\n  return fnType[valueType]();\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_find);\n\n//# sourceURL=webpack://Needle/./src/methods/helpers/_find.js?");

/***/ }),

/***/ "./src/methods/helpers/_operator.js":
/*!******************************************!*\
  !*** ./src/methods/helpers/_operator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_evaluate */ \"./src/util/_evaluate.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Operator Helper\n ---------------------------------------- */\n\n/**\n * The operator helper can handle multiple\n * operation based on given arguments. The type\n * will determine the type operation executed.\n *\n * @param { string } key - selected key\n * @param { string } type - operator type\n * @param { string | number } value - matching value\n * @param { bool } date - will parse values to date\n * @returns { array } - filtered data\n */\n\nfunction _operator(key, type, value) {\n  var date = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this._data;\n  return data.filter(function (item) {\n    return Object(_util_evaluate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item[key], type, value, date);\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_operator);\n\n//# sourceURL=webpack://Needle/./src/methods/helpers/_operator.js?");

/***/ }),

/***/ "./src/methods/helpers/base.js":
/*!*************************************!*\
  !*** ./src/methods/helpers/base.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_chain */ \"./src/methods/helpers/_chain.js\");\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_find */ \"./src/methods/helpers/_find.js\");\n/* harmony import */ var _operator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_operator */ \"./src/methods/helpers/_operator.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _chain: _chain__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _find: _find__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _operator: _operator__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/helpers/base.js?");

/***/ }),

/***/ "./src/methods/matches/_find.js":
/*!**************************************!*\
  !*** ./src/methods/matches/_find.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Find\n ---------------------------------------- */\n\n/**\n * The find method will return a specific\n * key value pair within the object, the\n * find method only look for the first\n * layer of keys present in the item.\n *\n * @param { string } key - selected key\n * @param { string | bool | array | number } value - matching value\n * @returns { Needle } object - new instance\n */\nfunction find(key, value) {\n  this._hasTrail();\n\n  var filter = !value ? this._data : this._find(key, value);\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (find);\n\n//# sourceURL=webpack://Needle/./src/methods/matches/_find.js?");

/***/ }),

/***/ "./src/methods/matches/_findDeep.js":
/*!******************************************!*\
  !*** ./src/methods/matches/_findDeep.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_deep */ \"./src/util/_deep.js\");\n/** ----------------------------------------\n    Utilties\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Find Deep\n ---------------------------------------- */\n\n/**\n * The findDeep method will return a specific\n * key value pair within the object, the\n * findDeep method will also look for any\n * nested object inside the item.\n *\n * @param { string } key - selected key\n * @param { string | bool | array | number } value - matching value\n * @returns { Needle } object - new instance\n */\n\nfunction findDeep(key, value) {\n  var _this = this;\n\n  this._hasTrail();\n\n  var array = [];\n\n  var finder = function finder(key, value) {\n    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this._data;\n    var prev = arguments.length > 3 ? arguments[3] : undefined;\n    data.forEach(function (item) {\n      var obj = prev || item;\n      var layer = Object(_util_deep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key, item);\n      if (obj === item) _this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);\n      (layer.length === 0 || Object.keys(item).includes(key)) && _this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);\n      layer.length && finder(key, value, layer.map(function (key) {\n        return item[key];\n      }), obj);\n    });\n  };\n\n  finder(key, value);\n  return this._chain(array);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (findDeep);\n\n//# sourceURL=webpack://Needle/./src/methods/matches/_findDeep.js?");

/***/ }),

/***/ "./src/methods/matches/_has.js":
/*!*************************************!*\
  !*** ./src/methods/matches/_has.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Has\n ---------------------------------------- */\n\n/**\n * The has method will look if a given key\n * is present within the object, will only\n * look for the first layer of keys.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\nfunction has(key) {\n  this._hasTrail();\n\n  var filter = this._data.filter(function (item) {\n    return item.hasOwnProperty(key);\n  });\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (has);\n\n//# sourceURL=webpack://Needle/./src/methods/matches/_has.js?");

/***/ }),

/***/ "./src/methods/matches/_hasDeep.js":
/*!*****************************************!*\
  !*** ./src/methods/matches/_hasDeep.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_deep */ \"./src/util/_deep.js\");\n/** ----------------------------------------\n    Utilties\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Has Deep\n ---------------------------------------- */\n\n/**\n * The hasDeep method will look if a given key\n * is present within the object and loop through\n * available nested objects within the given item.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\nfunction hasDeep(key) {\n  var _this = this;\n\n  this._hasTrail();\n\n  var array = [];\n\n  var finder = function finder(key) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this._data;\n    var prev = arguments.length > 2 ? arguments[2] : undefined;\n    data.forEach(function (item) {\n      var obj = prev || item;\n      var layer = Object(_util_deep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key, item);\n      item.hasOwnProperty(key) && array.push(obj);\n      layer.length && finder(key, layer.map(function (key) {\n        return item[key];\n      }), obj);\n    });\n  };\n\n  finder(key);\n  return this._chain(array);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hasDeep);\n\n//# sourceURL=webpack://Needle/./src/methods/matches/_hasDeep.js?");

/***/ }),

/***/ "./src/methods/matches/_is.js":
/*!************************************!*\
  !*** ./src/methods/matches/_is.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Is\n ---------------------------------------- */\n\n/**\n * Check for a boolean value of a specific\n * key as passed as an argument. Will only\n * look for first layer of keys.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\nfunction is(key) {\n  this._hasTrail();\n\n  var filter = this._data.filter(function (item) {\n    return item[key];\n  });\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (is);\n\n//# sourceURL=webpack://Needle/./src/methods/matches/_is.js?");

/***/ }),

/***/ "./src/methods/matches/_not.js":
/*!*************************************!*\
  !*** ./src/methods/matches/_not.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Not\n ---------------------------------------- */\n\n/**\n * Check for a false boolean value of a specific\n * key as passed as an argument. Will only\n * look for first layer of keys.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\nfunction not(key) {\n  this._hasTrail();\n\n  var filter = this._data.filter(function (item) {\n    return !item[key];\n  });\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (not);\n\n//# sourceURL=webpack://Needle/./src/methods/matches/_not.js?");

/***/ }),

/***/ "./src/methods/matches/base.js":
/*!*************************************!*\
  !*** ./src/methods/matches/base.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_find */ \"./src/methods/matches/_find.js\");\n/* harmony import */ var _findDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_findDeep */ \"./src/methods/matches/_findDeep.js\");\n/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has */ \"./src/methods/matches/_has.js\");\n/* harmony import */ var _hasDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hasDeep */ \"./src/methods/matches/_hasDeep.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_is */ \"./src/methods/matches/_is.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_not */ \"./src/methods/matches/_not.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  find: _find__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  findDeep: _findDeep__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  has: _has__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  hasDeep: _hasDeep__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  is: _is__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  not: _not__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/matches/base.js?");

/***/ }),

/***/ "./src/methods/numbers/_average.js":
/*!*****************************************!*\
  !*** ./src/methods/numbers/_average.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Average\n ---------------------------------------- */\n\n/**\n * Will retrieve the average value from a\n * given key and match all items that contain\n * given value. If value isn't present as an\n * actual value it will look for the closest\n * value from the given key.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\nfunction average(key) {\n  this._hasTrail();\n\n  var goal = this._data.reduce(function (total, item) {\n    return total += item[key];\n  }, 0) / this._data.length;\n\n  var calc = function calc(current, previous) {\n    return Math.abs(current[key] - goal) < Math.abs(previous[key] - goal) ? current : previous;\n  };\n\n  var value = this._data.reduce(calc);\n\n  return this.find(key, value[key]);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (average);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_average.js?");

/***/ }),

/***/ "./src/methods/numbers/_between.js":
/*!*****************************************!*\
  !*** ./src/methods/numbers/_between.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_evaluate */ \"./src/util/_evaluate.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Between\n ---------------------------------------- */\n\n/**\n * The between method returns an array of\n * items that are in between two given\n * values.\n *\n * @param { string } key - selected key\n * @param { array } values - matching values max 2\n * @param { bool } date - will parse values to date\n * @returns { Needle } object - new instance\n */\n\nfunction between(key, values) {\n  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  this._hasTrail();\n\n  var filter = this._data.filter(function (item) {\n    return Object(_util_evaluate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item[key], '>=', values[0], date) && Object(_util_evaluate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item[key], '<=', values[1], date);\n  });\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (between);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_between.js?");

/***/ }),

/***/ "./src/methods/numbers/_bigger.js":
/*!****************************************!*\
  !*** ./src/methods/numbers/_bigger.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Bigger\n ---------------------------------------- */\n\n/**\n * The bigger method will compare each item\n * to a given value and return the items\n * that match the given criteria.\n *\n * @param { string } key - selected key\n * @param { string | number } value - matching value\n * @param { bool } date - will parse values to date\n * @returns { Needle } object - new instance\n */\nfunction bigger(key, value) {\n  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  this._hasTrail();\n\n  var filter = !value ? this._data : this._operator(key, '>=', value, date);\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bigger);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_bigger.js?");

/***/ }),

/***/ "./src/methods/numbers/_max.js":
/*!*************************************!*\
  !*** ./src/methods/numbers/_max.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_extreme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_extreme */ \"./src/util/_extreme.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n     Maximum\n ---------------------------------------- */\n\n/**\n * The max method will map the data array\n * and retrieve maximum of a given key.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\nfunction max(key) {\n  this._hasTrail();\n\n  var max = Object(_util_extreme__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this._data, key, 'max');\n  return this.find(key, max);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (max);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_max.js?");

/***/ }),

/***/ "./src/methods/numbers/_min.js":
/*!*************************************!*\
  !*** ./src/methods/numbers/_min.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_extreme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_extreme */ \"./src/util/_extreme.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n     Minimum\n ---------------------------------------- */\n\n/**\n * The min method will map the data array\n * and retrieve minimum of a given key.\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\n\nfunction min(key) {\n  this._hasTrail();\n\n  var min = Object(_util_extreme__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this._data, key, 'min');\n  return this.find(key, min);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (min);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_min.js?");

/***/ }),

/***/ "./src/methods/numbers/_negative.js":
/*!******************************************!*\
  !*** ./src/methods/numbers/_negative.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Netagtive\n ---------------------------------------- */\n\n/**\n * Return all negative values from an array\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\nfunction negative(key) {\n  this._hasTrail();\n\n  var filter = this._operator(key, '<', 0);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (negative);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_negative.js?");

/***/ }),

/***/ "./src/methods/numbers/_positive.js":
/*!******************************************!*\
  !*** ./src/methods/numbers/_positive.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Positive\n ---------------------------------------- */\n\n/**\n * Return all positive values from an array\n *\n * @param { string } key - selected key\n * @returns { Needle } object - new instance\n */\nfunction positive(key) {\n  this._hasTrail();\n\n  var filter = this._operator(key, '>=', 0);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (positive);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_positive.js?");

/***/ }),

/***/ "./src/methods/numbers/_smaller.js":
/*!*****************************************!*\
  !*** ./src/methods/numbers/_smaller.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Smaller\n ---------------------------------------- */\n\n/**\n * The smaller method will compare each item\n * to a given value and return the items\n * that match the given criteria.\n *\n * @param { string } key - selected key\n * @param { string | number } value - matching value\n * @param { bool } date - will parse values to date\n * @returns { Needle } object - new instance\n */\nfunction smaller(key, value) {\n  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  this._hasTrail();\n\n  var filter = this._operator(key, '<=', value, date);\n\n  return this._chain(filter);\n}\n/** ----------------------------------------\n     Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (smaller);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_smaller.js?");

/***/ }),

/***/ "./src/methods/numbers/_sum.js":
/*!*************************************!*\
  !*** ./src/methods/numbers/_sum.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n     Sum\n ---------------------------------------- */\n\n/**\n * The sum method will retrieve the sum of\n * a given key, meaning sum every value of\n * the given key present within the data array.\n *\n * @param { string } key - selected key\n * @returns { number } amount of sum of given key\n */\nfunction sum(key) {\n  this._hasTrail();\n\n  this._calc = this._data.reduce(function (total, item) {\n    return total + item[key];\n  }, 0);\n  return this._calc;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sum);\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/_sum.js?");

/***/ }),

/***/ "./src/methods/numbers/base.js":
/*!*************************************!*\
  !*** ./src/methods/numbers/base.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _average__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_average */ \"./src/methods/numbers/_average.js\");\n/* harmony import */ var _smaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_smaller */ \"./src/methods/numbers/_smaller.js\");\n/* harmony import */ var _bigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_bigger */ \"./src/methods/numbers/_bigger.js\");\n/* harmony import */ var _between__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_between */ \"./src/methods/numbers/_between.js\");\n/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_min */ \"./src/methods/numbers/_min.js\");\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_max */ \"./src/methods/numbers/_max.js\");\n/* harmony import */ var _positive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_positive */ \"./src/methods/numbers/_positive.js\");\n/* harmony import */ var _negative__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_negative */ \"./src/methods/numbers/_negative.js\");\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_sum */ \"./src/methods/numbers/_sum.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  average: _average__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  smaller: _smaller__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  bigger: _bigger__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  between: _between__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  min: _min__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  max: _max__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  positive: _positive__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  negative: _negative__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  sum: _sum__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/numbers/base.js?");

/***/ }),

/***/ "./src/methods/retrieve/_chunk.js":
/*!****************************************!*\
  !*** ./src/methods/retrieve/_chunk.js ***!
  \****************************************/
/*! exports provided: chunk, _prevChunk, _nextChunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_prevChunk\", function() { return _prevChunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_nextChunk\", function() { return _nextChunk; });\n/** ----------------------------------------\n    Chunk\n ---------------------------------------- */\n\n/**\n * The chunk method will return chunks of data\n * based on a given amount per chunk. Meaning,\n * the data will be defined into separate sections\n * based on the amount declared as a parameter.\n *\n * @param { number } number - selected amount of items\n * @returns { object } - will return an object with chunk data\n */\nfunction chunk(amount) {\n  var _this = this;\n\n  this._hasTrail();\n\n  this._chunks['data'] = [];\n  this._chunks['current'] = 0;\n\n  for (var i = 0; i < this._data.length; i += amount) {\n    this._chunks.data.push(this._data.slice(i, i + amount));\n  }\n\n  var chunked = {\n    chunks: this._chunks.data,\n    current: this._chunks.selected,\n    amount: this._chunks.data.length,\n    size: amount,\n    prev: function prev() {\n      return _this._prevChunk();\n    },\n    next: function next() {\n      return _this._nextChunk();\n    }\n  };\n\n  chunked['start'] = function (callback) {\n    _this.template(callback, _this._chunks.data[0]);\n\n    return chunked;\n  };\n\n  return chunked;\n}\n/** ----------------------------------------\n    Previous Chunk\n ---------------------------------------- */\n\n/**\n * This method will handle returning the previous\n * chunk based on the current count.\n *\n * @returns { array } - will return previous chunk\n */\n\n\nfunction _prevChunk() {\n  var c = this._chunks;\n  c.current += c.current === 0 ? c.data.length - 1 : -1;\n  return this._chain(c.data[c.current]);\n}\n/** ----------------------------------------\n    Next Chunk\n ---------------------------------------- */\n\n/**\n * This method will handle returning the next\n * chunk based on the current count.\n *\n * @returns { array } - will return next chunk\n */\n\n\nfunction _nextChunk() {\n  var c = this._chunks;\n  c.current += c.current < c.data.length - 1 ? 1 : -Math.abs(c.data.length - 1);\n  return this._chain(c.data[c.current]);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_chunk.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_objPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_objPath */ \"./src/util/_objPath.js\");\n/* harmony import */ var _util_objReduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_objReduce */ \"./src/util/_objReduce.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Select\n ---------------------------------------- */\n\n/**\n * The selected method will convert the items\n * from the data array into a new array of items\n * limiting the keys as based on a given amount\n * of selectors. Can hold multiple strings.\n *\n * @param { array } keys - selected keys to be retrieved\n * @returns { Needle } object - new instance\n */\n\nfunction select() {\n  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {\n    keys[_key] = arguments[_key];\n  }\n\n  this._hasTrail();\n\n  var select = this._data.map(function (item) {\n    var obj = {};\n    keys.forEach(function (key) {\n      var deep = key.indexOf('.') !== -1 && Object(_util_objPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key);\n      if (item[key] || item[deep[0]]) deep ? obj[deep.slice(-1)[0]] = Object(_util_objReduce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(deep, item) : obj[key] = item[key];\n    });\n    return obj;\n  });\n\n  return this._chain(select);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (select);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_select.js?");

/***/ }),

/***/ "./src/methods/retrieve/_take.js":
/*!***************************************!*\
  !*** ./src/methods/retrieve/_take.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Take\n ---------------------------------------- */\n\n/**\n * The take method will resolve a selected\n * amount of items from the data array and\n * return all by default, if more items are\n * required it will limit itself to the\n * total amount of items present.\n *\n * @param { number } amount - selected amount of items\n * @param { bool } info - will return info about the query if true\n * @returns { array } - array of (manipulated) data\n */\n\nfunction take() {\n  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._data.length;\n  var info = arguments.length > 1 ? arguments[1] : undefined;\n\n  this._hasTrail();\n\n  if (Object(_util_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(amount) === 'string' && amount === 'all') amount = this._data.length;\n\n  var select = this._data.slice(0, amount);\n\n  var all = !amount || amount >= this._data.length;\n  var result = all && this._data || select;\n  this.info = result.length;\n  return info && {\n    results: result,\n    info: this.info\n  } || result || [];\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (take);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_take.js?");

/***/ }),

/***/ "./src/methods/retrieve/_values.js":
/*!*****************************************!*\
  !*** ./src/methods/retrieve/_values.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_deep */ \"./src/util/_deep.js\");\n/* harmony import */ var _util_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_flatten */ \"./src/util/_flatten.js\");\n/* harmony import */ var _util_unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/_unique */ \"./src/util/_unique.js\");\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Values\n ---------------------------------------- */\n\n/**\n * The values method will retrieve an array of values\n * matching a key available in the item. This function\n * will not chain at is an end of the road utility.\n *\n * @param { string } key - selected key to be retrieved\n * @returns { object } - will return an array with values\n */\n\nfunction values(key) {\n  var _this = this;\n\n  this._hasTrail();\n\n  var array = [];\n\n  var finder = function finder(key) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this._data;\n    var prev = arguments.length > 2 ? arguments[2] : undefined;\n    data.forEach(function (item) {\n      var obj = prev || item;\n      var layer = Object(_util_deep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key, item);\n      item.hasOwnProperty(key) && array.push(item[key]);\n      layer.length && finder(key, layer.map(function (key) {\n        return item[key];\n      }), obj);\n    });\n  };\n\n  finder(key);\n  return Object(_util_unique__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_util_flatten__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array));\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (values);\n\n//# sourceURL=webpack://Needle/./src/methods/retrieve/_values.js?");

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

/***/ "./src/methods/sorting/_sort.js":
/*!**************************************!*\
  !*** ./src/methods/sorting/_sort.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_arrange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_arrange */ \"./src/util/_arrange.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Sort\n ---------------------------------------- */\n\n/**\n * The sort method will sort the items within\n * the data array based on asc or desc order.\n * This can be specified as a second argument\n * and will use a default of asc.\n *\n * @param { number } key - selected key\n * @param { string } type - either \"asc\" or \"desc\"\n * @returns { Needle } object - new instance\n */\n\nfunction sort(key) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';\n\n  this._hasTrail();\n\n  var sort = Object(_util_arrange__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this._data, key, type);\n  return this._chain(sort);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sort);\n\n//# sourceURL=webpack://Needle/./src/methods/sorting/_sort.js?");

/***/ }),

/***/ "./src/methods/sorting/base.js":
/*!*************************************!*\
  !*** ./src/methods/sorting/base.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_sort */ \"./src/methods/sorting/_sort.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  sort: _sort__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/sorting/base.js?");

/***/ }),

/***/ "./src/methods/store/_retrieve.js":
/*!****************************************!*\
  !*** ./src/methods/store/_retrieve.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Retrieve\n ---------------------------------------- */\n\n/**\n * The retrieve method will return a\n * saved data set from the store by a given\n * name or identifier.\n *\n * @param { string } name - name of data set\n * @returns { object } - will return item from store\n */\nfunction retrieve(name, store) {\n  return this._find('name', name, store);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (retrieve);\n\n//# sourceURL=webpack://Needle/./src/methods/store/_retrieve.js?");

/***/ }),

/***/ "./src/methods/store/_save.js":
/*!************************************!*\
  !*** ./src/methods/store/_save.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_randomId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_randomId */ \"./src/util/_randomId.js\");\n/* harmony import */ var _util_stamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_stamp */ \"./src/util/_stamp.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Save\n ---------------------------------------- */\n\n/**\n * The save method will push a collection\n * of data to the store. This means selections\n * can be saved from time to time to create\n * a snapshot of the current data manipulation.\n *\n * @param { string } name - give the snapshot a name\n * @returns { string } - will return identifier name of store\n */\n\nfunction save(store, name) {\n  name = name || Object(_util_randomId__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  store.length > 0 && store.forEach(function (item) {\n    return item.id++;\n  });\n  store.push({\n    name: name,\n    id: 1,\n    data: this._data,\n    time: Object(_util_stamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  });\n  store.reverse();\n  return name;\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (save);\n\n//# sourceURL=webpack://Needle/./src/methods/store/_save.js?");

/***/ }),

/***/ "./src/methods/store/base.js":
/*!***********************************!*\
  !*** ./src/methods/store/base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_save */ \"./src/methods/store/_save.js\");\n/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_retrieve */ \"./src/methods/store/_retrieve.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  save: _save__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  retrieve: _retrieve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/store/base.js?");

/***/ }),

/***/ "./src/methods/template/_empty.js":
/*!****************************************!*\
  !*** ./src/methods/template/_empty.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Empty\n ---------------------------------------- */\n\n/**\n * If no results can be retrieved the empty\n * method can template a \"no results\" view.\n * This function will only execute if no\n * results are available.\n *\n * @param { function } callback - executable\n * @returns { object } - containing info about the query\n */\nfunction _empty(callback) {\n  var _this = this;\n\n  if (this._data.length === 0) callback(this.config);\n  return {\n    results: function results(fn) {\n      return _this._results(fn);\n    }\n  };\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_empty);\n\n//# sourceURL=webpack://Needle/./src/methods/template/_empty.js?");

/***/ }),

/***/ "./src/methods/template/_results.js":
/*!******************************************!*\
  !*** ./src/methods/template/_results.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Results\n ---------------------------------------- */\n\n/**\n * This method will return information about\n * the amount of items and the query given.\n *\n * @param { function } callback - executable\n * @returns { object } - containing info about the query\n */\nfunction _results(callback) {\n  var _this = this;\n\n  callback(this.info);\n  return {\n    empty: function empty(fn) {\n      return _this._empty(fn);\n    }\n  };\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_results);\n\n//# sourceURL=webpack://Needle/./src/methods/template/_results.js?");

/***/ }),

/***/ "./src/methods/template/_template.js":
/*!*******************************************!*\
  !*** ./src/methods/template/_template.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Template\n ---------------------------------------- */\n\n/**\n * With the template method a callback will be\n * executed for every item present within the\n * data array. The data of each item will be\n * passed into the callback. The template method\n * will also return a object containing information\n * about the results.\n *\n * @param { function } callback - executable\n * @returns { object } - containing info about the query\n */\nfunction template(callback) {\n  var _this = this;\n\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._data;\n  if (this._hasTrail()) return this._data.forEach(callback, this);\n  var info = {\n    needle: this,\n    info: this.info\n  };\n  data.length > 0 && data.forEach(callback, info);\n  return {\n    info: this.info,\n    empty: function empty(fn) {\n      return _this._empty(fn);\n    },\n    results: function results(fn) {\n      return _this._results(fn);\n    }\n  };\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (template);\n\n//# sourceURL=webpack://Needle/./src/methods/template/_template.js?");

/***/ }),

/***/ "./src/methods/template/base.js":
/*!**************************************!*\
  !*** ./src/methods/template/base.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_empty */ \"./src/methods/template/_empty.js\");\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_results */ \"./src/methods/template/_results.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_template */ \"./src/methods/template/_template.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _empty: _empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _results: _results__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  template: _template__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/template/base.js?");

/***/ }),

/***/ "./src/methods/trail/_addTrail.js":
/*!****************************************!*\
  !*** ./src/methods/trail/_addTrail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Add Trail\n ---------------------------------------- */\n\n/**\n * The addTrail method will create a new\n * function trail that can be executed once\n * the trail ends.\n *\n * @param { bool } trail - should push trail\n * @param { string } fn - name of function\n * @param { array } args - arguments specified\n */\nfunction _addTrail(trail, fn) {\n  var or = ['or', 'orWhere'];\n  var and = ['and', 'andWhere'];\n\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  trail && this._trail['exe'].push({\n    type: and.includes(fn) && 'and' || or.includes(fn) && 'or',\n    name: '_' + fn,\n    args: args,\n    exe: this['_' + fn].bind(this)\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_addTrail);\n\n//# sourceURL=webpack://Needle/./src/methods/trail/_addTrail.js?");

/***/ }),

/***/ "./src/methods/trail/_exeTrail.js":
/*!****************************************!*\
  !*** ./src/methods/trail/_exeTrail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_doubles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_doubles */ \"./src/util/_doubles.js\");\n/* harmony import */ var _util_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_flatten */ \"./src/util/_flatten.js\");\n/* harmony import */ var _util_unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/_unique */ \"./src/util/_unique.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Execute Trail\n ---------------------------------------- */\n\n/**\n * If chain is available the executing will\n * process all stacked queries and resolve the\n * results in a new array. This array will be\n * flattened by the hasTrail() method if\n * criteria are matched.\n */\n\nfunction _exeTrail() {\n  var _this = this;\n\n  var executed = [];\n  var setData = [];\n\n  var results = this._trail.exe.map(function (fn) {\n    if (fn.type === 'or') setData = _this._trail.data;\n    if (fn.type === 'and') setData = _this._trail.prev;\n    executed.push(fn.type);\n    return {\n      type: fn.type,\n      result: fn.exe.apply(fn, _toConsumableArray(fn.args).concat([setData]))\n    };\n  });\n\n  var and = results.filter(function (value) {\n    return value.type === 'and';\n  }).map(function (value) {\n    return value.result;\n  });\n  var flattenAnd = Object(_util_flatten__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(and);\n  var andResult = and.length > 1 ? Object(_util_doubles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(flattenAnd) : flattenAnd;\n  var or = results.filter(function (value) {\n    return value.type === 'or';\n  }).map(function (value) {\n    return value.result;\n  });\n  var flattenOr = Object(_util_flatten__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(or);\n  var orResult = Object(_util_unique__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(flattenOr);\n  if (!executed.includes('and')) andResult = this._trail.prev;\n\n  this._resetTrail();\n\n  return [andResult, orResult];\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exeTrail);\n\n//# sourceURL=webpack://Needle/./src/methods/trail/_exeTrail.js?");

/***/ }),

/***/ "./src/methods/trail/_hasTrail.js":
/*!****************************************!*\
  !*** ./src/methods/trail/_hasTrail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_unique__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_unique */ \"./src/util/_unique.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Has Trail\n ---------------------------------------- */\n\n/**\n * Will check if a trail can be closed and\n * execute the trail. It will concat any\n * results produced by the trail and push\n * these to the data array creating a extended\n * data set based on given query chain.\n */\n\nfunction _hasTrail() {\n  if (!this._trail.exe.length) return;\n  this._data = Object(_util_unique__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([].concat.apply([], this._exeTrail()));\n  return this._chain(this._data);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_hasTrail);\n\n//# sourceURL=webpack://Needle/./src/methods/trail/_hasTrail.js?");

/***/ }),

/***/ "./src/methods/trail/_resetTrail.js":
/*!******************************************!*\
  !*** ./src/methods/trail/_resetTrail.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Reset Trail\n ---------------------------------------- */\n\n/**\n * Will reset the trail to it's native state\n * and make sure that other chained methods\n * will execute without interference.\n */\nfunction _resetTrail() {\n  this._trail = {\n    exe: [],\n    data: [],\n    prev: []\n  };\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_resetTrail);\n\n//# sourceURL=webpack://Needle/./src/methods/trail/_resetTrail.js?");

/***/ }),

/***/ "./src/methods/trail/base.js":
/*!***********************************!*\
  !*** ./src/methods/trail/base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addTrail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_addTrail */ \"./src/methods/trail/_addTrail.js\");\n/* harmony import */ var _exeTrail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_exeTrail */ \"./src/methods/trail/_exeTrail.js\");\n/* harmony import */ var _hasTrail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hasTrail */ \"./src/methods/trail/_hasTrail.js\");\n/* harmony import */ var _resetTrail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_resetTrail */ \"./src/methods/trail/_resetTrail.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _addTrail: _addTrail__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _exeTrail: _exeTrail__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _hasTrail: _hasTrail__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  _resetTrail: _resetTrail__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack://Needle/./src/methods/trail/base.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contents\", function() { return contents; });\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isArray */ \"./src/util/_isArray.js\");\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\n/** ----------------------------------------\n     Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n     Contents\n ---------------------------------------- */\n\nfunction contents(model, data) {\n  data.length && Object.keys(data[0]).forEach(function (value) {\n    if (Object(_util_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data[0][value]) !== 'object') {\n      model['_content'][value] = Object(_util_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data[0][value]);\n    }\n  });\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n\n//# sourceURL=webpack://Needle/./src/setup/_contents.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isType */ \"./src/util/_isType.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Arrange\n ---------------------------------------- */\n\n/**\n * This function will take an array of items\n * that can be sorted based on a given key.\n * The type describes the order and the date\n * parameter will handle sorting of dates.\n *\n * @param { array } array - data set\n * @param { string | date } key - given key\n * @param { string } type - asc or desc\n * @param { bool } date - matching date value\n * @returns { array } - sorted array\n */\n\nvar arrange = function arrange(array, key, type) {\n  var isDate = Object(_util_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array[0][key]) === 'date';\n\n  var convert = function convert(a, b) {\n    a = isDate ? new Date(a[key]) : a[key];\n    b = isDate ? new Date(b[key]) : b[key];\n    return {\n      a: a,\n      b: b\n    };\n  };\n\n  var _asc = function asc(a, b) {\n    var item = convert(a, b);\n    return item.b < item.a ? 1 : item.b > item.a ? -1 : 0;\n  };\n\n  var _desc = function desc(a, b) {\n    var item = convert(a, b);\n    return item.a < item.b ? 1 : item.a > item.b ? -1 : 0;\n  };\n\n  var sortType = {\n    'asc': function asc() {\n      return array.sort(_asc);\n    },\n    'desc': function desc() {\n      return array.sort(_desc);\n    }\n  };\n  return sortType[type]();\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (arrange);\n\n//# sourceURL=webpack://Needle/./src/util/_arrange.js?");

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

/***/ "./src/util/_deep.js":
/*!***************************!*\
  !*** ./src/util/_deep.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isArray */ \"./src/util/_isArray.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Deep\n ---------------------------------------- */\n\n/**\n * The deep helper will look for keys that\n * contain object values (nested objects).\n *\n * @param { string } key - selected key\n * @param { object } item - base object\n * @returns { array } - filtered items\n */\n\nfunction deep(key, item) {\n  return Object.keys(item).filter(function (key) {\n    var isNotArray = !Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item[key]);\n    var isObject = _typeof(item[key]) === 'object';\n    return isNotArray && isObject && item;\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deep);\n\n//# sourceURL=webpack://Needle/./src/util/_deep.js?");

/***/ }),

/***/ "./src/util/_doubles.js":
/*!******************************!*\
  !*** ./src/util/_doubles.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Has Doubles\n ---------------------------------------- */\nvar hasDoubles = function hasDoubles(array) {\n  return new Set(array).size !== array.length;\n};\n/** ----------------------------------------\n    Doubles\n ---------------------------------------- */\n\n\nvar doubles = function doubles(array) {\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var result;\n  var defaultStore = {\n    count: 1,\n    array: [],\n    save: []\n  };\n\n  var findDuplicates = function findDuplicates(array) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var store = data || defaultStore;\n    array.forEach(function (item, index) {\n      store.array.includes(item) && store.save.push(item);\n      store.array.push(item);\n\n      if (index === array.length - 1 && store.save.length > 0) {\n        findDuplicates(store.save, {\n          array: [],\n          save: []\n        });\n        defaultStore.count++;\n      }\n\n      if (store.save.length === 0 && store.array.length) {\n        result = store.array;\n      }\n    });\n  };\n\n  findDuplicates(array);\n  return {\n    count: defaultStore.count,\n    result: result\n  };\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (doubles);\n\n//# sourceURL=webpack://Needle/./src/util/_doubles.js?");

/***/ }),

/***/ "./src/util/_evaluate.js":
/*!*******************************!*\
  !*** ./src/util/_evaluate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/_isArray */ \"./src/util/_isArray.js\");\n/* harmony import */ var _util_isSingleArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/_isSingleArray */ \"./src/util/_isSingleArray.js\");\n/** ----------------------------------------\n    Utilities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Evaluate\n ---------------------------------------- */\n\nvar evaluate = function evaluate(item, operator, value, date) {\n  item = date ? new Date(item) : item;\n  value = date ? new Date(value) : value;\n\n  var compare = function compare(value) {\n    item = Object(_util_isSingleArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item);\n\n    if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item)) {\n      var multiple = item.map(function (index) {\n        return worker(index, value);\n      });\n      return multiple.some(function (item) {\n        return item;\n      });\n    }\n\n    return worker(item, value);\n  };\n\n  var worker = function worker(item) {\n    var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;\n    var obj = {\n      '>': item > check,\n      '<': item < check,\n      '>=': item >= check,\n      '<=': item <= check,\n      '=': item === check,\n      '!=': item !== check\n    };\n    return obj[operator];\n  };\n\n  var type = operator === '=' ? 'some' : 'every';\n\n  var compareArray = function compareArray(array) {\n    return array[type](function (item) {\n      return compare(item);\n    });\n  };\n\n  return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) ? compareArray(value) : compare(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (evaluate);\n\n//# sourceURL=webpack://Needle/./src/util/_evaluate.js?");

/***/ }),

/***/ "./src/util/_extreme.js":
/*!******************************!*\
  !*** ./src/util/_extreme.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/** ----------------------------------------\n    Extreme\n ---------------------------------------- */\nvar extreme = function extreme(array, key, type) {\n  return Math[type].apply(Math, _toConsumableArray(array.map(function (item) {\n    return item[key];\n  })));\n};\n/** ----------------------------------------\n Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (extreme);\n\n//# sourceURL=webpack://Needle/./src/util/_extreme.js?");

/***/ }),

/***/ "./src/util/_flatten.js":
/*!******************************!*\
  !*** ./src/util/_flatten.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Flatten\n ---------------------------------------- */\nvar flatten = function flatten(array) {\n  return [].concat.apply([], array);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flatten);\n\n//# sourceURL=webpack://Needle/./src/util/_flatten.js?");

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

/***/ "./src/util/_objPath.js":
/*!******************************!*\
  !*** ./src/util/_objPath.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Object Path\n ---------------------------------------- */\n\n/**\n * This helper will return an array containing\n * each given key from a dot notation in string\n * format, for instance \"contact.email.work\".\n *\n * @param { string } path - using object dot notation\n * @returns { array } array containing split of string\n */\nfunction objPath(path) {\n  return path.split('.');\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (objPath);\n\n//# sourceURL=webpack://Needle/./src/util/_objPath.js?");

/***/ }),

/***/ "./src/util/_objReduce.js":
/*!********************************!*\
  !*** ./src/util/_objReduce.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Object Reducer\n ---------------------------------------- */\n\n/**\n * This helper will reduce given keys\n * to a new object.\n *\n * @param { array } array - array of keys to be maintained\n * @param { object } item - original object\n * @returns { array } - manipulated object\n */\nfunction objReduce(array, item) {\n  return array.map(function (key) {\n    return key;\n  }).reduce(function (array, key) {\n    return array[key];\n  }, item);\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (objReduce);\n\n//# sourceURL=webpack://Needle/./src/util/_objReduce.js?");

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

/***/ }),

/***/ "./src/util/_unique.js":
/*!*****************************!*\
  !*** ./src/util/_unique.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/** ----------------------------------------\n    Unique\n ---------------------------------------- */\nvar unique = function unique(array) {\n  return _toConsumableArray(new Set(array));\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unique);\n\n//# sourceURL=webpack://Needle/./src/util/_unique.js?");

/***/ })

/******/ })["default"];