"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDownshiftProps = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Create an adapter that converts an object of props with potentially deprecated
 * prop names to the replacement prop names in a newer version. Useful for guarding
 * against breaking changes when a prop has been renamed
 *
 * @param {Array} spec - an array of options which specify a text or regex
 * matcher alongside a replacement if there is a match
 * @returns {Function}
 */
function createPropAdapter(spec) {
  // if props aren't passed in we should default the prop to empty object
  return function () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var output = {};
    Object.keys(input).forEach(function (key) {
      var match = spec.find(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            regex = _ref2[0];

        return key.match(regex);
      });

      if (match) {
        var _match = _slicedToArray(match, 2),
            regex = _match[0],
            replacer = _match[1];

        output[key.replace(regex, replacer)] = input[key];
        return;
      }

      output[key] = input[key];
    });
    return output;
  };
}
/**
 * TODO: REMOVE IN v11
 * props staring with "default..." were changed to "initial..." in Downshift v3
 *
 * @see https://github.com/downshift-js/downshift/releases/tag/v3.0.0
 */


var mapDownshiftProps = createPropAdapter([[/^default/g, 'initial']]);
exports.mapDownshiftProps = mapDownshiftProps;