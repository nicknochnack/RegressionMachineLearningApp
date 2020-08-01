import { Component } from "../component";
import { ScaleTypes } from "../../interfaces";
import { ChartModel } from "../../model";
export declare class Axis extends Component {
    type: string;
    margins: any;
    scale: any;
    scaleType: ScaleTypes;
    constructor(model: ChartModel, services: any, configs?: any);
    render(animate?: boolean): void;
    addEventListeners(): void;
    getInvisibleAxisRef(): any;
    getTitleRef(): any;
    getNumberOfFittingTicks(size: any, tickSize: any, spaceRatio: any): any;
    destroy(): void;
}
