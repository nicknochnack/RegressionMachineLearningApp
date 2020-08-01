"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelection = useSelection;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useSelection(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      _ref$initialSelectedI = _ref.initialSelectedItems,
      initialSelectedItems = _ref$initialSelectedI === void 0 ? [] : _ref$initialSelectedI;
  var isMounted = (0, _react.useRef)(false);
  var savedOnChange = (0, _react.useRef)(onChange);

  var _useState = (0, _react.useState)(initialSelectedItems),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  var onItemChange = (0, _react.useCallback)(function (item) {
    if (disabled) {
      return;
    }

    var selectedIndex;
    selectedItems.forEach(function (selectedItem, index) {
      if ((0, _lodash.default)(selectedItem, item)) {
        selectedIndex = index;
      }
    });

    if (selectedIndex === undefined) {
      setSelectedItems(function (selectedItems) {
        return selectedItems.concat(item);
      });
      return;
    }

    setSelectedItems(function (selectedItems) {
      return removeAtIndex(selectedItems, selectedIndex);
    });
  }, [disabled, selectedItems]);
  var clearSelection = (0, _react.useCallback)(function () {
    if (disabled) {
      return;
    }

    setSelectedItems([]);
  }, [disabled]);
  (0, _react.useEffect)(function () {
    savedOnChange.current = onChange;
  }, [onChange]);
  (0, _react.useEffect)(function () {
    if (isMounted.current === true && savedOnChange.current) {
      savedOnChange.current({
        selectedItems: selectedItems
      });
    }
  }, [selectedItems]);
  (0, _react.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  return {
    selectedItems: selectedItems,
    onItemChange: onItemChange,
    clearSelection: clearSelection
  };
}

var Selection = /*#__PURE__*/function (_React$Component) {
  _inherits(Selection, _React$Component);

  var _super = _createSuper(Selection);

  function Selection(props) {
    var _this;

    _classCallCheck(this, Selection);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "internalSetState", function (stateToSet, callback) {
      return _this.setState(stateToSet, function () {
        if (callback) {
          callback();
        }

        if (_this.props.onChange) {
          _this.props.onChange(_this.state);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearSelection", function () {
      if (_this.props.disabled) {
        return;
      }

      _this.internalSetState({
        selectedItems: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectItem", function (item) {
      _this.internalSetState(function (state) {
        return {
          selectedItems: state.selectedItems.concat(item)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRemoveItem", function (index) {
      _this.internalSetState(function (state) {
        return {
          selectedItems: removeAtIndex(state.selectedItems, index)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnItemChange", function (item) {
      if (_this.props.disabled) {
        return;
      }

      var selectedItems = _this.state.selectedItems;
      var selectedIndex;
      selectedItems.forEach(function (selectedItem, index) {
        if ((0, _lodash.default)(selectedItem, item)) {
          selectedIndex = index;
        }
      });

      if (selectedIndex === undefined) {
        _this.handleSelectItem(item);

        return;
      }

      _this.handleRemoveItem(selectedIndex);
    });

    _this.state = {
      selectedItems: props.initialSelectedItems
    };
    return _this;
  }

  _createClass(Selection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          render = _this$props.render;
      var selectedItems = this.state.selectedItems;
      var renderProps = {
        selectedItems: selectedItems,
        onItemChange: this.handleOnItemChange,
        clearSelection: this.handleClearSelection
      };

      if (render !== undefined) {
        return render(renderProps);
      }

      if (children !== undefined) {
        return children(renderProps);
      }

      return null;
    }
  }]);

  return Selection;
}(_react.default.Component); // Generic utility for safely removing an element at a given index from an
// array.


exports.default = Selection;

_defineProperty(Selection, "propTypes", {
  children: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  initialSelectedItems: _propTypes.default.array.isRequired,
  onChange: _propTypes.default.func,
  render: _propTypes.default.func
});

_defineProperty(Selection, "defaultProps", {
  initialSelectedItems: []
});

var removeAtIndex = function removeAtIndex(array, index) {
  var result = array.slice();
  result.splice(index, 1);
  return result;
};