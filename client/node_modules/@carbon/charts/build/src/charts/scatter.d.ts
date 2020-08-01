import { AxisChart } from "../axis-chart";
import { ChartConfig, ScatterChartOptions } from "../interfaces/index";
export declare class ScatterChart extends AxisChart {
    constructor(holder: Element, chartConfigs: ChartConfig<ScatterChartOptions>);
    getComponents(): any[];
}
