var pageComponent =
webpackJsonppageComponent([11],{

/***/ 270:
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

var _indexSoy = __webpack_require__(271);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MUsmR = function (_Component) {
  _inherits(MUsmR, _Component);

  function MUsmR() {
    _classCallCheck(this, MUsmR);

    return _possibleConstructorReturn(this, (MUsmR.__proto__ || Object.getPrototypeOf(MUsmR)).apply(this, arguments));
  }

  return MUsmR;
}(_metalComponent2.default);

;

_metalSoy2.default.register(MUsmR, _indexSoy2.default);

exports.default = MUsmR;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.MUsmR = undefined;

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
   * @fileoverview Templates in namespace MUsmR.
   * @public
   */

  goog.module('MUsmR.incrementaldom');

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
    var param346 = function param346() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Problem of Mapping');
      ie_close('h2');
      ie_open('p');
      itext('We often meet situations like this:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Convert between SObjects and custom DTO objects');
      ie_close('li');
      ie_open('li');
      itext('Convert between Maps and SObjects');
      ie_close('li');
      ie_open('li');
      itext('Convert between JSON strings and custom objects');
      ie_close('li');
      ie_open('li');
      itext('Convert between custom objects');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('These are fairly common, and we all know how to handle them. Mapper.apex is here just to make things easier and more straightforward.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('What Mapper.apex can do?');
      ie_close('h2');
      ie_open('p');
      itext('Mapper.apex is designed to build a functional API to handle conversions between any of these objects:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('JSON string');
      ie_close('li');
      ie_open('li');
      itext('Map<String, Object>');
      ie_close('li');
      ie_open('li');
      itext('SObject');
      ie_close('li');
      ie_open('li');
      itext('Object');
      ie_close('li');
      ie_open('li');
      itext('Mapper.DTO');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Fundamentally, a Mapper is a Func, so it naturally integrates well with ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex/');
      itext('R.apex');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('How Mapper.apex does this?');
      ie_close('h2');
      ie_open('p');
      itext('We notice that conversions between objects all focus on conversions between object fields. So the root of this problem is to model object field conversions. Mapper.apex supports the following field conversions:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Convert from one field of one object to another field of another object(Pattern A)');
      ie_close('li');
      ie_open('li');
      itext('Convert from multiple fields of one object to another field of another object(Pattern B)');
      ie_close('li');
      ie_open('li');
      itext('Convert from multiple fields of multiple objects to another field of another object(Pattern C)');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('And by iterating field conversions, object conversions are done.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Field Mapper');
      ie_close('h2');
      ie_open('p');
      itext('A Field Mapper is an object that converts one field of one object to another field of another object. Below is the key factors of a Field Mapper.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Factor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Field Name');
      ie_close('td');
      ie_open('td');
      itext('The name of the field that the FieldMapper will convert the value to');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Keys');
      ie_close('td');
      ie_open('td');
      itext('A list of keys, each of which specify one field of the source objects to convert from');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Transformer');
      ie_close('td');
      ie_open('td');
      itext('A Func that accepts the values from the keys of the source objects, and transform them into the value of the destination field');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: 'new Mapper()\n    .mapField(\'name\', new Mapper.FieldMapper(new List<String>{ \'Name\' }, R.identity));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In the code above, we add one field mapper to the mapper. This field mapper will get the field value of \'Name\' from the source object, and use ');
      ie_open('code');
      itext('R.identity');
      ie_close('code');
      itext(' to process the value, and then set the final value to the fielf of ');
      ie_open('code');
      itext('name');
      ie_close('code');
      itext(' of the converted object.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Inputs and Outputs');
      ie_close('h2');
      ie_open('p');
      itext('A Mapper automatically accepts any of the 5 types below:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('JSON string');
      ie_close('li');
      ie_open('li');
      itext('Map<String, Object>');
      ie_close('li');
      ie_open('li');
      itext('SObject');
      ie_close('li');
      ie_open('li');
      itext('Object');
      ie_close('li');
      ie_open('li');
      itext('Mapper.DTO');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('However, we need to specify which type we want to convert to.');
      ie_close('p');
      $templateAlias2({ code: 'new Mapper()\n    .mapField(\'name\', \'Name\')\n    .toMap();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This code creates a Mapper that will finally convert the object into a map.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Field Mapper Key');
      ie_close('h2');
      ie_open('p');
      itext('A Field Mapper Key is a path that specifies the exact field name of the object that we want to get the value from.');
      ie_close('p');
      ie_open('p');
      itext('Field Mapper keys can be nested.');
      ie_close('p');
      $templateAlias2({ code: 'new Mapper()\n    mapField(\'name\', \'Account.Name\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we have a ');
      ie_open('code');
      itext('.');
      ie_close('code');
      itext(' separated string that acts as the Field Mapper Key, which specifies the ');
      ie_open('code');
      itext('Name');
      ie_close('code');
      itext(' field of the object, under the field ');
      ie_open('code');
      itext('Account');
      ie_close('code');
      itext(' of the source object.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('Pattern A');
      ie_close('h2');
      ie_open('p');
      itext('Most of the time, we convert the fields on a one-to-one basis like this.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> src = new Map<String, Object>{\n    \'a\' => 1,\n    \'b\' => 2\n};\n\nMapper m = new Mapper()\n    .mapField(\'x\', \'a\')\n    .mapField(\'y\', \'b\')\n    .toMap();\n\nMap<String, Object> dest = (Map<String, Object>)m.run(src);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('a: 1, b: 2');
      ie_close('code');
      itext(' is converted to ');
      ie_open('code');
      itext('x: 1, y: 2');
      ie_close('code');
      itext('. Each of the field is mapped to another unique field.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('Pattern B');
      ie_close('h2');
      ie_open('p');
      itext('Sometimes, we need more than one field to calculate the new field we want.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> src = new Map<String, Object>{\n    \'a\' => 1,\n    \'b\' => 2\n};\n\nMapper m = new Mapper()\n    .mapField(\'sum\', \'a\', \'b\', R.add)\n    .mapField(\'product\', \'a\', \'b\', R.multiply)\n    .toMap();\n\nMap<String, Object> dest = (Map<String, Object>)m.run(src);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('a: 1, b: 2');
      ie_close('code');
      itext(' is converted to ');
      ie_open('code');
      itext('sum: 3, product: 2');
      ie_close('code');
      itext('. Both ');
      ie_open('code');
      itext('a');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('b');
      ie_close('code');
      itext(' fields are used to calculate the new ');
      ie_open('code');
      itext('sum');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('product');
      ie_close('code');
      itext(' fields.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('Pattern C');
      ie_close('h2');
      ie_open('p');
      itext('Very rarely, we would even use more than one objects to convert into one object.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> src1 = new Map<String, Object>{\n    \'a\' => 1,\n    \'b\' => 2\n};\n\nMap<String, Object> src2 = new Map<String, Object>{\n    \'a\' => 3,\n    \'b\' => 4\n};\n\nMapper m = new Mapper()\n    .inputAs(\'src1\', \'src2\')\n    .mapField(\'sum\', \'src1.a\', \'src2.a\', R.add)\n    .mapField(\'product\', \'src2.b\', \'src2.b\', R.multiply)\n    .toMap();\n\nMap<String, Object> dest = (Map<String, Object>)m.run(src1, src2);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The result is ');
      ie_open('code');
      itext('sum: 4, product: 8');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('We use ');
      ie_open('code');
      itext('inputAs');
      ie_close('code');
      itext(' to rename the source objects so that we can reference them in the Field Mapper Key expressions, like ');
      ie_open('code');
      itext('src1.a');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Then we prefix the normal Field Mapper Key to get the value from the specific source objects.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param346 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'MUsmR.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var MUsmR = function (_Component) {
  _inherits(MUsmR, _Component);

  function MUsmR() {
    _classCallCheck(this, MUsmR);

    return _possibleConstructorReturn(this, (MUsmR.__proto__ || Object.getPrototypeOf(MUsmR)).apply(this, arguments));
  }

  return MUsmR;
}(_metalComponent2.default);

_metalSoy2.default.register(MUsmR, templates);
exports.MUsmR = MUsmR;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);