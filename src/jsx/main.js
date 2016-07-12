"use strict";

define(function (require, exports, module) {

    var React = require('react');
    var ReactDOM = require('reactDom');
    var Container = require('./container');

    ReactDOM.render(React.createElement(Container, null), document.getElementById('main'));
});