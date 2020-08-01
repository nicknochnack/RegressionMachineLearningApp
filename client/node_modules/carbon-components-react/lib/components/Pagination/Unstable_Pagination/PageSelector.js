"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _setupGetInstanceId = _interopRequireDefault(require("../../../tools/setupGetInstanceId"));

var _Select = _interopRequireDefault(require("../../Select"));

var _SelectItem = _interopRequireDefault(require("../../SelectItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var getInstanceId = (0, _setupGetInstanceId.default)();

function PageSelector(_ref) {
  var className = _ref.className,
      currentPage = _ref.currentPage,
      id = _ref.id,
      labelText = _ref.labelText,
      totalPages = _ref.totalPages,
      other = _objectWithoutProperties(_ref, ["className", "currentPage", "id", "labelText", "totalPages"]);

  var namespace = "".concat(prefix, "--unstable-pagination__page-selector");
  var instanceId = "".concat(namespace, "__select-").concat(getInstanceId());

  var renderPages = function renderPages(total) {
    var pages = [];

    for (var counter = 1; counter <= total; counter += 1) {
      pages.push( /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
        key: counter,
        value: counter,
        text: String(counter)
      }));
    }

    return pages;
  };

  return /*#__PURE__*/_react.default.createElement(_Select.default, _extends({
    className: (0, _classnames.default)(namespace, className),
    hideLabel: true,
    id: instanceId || id,
    inline: true,
    labelText: labelText,
    value: currentPage
  }, other), renderPages(totalPages));
}

PageSelector.propTypes = {
  /** Extra class names to add. */
  className: _propTypes.default.string,

  /** The current page. */
  currentPage: _propTypes.default.number.isRequired,

  /** The unique ID of this component instance. */
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** Translatable string to label the page selector element. */
  labelText: _propTypes.default.string,

  /**
   * Total number of pages.
   * This value is calculated using a valid `totalItems` prop passed to the parent `Unstable_Pagination`.
   */
  totalPages: _propTypes.default.number.isRequired
};
PageSelector.defaultProps = {
  className: null,
  id: 1,
  labelText: 'Current page number'
};
var _default = PageSelector;
exports.default = _default;