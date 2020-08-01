import { ChartModel } from "../model";
export declare class Service {
    protected model: ChartModel;
    protected services: any;
    constructor(model: ChartModel, services: any);
    init(): void;
    update(): void;
    setModel(newObj: any): void;
    setServices(newObj: any): void;
}
