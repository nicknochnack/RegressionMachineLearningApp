var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

import { DonutChart as DC } from "@carbon/charts";
import BaseChart from "./base-chart";

var DonutChart = function (_BaseChart) {
	_inherits(DonutChart, _BaseChart);

	function DonutChart() {
		_classCallCheck(this, DonutChart);

		return _possibleConstructorReturn(this, (DonutChart.__proto__ || Object.getPrototypeOf(DonutChart)).apply(this, arguments));
	}

	_createClass(DonutChart, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.chart = new DC(this.chartRef, {
				data: this.props.data,
				options: this.props.options
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement("div", {
				ref: function ref(chartRef) {
					return _this2.chartRef = chartRef;
				},
				className: "chart-holder" });
		}
	}]);

	return DonutChart;
}(BaseChart);

export default DonutChart;