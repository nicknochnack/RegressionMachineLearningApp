import { blue, cyan, green, magenta, purple, red, teal } from "@carbon/colors";
var getColor = function (obj, shade) { return obj[shade]; };
export default {
    blue: function (shade) { return getColor(blue, shade); },
    cyan: function (shade) { return getColor(cyan, shade); },
    green: function (shade) { return getColor(green, shade); },
    magenta: function (shade) { return getColor(magenta, shade); },
    purple: function (shade) { return getColor(purple, shade); },
    red: function (shade) { return getColor(red, shade); },
    teal: function (shade) { return getColor(teal, shade); }
};
//# sourceMappingURL=../../src/services/colors.js.map