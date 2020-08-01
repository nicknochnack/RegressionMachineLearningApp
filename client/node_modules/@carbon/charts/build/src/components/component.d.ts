import { ChartModel } from "../model";
export declare class Component {
    type: string;
    protected parent: any;
    protected configs: any;
    protected model: ChartModel;
    protected services: any;
    constructor(model: ChartModel, services: any, configs?: any);
    init(): void;
    render(animate?: boolean): void;
    destroy(): void;
    setModel(newObj: any): void;
    setServices(newObj: any): void;
    setParent(parent: any): void;
    getParent(): any;
    getContainerSVG(): any;
}
