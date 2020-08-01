export declare const radarData: {
    product: string;
    feature: string;
    score: number;
}[];
export declare const radarOptions: {
    title: string;
    radar: {
        axes: {
            angle: string;
            value: string;
        };
    };
    data: {
        groupMapsTo: string;
    };
};
export declare const radarCenteredData: {
    product: string;
    feature: string;
    score: number;
}[];
export declare const radarCenteredOptions: {
    title: string;
    radar: {
        axes: {
            angle: string;
            value: string;
        };
        alignment: string;
    };
    data: {
        groupMapsTo: string;
    };
    legend: {
        alignment: string;
    };
};
export declare const radarWithMissingDataData: {
    group: string;
    key: string;
    value: number;
}[];
export declare const radarWithMissingDataOptions: {
    title: string;
};
export declare const radarDenseData: {
    month: string;
    activity: string;
    hoursAvg: number;
}[];
export declare const radarDenseOptions: {
    title: string;
    radar: {
        axes: {
            angle: string;
            value: string;
        };
    };
    data: {
        groupMapsTo: string;
    };
};
