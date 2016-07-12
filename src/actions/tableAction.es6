"use strict";
define((require, exports, module) =>{
    const Reflux = require('reflux');

    return Reflux.createActions([
        'fetch',
        'dataChange',
        'delete'
    ]);
})
