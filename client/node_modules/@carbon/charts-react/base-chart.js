var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

var BaseChart = function (_React$Component) {
	_inherits(BaseChart, _React$Component);

	function BaseChart(props) {
		_classCallCheck(this, BaseChart);

		var _this = _possibleConstructorReturn(this, (BaseChart.__proto__ || Object.getPrototypeOf(BaseChart)).call(this, props));

		var options = props.options,
		    data = props.data;

		if (!options) {
			console.error("Missing options!");
		}

		if (!data) {
			console.error("Missing data!");
		}

		_this.data = props.data || {};
		_this.options = props.options || {};

		Object.assign(_this, _this.chart);
		return _this;
	}

	_createClass(BaseChart, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.chart.model.setData(this.props.data);
			this.chart.model.setOptions(this.props.options);
		}
	}]);

	return BaseChart;
}(React.Component);

export default BaseChart;