var Service = /** @class */ (function () {
    function Service(model, services) {
        this.model = model;
        this.services = services;
        this.init();
    }
    Service.prototype.init = function () { };
    Service.prototype.update = function () { };
    // Used to pass down information to the components
    Service.prototype.setModel = function (newObj) {
        this.model = newObj;
    };
    // Used to pass down services to the components
    Service.prototype.setServices = function (newObj) {
        this.services = newObj;
    };
    return Service;
}());
export { Service };
//# sourceMappingURL=../../src/services/service.js.map