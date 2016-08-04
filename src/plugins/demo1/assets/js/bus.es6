"use strict";
define((require, exports, module) => {
    const limit = require('common/limit2.0');

    let bus = {
        propsPreset: (props, callback) => {
            return limit.compose( (props) => {
                limit.each(props.__specalAttr, (val) => {
                    delete props[val]
                });
                delete props.__specalAttr;
                return props;
            }, (props) => {
                return callback(props);
            })(props);
        }
    }
    return bus;
})