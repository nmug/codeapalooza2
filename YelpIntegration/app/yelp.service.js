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
var http_1 = require("@angular/http");
var YelpService = (function () {
    function YelpService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:56919/api/Search/marble-brewery-westside-tap-room-albuquerque';
    }
    YelpService.prototype.getAll = function () {
        var yelpInfo$ = this.http
            .get("" + this.baseUrl)
            .map(mapYelpInfo);
        return yelpInfo$;
    };
    return YelpService;
}());
YelpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], YelpService);
exports.YelpService = YelpService;
function mapYelpInfo(response) {
    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(toYelpInfo);
}
function toYelpInfo(r) {
    var yelpinfo = ({
        id: r.id,
        name: r.name,
    });
    console.log('Parsed yelpinfo:', yelpinfo);
    return yelpinfo;
}
function mapYelpInfos(response) {
    // toPerson looks just like in the previous example
    return toYelpInfo(response.json());
}
//# sourceMappingURL=yelp.service.js.map