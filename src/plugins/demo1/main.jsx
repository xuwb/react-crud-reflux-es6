"use strict";
/**
 * 模型
 */
define(function(require, exports, module) {
	
	return class myWidget extends require('common/myReflux/widget') {
		getComponent(){
			return require('./index');
		}
	};

});