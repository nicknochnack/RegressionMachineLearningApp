import { PieChart } from "./pie";
import { ChartConfig, PieChartOptions } from "../interfaces/index";
export declare class DonutChart extends PieChart {
    constructor(holder: Element, chartConfigs: ChartConfig<PieChartOptions>);
    getComponents(): any[];
}
