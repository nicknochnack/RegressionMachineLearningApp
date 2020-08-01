import { Component } from "../component";
import { LayoutComponentChild, LayoutConfigs } from "../../interfaces/index";
import { ChartModel } from "../../model";
export declare class LayoutComponent extends Component {
    static instanceID: number;
    type: string;
    children: LayoutComponentChild[];
    private _instanceID;
    constructor(model: ChartModel, services: any, children: LayoutComponentChild[], configs?: LayoutConfigs);
    init(): void;
    getPreferedAndFixedSizeSum(): number;
    getNumOfStretchChildren(): number;
    render(animate?: boolean): void;
    setModel(newObj: any): void;
    setServices(newObj: any): void;
    destroy(): void;
}
