"use strict";
define((require, exports, module) => {
    const Reflux = require('reflux');

    const Rex = /on([A-Z])(\w*)$/;

    return (config) => {
        let Actions = Reflux.createActions(Object.keys(config).filter(function(val){
            return Rex.test(val);
        }).map(function(val) {
            return val.replace(Rex, function(a0, a1, a2) {
                return a1.toLowerCase() + a2;
            })})
        );

        config.listenables = [Actions];

        config.getRefsByName = (component, ref) => {
            var finalRef = null;

            while(component && component.refs) {
                if(component.refs[ref]) {
                    finalRef = component.refs[ref];
                    break;
                }
                component = component.refs[Object.keys(component.refs)[0]];
            }

            return finalRef;
        }
        // config.update = () => {
        //     return this.getInitialState();
        // };

        let Store = Reflux.createStore(config);

        return {Actions, Store};
    }
})