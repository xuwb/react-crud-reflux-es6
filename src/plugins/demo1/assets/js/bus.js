"use strict";

define(function (require, exports, module) {
    var limit = require('common/limit2.0');

    var bus = {
        propsPreset: function propsPreset(props, callback) {
            return limit.compose(function (props) {
                limit.each(props.__specalAttr, function (val) {
                    delete props[val];
                });
                delete props.__specalAttr;
                return props;
            }, function (props) {
                return callback(props);
            })(props);
        }
    };
    return bus;
});