import { PieChartModel } from "../model-pie";
import { Chart } from "../chart";
import { ChartConfig, PieChartOptions } from "../interfaces/index";
export declare class PieChart extends Chart {
    model: PieChartModel;
    constructor(holder: Element, chartConfigs: ChartConfig<PieChartOptions>, extending?: boolean);
    getComponents(): any[];
}
