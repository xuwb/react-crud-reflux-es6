"use strict";
define(function(require, exports, module) {
    var React = require('react');
    class InfoBox extends React.Component {
        render() {
            return (
                <tfoot>
                    <tr>
                        <td><input id='inputName' type="text" /></td>
                        <td><button className="JS_addBtn btn btn-default">添加</button></td>
                    </tr>
                </tfoot>
            )
        }
    }
    return InfoBox;
});