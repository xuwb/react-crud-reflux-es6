"use strict";

define(function (require, exports, module) {
    var Reflux = require('reflux');

    var Rex = /on([A-Z])(\w*)$/;

    return function (config) {
        var Actions = Reflux.createActions(Object.keys(config).filter(function (val) {
            return Rex.test(val);
        }).map(function (val) {
            return val.replace(Rex, function (a0, a1, a2) {
                return a1.toLowerCase() + a2;
            });
        }));

        config.listenables = [Actions];

        // 获取component及其子组件中所有refs组件
        config.getRefsByName = function (component, callback) {
            if (!component) return null;

            var refList = [];

            for (var key in component.refs) {
                refList.push({ key: key, value: component.refs[key] });
            }
            while (refList.length) {
                // console.log(refList.slice());
                var curItem = refList.shift();
                if (callback(curItem) == false) return;
                // if(curItem.key == ref) {
                //     finalRef = curItem.value;
                //     break;
                // }
                if (curItem.value.refs) {
                    for (var ikey in curItem.value.refs) {
                        refList.unshift({ key: ikey, value: curItem.value.refs[ikey] });
                    }
                }
            }

            // while(component && component.refs) {
            //     if(component.refs[ref]) {
            //         finalRef = component.refs[ref];
            //         break;
            //     }
            //     component = component.refs[Object.keys(component.refs)[0]];
            // }
        };
        // config.update = () => {
        //     return this.getInitialState();
        // };

        var Store = Reflux.createStore(config);

        return { Actions: Actions, Store: Store };
    };
});