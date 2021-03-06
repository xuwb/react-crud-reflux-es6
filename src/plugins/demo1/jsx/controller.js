"use strict";
/**
 * 模型
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require, exports, module) {

	// 依赖
	var Control = require('plugins/myReflux/control');

	var Controller = function (_Control) {
		_inherits(Controller, _Control);

		function Controller() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			_classCallCheck(this, Controller);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Controller)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.store = {
				hiddenTel: false
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Controller, [{
			key: "onHiddenTel",
			value: function onHiddenTel(e) {
				var me = this,
				    store = me.store;
				store.hiddenTel = true;
				me.updateComponent();
			}
		}, {
			key: "onShowTel",
			value: function onShowTel() {
				var me = this,
				    store = me.store;
				store.hiddenTel = false;
				me.updateComponent();
			}
		}]);

		return Controller;
	}(Control);

	;

	return new Controller();
});