var pageComponent =
webpackJsonppageComponent([10],{

/***/ 272:
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

var _indexSoy = __webpack_require__(273);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YtbZL = function (_Component) {
  _inherits(YtbZL, _Component);

  function YtbZL() {
    _classCallCheck(this, YtbZL);

    return _possibleConstructorReturn(this, (YtbZL.__proto__ || Object.getPrototypeOf(YtbZL)).apply(this, arguments));
  }

  return YtbZL;
}(_metalComponent2.default);

;

_metalSoy2.default.register(YtbZL, _indexSoy2.default);

exports.default = YtbZL;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.YtbZL = undefined;

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
   * @fileoverview Templates in namespace YtbZL.
   * @public
   */

  goog.module('YtbZL.incrementaldom');

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
    var param387 = function param387() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Methods Reference');
      ie_close('h2');
      ie_open('p');
      itext('Here is the full reference for Mapper.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Rename Input Objects');
      ie_close('h2');
      ie_open('p');
      itext('We use below methods to rename input objects, so that we can reference them in the Field Mapper Key expressions.');
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
      itext('inputAs(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Rename to the name list');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('inputAs(String, String)');
      ie_close('td');
      ie_open('td');
      itext('Rename to the two names');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('inputAs(String, String, String)');
      ie_close('td');
      ie_open('td');
      itext('Rename to the three names');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Example:');
      ie_close('p');
      $templateAlias2({ code: 'new Mapper()\n    .inputAs(\'src1\', src2)\n    .mapField(\'x\', \'src1.x\')\n    .mapField(\'y\', \'src2.y\')\n    .toMap();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If there is only one source object, we don\'t need to use ');
      ie_open('code');
      itext('inputAs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Map Fields');
      ie_close('h2');
      ie_open('p');
      itext('We have various methods to add field mappings to the Mapper.');
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
      itext('mapField(String, Mapper.FieldMapper)');
      ie_close('td');
      ie_open('td');
      itext('Map the field using the field mapper');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('mapField(String, List<String>, Func)');
      ie_close('td');
      ie_open('td');
      itext('Map the field using a list of keys and transformer');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('mapField(String, String, String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Map the field using two keys and a transformer');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('mapField(String, String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Map the field using one key and the transformer');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('mapField(String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Map the field using only the transformer, the field name unchanged');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('mapField(String, String)');
      ie_close('td');
      ie_open('td');
      itext('Map the field using only the key, the field value unchanged');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('mapField(String)');
      ie_close('td');
      ie_open('td');
      itext('Map the field using the same field name, the field value unchanged');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('mapFields(Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Map the fields using the field mappers');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Example:');
      ie_close('p');
      $templateAlias2({ code: 'new Mapper()\n    .mapFields(new Map<String, Object>{\n        \'x\' => new Mapper.FieldMapper(\'a\', R.identity),\n        \'y\' => \'b\',\n        \'c\' => R.identity\n    });', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('When using ');
      ie_open('code');
      itext('mapFields');
      ie_close('code');
      itext(', the values in the field mapper map can be:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('FieldMapper, which will be used to map the field');
      ie_close('li');
      ie_open('li');
      itext('String, the Field Mapper key');
      ie_close('li');
      ie_open('li');
      itext('Func, the transformer to process the value');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Reverse Mapper');
      ie_close('h2');
      ie_open('p');
      itext('For mappers that contain only one-to-one field mappers and do not have any names set from ');
      ie_open('code');
      itext('inputAs');
      ie_close('code');
      itext(', we can easily create their reverse mappers.');
      ie_close('p');
      $templateAlias2({ code: 'Mapper reversed = m.reverseToMap();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we have a list of methods to specify the exact type of object the reversed mapper converts to.');
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
      itext('reverseTo(String, Type)');
      ie_close('td');
      ie_open('td');
      itext('Specify the type and objectType that the reversed mapper converts to');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('reverseTo(String)');
      ie_close('td');
      ie_open('td');
      itext('Specify the type that the reversed mapper converts to');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('reverseToJSON()');
      ie_close('td');
      ie_open('td');
      itext('Reversed mapper will convert to JSON string');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('reverseToMap()');
      ie_close('td');
      ie_open('td');
      itext('Reversed mapper will convert to Map<String, Object>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('reverseToObject(Type)');
      ie_close('td');
      ie_open('td');
      itext('Reversed mapper will convert to Object with the given type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('reverseToSObject(Type)');
      ie_close('td');
      ie_open('td');
      itext('Reversed mapper will convert to SObject with the given type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('reverseToDTO()');
      ie_close('td');
      ie_open('td');
      itext('Reversed mapper will convert to Mapper.DTO');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Specify Convert To');
      ie_close('h2');
      ie_open('p');
      itext('We need to specify which type the mapper will convert the object to.');
      ie_close('p');
      $templateAlias2({ code: 'new Mapper()\n    .mapField(\'name\', \'Name\')\n    .toObject(AccountDTO.class);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here is a list of methods that we can use:');
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
      itext('to(String, Type)');
      ie_close('td');
      ie_open('td');
      itext('Convert to the type and objectType');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('to(String)');
      ie_close('td');
      ie_open('td');
      itext('Convert to the type');
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
      itext('toMap()');
      ie_close('td');
      ie_open('td');
      itext('Convert to Map<String, Object>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toDTO()');
      ie_close('td');
      ie_open('td');
      itext('Convert to Mapper.DTO');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toObject(Type)');
      ie_close('td');
      ie_open('td');
      itext('Convert to Object with the given type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toSObject(Type)');
      ie_close('td');
      ie_open('td');
      itext('Convert to SObject with the given type');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param387 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'YtbZL.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var YtbZL = function (_Component) {
  _inherits(YtbZL, _Component);

  function YtbZL() {
    _classCallCheck(this, YtbZL);

    return _possibleConstructorReturn(this, (YtbZL.__proto__ || Object.getPrototypeOf(YtbZL)).apply(this, arguments));
  }

  return YtbZL;
}(_metalComponent2.default);

_metalSoy2.default.register(YtbZL, templates);
exports.YtbZL = YtbZL;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);