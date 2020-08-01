import { AxisChart } from "../axis-chart";
import { ChartConfig, LineChartOptions } from "../interfaces/index";
export declare class LineChart extends AxisChart {
    constructor(holder: Element, chartConfigs: ChartConfig<LineChartOptions>);
    getComponents(): any[];
}
