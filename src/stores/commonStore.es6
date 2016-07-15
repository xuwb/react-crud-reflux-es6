"use strict";
define((require, exports, module) => {
    var Reflux = require('reflux');

    var Rex = /on(\w+)$/i;

    return (config) => {
        let Actions = Reflux.createActions(Object.keys(config).filter(function(val){
            return Rex.test(val);
        }).map(function(val) {return val.replace(Rex, $1)});

        config.listenables: [action];
        // config.store: this.getInitialState();

        let Store = Reflux.createStore(config);

        return {Actions, Store};
    }
})