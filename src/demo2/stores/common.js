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

        config.getRefsByName = function (component, ref) {
            var finalRef = null;

            while (component && component.refs) {
                if (component.refs[ref]) {
                    finalRef = component.refs[ref];
                    break;
                }
                component = component.refs[Object.keys(component.refs)[0]];
            }

            return finalRef;
        };
        // config.update = () => {
        //     return this.getInitialState();
        // };

        var Store = Reflux.createStore(config);

        return { Actions: Actions, Store: Store };
    };
});