"use strict";

define(function (require, exports, module) {

    var React = require('react'),
        ReactDOM = require('reactDom'),
        DataTable = require('./dataTable'),
        InfoBox = require('./infoBox');

    ReactDOM.render(React.createElement(
        'div',
        null,
        React.createElement(DataTable, null)
    ), document.getElementById('main'));
});