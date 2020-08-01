import { CurveBundleFactory, CurveCardinalFactory, CurveCatmullRomFactory } from "d3-shape";
import { Service } from "./service";
export declare class Curves extends Service {
    curveTypes: {
        curveLinear: import("d3-shape").CurveFactory;
        curveLinearClosed: import("d3-shape").CurveFactory;
        curveBasis: import("d3-shape").CurveFactory;
        curveBasisClosed: import("d3-shape").CurveFactory;
        curveBasisOpen: import("d3-shape").CurveFactory;
        curveBundle: CurveBundleFactory;
        curveCardinal: CurveCardinalFactory;
        curveCardinalClosed: CurveCardinalFactory;
        curveCardinalOpen: CurveCardinalFactory;
        curveCatmullRom: CurveCatmullRomFactory;
        curveCatmullRomClosed: CurveCatmullRomFactory;
        curveCatmullRomOpen: CurveCatmullRomFactory;
        curveMonotoneX: import("d3-shape").CurveFactory;
        curveMonotoneY: import("d3-shape").CurveFactory;
        curveNatural: import("d3-shape").CurveFactory;
        curveStep: import("d3-shape").CurveFactory;
        curveStepAfter: import("d3-shape").CurveFactory;
        curveStepBefore: import("d3-shape").CurveFactory;
    };
    getD3Curve(): any;
}
