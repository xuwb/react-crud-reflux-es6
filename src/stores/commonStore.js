"use strict";

define(function (require, exports, module) {
    var Reflux = require('reflux');

    var commonStore = function commonStore(config) {

        Reflux.createStore(config);
    };
    return commonStore;
});