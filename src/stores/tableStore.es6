"use strict";
define((require, exports, module) => {
    var Reflux = require('reflux'),
        TableAction = require('actions/tableAction');

    return Reflux.createStore({
        listenables: [TableAction],
        init() {
            this.onFetch();
        },
        onFetch() {
            var data = {data: [{"id": 1, "name": "xuwb"}, 
                               {"id": 2, "name": "jack"}, 
                               {"id": 3, "name": "tom"}, 
                               {"id": 4, "name": "bean"}]};
            this.trigger(data);
        },
        onAddd() {

        },
        onDelete() {

        }
    })
})