var pageComponent =
webpackJsonppageComponent([12],{

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _indexSoy = __webpack_require__(269);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JssoU = function (_Component) {
  _inherits(JssoU, _Component);

  function JssoU() {
    _classCallCheck(this, JssoU);

    return _possibleConstructorReturn(this, (JssoU.__proto__ || Object.getPrototypeOf(JssoU)).apply(this, arguments));
  }

  return JssoU;
}(_metalComponent2.default);

;

_metalSoy2.default.register(JssoU, _indexSoy2.default);

exports.default = JssoU;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.JssoU = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace JssoU.
   * @public
   */

  goog.module('JssoU.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Mapper.DTO Reference');
      ie_close('h2');
      ie_open('p');
      itext('Mapper.DTO is a wrapper object for nested maps.');
      ie_close('p');
      $templateAlias2({ code: 'Mapper.DTO d = new Mapper.DTO();\nd.setObject(\'a.b.c\', \'test\');\nBoolean flag = d.getBoolean(\'task.terminated\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Constructors');
      ie_close('h2');
      ie_open('p');
      itext('Here are the constructors.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('DTO()');
      ie_close('td');
      ie_open('td');
      itext('Constrcutor to create an empty DTO');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DTO(DTO)');
      ie_close('td');
      ie_open('td');
      itext('Constructor to create an instance from another DTO');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DTO(String)');
      ie_close('td');
      ie_open('td');
      itext('Constructor to create an instance from a JSON string');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DTO(Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Constructor to create an instance from a Map<String, Object>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DTO(SObject)');
      ie_close('td');
      ie_open('td');
      itext('Constructor to create an instance from an SObject');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DTO(Object)');
      ie_close('td');
      ie_open('td');
      itext('Constrcutor to create an instance from an Object');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: 'Mapper.DTO d = new MapperDTO();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Query');
      ie_close('h2');
      ie_open('p');
      itext('Here are the query APIs.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('keySet()');
      ie_close('td');
      ie_open('td');
      itext('Get the keys of the DTO');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('containsPath(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Check if the DTO has the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('containsPath(String)');
      ie_close('td');
      ie_open('td');
      itext('Check if the DTO has the path');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Conversion');
      ie_close('h2');
      ie_open('p');
      itext('Here are the methods to convert DTO to other objects.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('toMap()');
      ie_close('td');
      ie_open('td');
      itext('Convert to Map<String, Object>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toJSON()');
      ie_close('td');
      ie_open('td');
      itext('Convert to JSON string');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toObject(Type)');
      ie_close('td');
      ie_open('td');
      itext('Convert to Object of the given type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toSObject(Type)');
      ie_close('td');
      ie_open('td');
      itext('Convert to SObject of the given type');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: 'Mapper.DTO d = new MapperDTO();\nMap<String, Object> m = d.toMap();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Accessors');
      ie_close('h2');
      ie_open('p');
      itext('Here are the getters/setters for DTOs.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('setObject(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setObject(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getObject(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getObject(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setBoolean(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setBoolean(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getBoolean(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getBoolean(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setInteger(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setInteger(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getInteger(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getInteger(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setLong(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setLong(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getLong(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getLong(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setDouble(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setDouble(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getDouble(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getDouble(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setDecimal(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setDecimal(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getDecimal(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getDecimal(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setString(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setString(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getString(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getString(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setList(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setList(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getList(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getList(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setSet(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setSet(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getSet(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getSet(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setMap(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setMap(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getMap(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getMap(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setSObject(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setSObject(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getSObject(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getSObject(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setDate(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setDate(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getDate(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getDate(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setTime(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setTime(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getTime(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getTime(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setDatetime(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setDatetime(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getDatetime(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getDatetime(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setFunc(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setFunc(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getFunc(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getFunc(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value at the path');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: 'Mapper.DTO d = new MapperDTO();\nd.setInteger(\'age\', 30);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JssoU.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var JssoU = function (_Component) {
  _inherits(JssoU, _Component);

  function JssoU() {
    _classCallCheck(this, JssoU);

    return _possibleConstructorReturn(this, (JssoU.__proto__ || Object.getPrototypeOf(JssoU)).apply(this, arguments));
  }

  return JssoU;
}(_metalComponent2.default);

_metalSoy2.default.register(JssoU, templates);
exports.JssoU = JssoU;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);