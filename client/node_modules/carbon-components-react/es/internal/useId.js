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
// This file was heavily inspired by Reach UI and their work on their auto-id
// package
// https://github.com/reach/reach-ui/blob/86a046f54d53b6420e392b3fa56dd991d9d4e458/packages/auto-id/src/index.ts
//
// The problem that this solves is an id mismatch when auto-generating
// ids on both the server and the client. When using server-side rendering,
// there can be the chance of a mismatch between what the server renders and
// what the client renders when the id value is auto-generated.
//
// To get around this, we set the initial value of the `id` to `null` and then
// conditionally use `useLayoutEffect` on the client and `useEffect` on the
// server. On the client, `useLayoutEffect` will patch up the id to the correct
// value. On the server, `useEffect` will not run.
//
// This ensures that we won't encounter a mismatch in ids between server and
// client, at the cost of runtime patching of the id value in
// `useLayoutEffect`
import { useEffect, useLayoutEffect, useState } from 'react';
import setupGetInstanceId from '../tools/setupGetInstanceId';
var getId = setupGetInstanceId();
var useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect;

function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

var serverHandoffCompleted = false;
/**
 * Generate a unique ID with an optional prefix prepended to it
 * @param {string} [prefix]
 * @returns {string}
 */

export function useId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';

  var _useState = useState(function () {
    if (serverHandoffCompleted) {
      return "".concat(prefix, "-").concat(getId());
    }

    return null;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  useIsomorphicLayoutEffect(function () {
    if (id === null) {
      setId("".concat(prefix, "-").concat(getId()));
    }
  }, [getId]);
  useEffect(function () {
    if (serverHandoffCompleted === false) {
      serverHandoffCompleted = true;
    }
  }, []);
  return id;
}