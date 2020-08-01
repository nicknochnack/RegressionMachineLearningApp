import { AxisChart } from "../axis-chart";
import { ChartConfig, BubbleChartOptions } from "../interfaces/index";
export declare class BubbleChart extends AxisChart {
    constructor(holder: Element, chartConfigs: ChartConfig<BubbleChartOptions>);
    getComponents(): any[];
}
