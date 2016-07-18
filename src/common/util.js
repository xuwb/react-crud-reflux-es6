'use strict';

define(function(require, exports, module) {
	var Promise = require('./promise');

	module.exports = {
		
		// obj:      时间字符串
		// showTime: 是否显示时分秒
		// IsMi:     是否显示毫秒
		formatDateTime: function(obj, showTime, IsMi) {   
	        var myDate = new Date(obj);   
	        var year = myDate.getFullYear();  
	        var month = ("0" + (myDate.getMonth() + 1)).slice(-2);  
	        var day = ("0" + myDate.getDate()).slice(-2);  
	        var h = ("0" + myDate.getHours()).slice(-2);  
	        var m = ("0" + myDate.getMinutes()).slice(-2);  
	        var s = ("0" + myDate.getSeconds()).slice(-2);   
	        var mi = ("00" + myDate.getMilliseconds()).slice(-3);  
	        if(!showTime) {
	        	return year + "-" + month + "-" + day;
	        }
	        if (IsMi) {   
	            return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;   
	        }   
	        else {   
	            return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s + "." + mi;   
	        }
	    },
	    // 返回 max 和 mix 之间的随机数
	    randomBy: function(max, mix) {
	    	var result = 0;
	    	switch(arguments.length) {
	    		case 1: 
	    			result = parseInt(Math.random() * max + 1);
	    			break;
	    		case 2: 
	    			result = parseInt(Math.random() * (max - mix + 1) + mix);
	    			break;
	    	}
	    	return result;
	    },
	    randomStr: function(len) {
	        var str = '';
	        for(var i = 0; i < len; i++) {
	            str += this.randomBy(10, 0);
	        }
	        return str;
	    },
	    objectSize: function(obj) {
	    	var t = typeof obj;
	    	if(t == 'string') return obj.length;
	    	else if(t == 'object') {
	    		var count = 0;
	    		for(var val in obj) {
	    			count++;
	    		}
	    		return count;
	    	}
	    	return false;
	    },
	    fetch: function(url) {
	    	var promise = new Promise(function(resolve, reject) {
	    		$.ajax({
	    			url: url,
	    			type: 'get',
	    			dataType: 'json',
	    			success: resolve,
	    			error: reject
	    		});
	    	});
	    	return promise;
	    }
	}
})