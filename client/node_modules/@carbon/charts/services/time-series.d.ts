import { TimeScaleOptions } from "../interfaces/axis-scales";
export declare const TIME_INTERVALS: (string | number)[][];
export declare function isTickPrimary(tick: number, i: number, interval: string, showDayName: boolean): boolean;
export declare function formatTick(tick: number, i: number, interval: string, timeScaleOptions: TimeScaleOptions): string;
export declare function getTimeformats(timestamp: number): {
    M: number;
    d: number;
    H: number;
    m: number;
    s: number;
};
export declare function computeTimeIntervalName(ticks: number[]): string;
