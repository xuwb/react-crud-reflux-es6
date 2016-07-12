"use strict";
define(function(require, exports, module){

    const React = require('react');
    const ReactDOM = require('reactDom');
    const Container = require('./container');

    ReactDOM.render(
        <Container />, 
        document.getElementById('main')
    )
});