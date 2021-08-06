import _classCallCheck from "@babel/runtime-corejs2/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/createClass";
import _Array$from from "@babel/runtime-corejs2/core-js/array/from";
import _Map from "@babel/runtime-corejs2/core-js/map";
import _Promise from "@babel/runtime-corejs2/core-js/promise";

var funa = function funa() {
  console.log('1111');
};

_Array$from({
  length: 10
});

new _Map();
new _Promise(function (res, rej) {
  return res([]);
});
var a = 1 > 2 ? false : 2 < 3 ? true : false;
console.log(a);

var abb = /*#__PURE__*/function () {
  function abb() {
    _classCallCheck(this, abb);

    state = 1;
  }

  _createClass(abb, [{
    key: "cache",
    value: function cache() {
      console.log(2);
    }
  }]);

  return abb;
}();

if (1 > 2) {} else if (2 > 3) {}