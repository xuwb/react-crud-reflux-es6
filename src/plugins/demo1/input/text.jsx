"use strict";
/**
 * 模型
 */
define(function(require, exports, module) {

	// 依赖
	const React = require('react');
	const limit = require('common/limit2.0');
	const bus = require('../assets/js/bus');

	// 
	class View extends React.Component {
		clearAttr(){
			let me = this,
				props = me.props; 
			return bus.propsPreset(props, (props) => {
				return limit.map(props, function (val, key) {
					if(key === 'style'){
	                    val = limit.assign({
	                        marginRight: '0px',
	                        width: props.width,
	                        height: props.height,
	                        boxSizing: 'border-box'
	                    }, val);
	                };
	                return val;
	            });
			});
		}
		render(){ 
			let me = this,
				props = me.clearAttr();
			return (
				<div className="kuma-form-item" style={ {padding: '0px'} }>
					<input {...props}/>
				</div>
			);
		}
		// 属性
		static defaultProps = {
			"width": '200px',
			"height": '30px',
			"__specalAttr": ["width", "height"],
			"style": {},
			"data-skip-hidden": "false",
			"data-need": "validator",
			"data-errormessage-required": "请输入当前表单的值。",
			"className": "fn-input-text fn-input-text-sm kuma-input",
			"type": "text"
		}
	};

	return View;

});