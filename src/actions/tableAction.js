"use strict";

define(function (require, exports, module) {
    var Reflux = require('reflux');

    return Reflux.createActions(['fetch', 'dataChange', 'delete']);
});