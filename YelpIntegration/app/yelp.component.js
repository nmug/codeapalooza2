"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var yelp_service_1 = require("./yelp.service");
var YelpComponent = (function () {
    function YelpComponent(yelpService) {
        this.yelpService = yelpService;
        this.yelpInfo = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    YelpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yelpService
            .getAll()
            .subscribe(
        /* happy path */ function (p) { return _this.yelpInfo = p; }, 
        /* error path */ function (e) { return _this.errorMessage = e; }, 
        /* onComplete */ function () { return _this.isLoading = false; });
    };
    return YelpComponent;
}());
YelpComponent = __decorate([
    core_1.Component({
        selector: 'my-yelp',
        template: "\n\n    ",
    }),
    __metadata("design:paramtypes", [yelp_service_1.YelpService])
], YelpComponent);
exports.YelpComponent = YelpComponent;
//# sourceMappingURL=yelp.component.js.map