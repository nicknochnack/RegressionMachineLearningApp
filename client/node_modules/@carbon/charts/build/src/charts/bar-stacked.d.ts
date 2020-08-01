import { AxisChart } from "../axis-chart";
import { ChartConfig, ScatterChartOptions } from "../interfaces/index";
export declare class StackedBarChart extends AxisChart {
    constructor(holder: Element, chartConfigs: ChartConfig<ScatterChartOptions>);
    getComponents(): any[];
}
