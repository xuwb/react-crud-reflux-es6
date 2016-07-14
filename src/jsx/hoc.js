'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require, exports, module) {
    var React = require('react'),
        Reflux = require('reflux');
    var TableStore = require('stores/tableStore');

    return function (Wraper) {
        return function (_React$Component) {
            _inherits(Hoc, _React$Component);

            function Hoc(props) {
                _classCallCheck(this, Hoc);

                // this.state = {data: [{"id": 1, "name": "xuwb"},
                //                    {"id": 2, "name": "jack"},
                //                    {"id": 3, "name": "tom"},
                //                    {"id": 4, "name": "bean"}]};

                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Hoc).call(this, props));

                _this.store = Reflux.connect(TableStore, 'data');
                return _this;
            }

            _createClass(Hoc, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    // return this.store.componentDidMount
                }
            }, {
                key: 'render',
                value: function render() {
                    return React.createElement(Wraper, _extends({}, this.props, this.state));
                }
            }]);

            return Hoc;
        }(React.Component);
    };
});