var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Internal Imports
import { Service } from "../service";
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Events.prototype.init = function () {
        // Setup the event fragment on the DOM
        this.documentFragment = document.createDocumentFragment();
    };
    Events.prototype.addEventListener = function (type, listener) {
        // Need the casting to any here since typescript
        // Is expecting a function of type EventListenerOrEventListenerObject here
        // Which seems unreasonable
        this.documentFragment.addEventListener(type, listener);
    };
    Events.prototype.removeEventListener = function (type, listener) {
        // Need the casting to any here since typescript
        // Is expecting a function of type EventListenerOrEventListenerObject here
        // Which seems unreasonable
        this.documentFragment.removeEventListener(type, listener);
    };
    Events.prototype.dispatchEvent = function (eventType, eventDetail) {
        var newEvent;
        if (eventDetail) {
            newEvent = new CustomEvent(eventType, {
                detail: eventDetail
            });
        }
        else {
            newEvent = document.createEvent("Event");
            newEvent.initEvent(eventType, false, true);
        }
        this.documentFragment.dispatchEvent(newEvent);
    };
    return Events;
}(Service));
export { Events };
//# sourceMappingURL=../../../src/services/essentials/events.js.map