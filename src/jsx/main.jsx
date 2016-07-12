"use strict";
define(function(require, exports, module){

    const React = require('react'),
          ReactDOM = require('reactDom'),
          DataTable = require('./dataTable'),
          InfoBox = require('./infoBox');

    ReactDOM.render(
        <div>
            <DataTable />
        </div>, 
        document.getElementById('main')
    )
});