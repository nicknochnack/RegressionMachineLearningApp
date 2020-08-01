import { Pie } from "./pie";
export declare class Donut extends Pie {
    type: string;
    render(animate?: boolean): void;
    getInnerRadius(): number;
    centerNumberTween(d3Ref: any): (t: any) => void;
}
