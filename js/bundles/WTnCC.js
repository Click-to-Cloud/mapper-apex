var pageComponent =
webpackJsonppageComponent([2],{

/***/ 282:
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

var _step_4Soy = __webpack_require__(283);

var _step_4Soy2 = _interopRequireDefault(_step_4Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WTnCC = function (_Component) {
  _inherits(WTnCC, _Component);

  function WTnCC() {
    _classCallCheck(this, WTnCC);

    return _possibleConstructorReturn(this, (WTnCC.__proto__ || Object.getPrototypeOf(WTnCC)).apply(this, arguments));
  }

  return WTnCC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(WTnCC, _step_4Soy2.default);

exports.default = WTnCC;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.WTnCC = undefined;

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

  // This file was automatically generated from step_4.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace WTnCC.
   * @public
   */

  goog.module('WTnCC.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param476 = function param476() {
      ie_open('h2');
      var dyn33 = opt_data.page.title;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h2');
      ie_open('p');
      itext('During the mapping, we can also transform the values.');
      ie_close('p');
      $templateAlias2({ code: 'Mapper m = new Mapper()\n    .mapField(\'name\', \'Name\', R.prepend.apply(\'Mr. \'))\n    .toMap();\nMap<String, Object> data = (Map<String, Object>)m.run(acc);\n// Create a map containing \'name\' with the value prepended with \'Mr. \'', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In this example, we transform the value of \'Name\' by prepending \'Mr. \', and then set it to field \'name\'.');
      ie_close('p');
      ie_open('p');
      itext('We can go further than simply one field. Converting value from multiple fields is also supported.');
      ie_close('p');
      $templateAlias2({ code: 'Mapper m = new Mapper()\n    .mapField(\'desc\', \'Name\', \'Description\', R.concat)\n    .toMap();\nMap<String, Object> data = (Map<String, Object>)m.run(acc);\n// Create a map containing \'desc\' with the value of \'Name\'\n// and \'Description\' values concatenated', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we concatenate the values of \'Name\' and \'Description\' and then set it to the field \'desc\'.');
      ie_close('p');
      ie_open('p');
      itext('Besides, we can easily access values in nested fields.');
      ie_close('p');
      $templateAlias2({ code: 'Mapper m = new Mapper()\n    .mapField(\'person.name\', \'Account.Name\')\n    .toMap();\nMap<String, Object> data = (Map<String, Object>)m.run(src);\n// Create a map with nested maps, \'person => name\' with the value\n// of \'Account => Name\' from the source map', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We get the value from nested fields \'Account.Name\' and then set it to a nested field \'person.name\'.');
      ie_close('p');
      ie_open('p');
      itext('The hidden power is that we can even convert multiple objects into one.');
      ie_close('p');
      $templateAlias2({ code: 'Mapper m = new Mapper()\n    .inputAs(\'src1\', \'src2\')\n    .mapField(\'name\', \'src1.Name\')\n    .mapField(\'desc\', \'src2.Description\')\n    .toMap();\nMap<String, Object> data = (Map<String, Object>)m.run(src1, src2);\n// Create a map containing \'name\' and \'desc\' with values\n// from two source objects', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In this example, we convert from ');
      ie_open('code');
      itext('src1');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('src2');
      ie_close('code');
      itext(' into ');
      ie_open('code');
      itext('data');
      ie_close('code');
      itext(', by picking ');
      ie_open('code');
      itext('Name');
      ie_close('code');
      itext(' of ');
      ie_open('code');
      itext('src1');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('Description');
      ie_close('code');
      itext(' of ');
      ie_open('code');
      itext('src2');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param476 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'WTnCC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var WTnCC = function (_Component) {
  _inherits(WTnCC, _Component);

  function WTnCC() {
    _classCallCheck(this, WTnCC);

    return _possibleConstructorReturn(this, (WTnCC.__proto__ || Object.getPrototypeOf(WTnCC)).apply(this, arguments));
  }

  return WTnCC;
}(_metalComponent2.default);

_metalSoy2.default.register(WTnCC, templates);
exports.WTnCC = WTnCC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[282]);