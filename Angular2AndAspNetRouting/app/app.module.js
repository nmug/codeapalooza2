"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var pairing_component_1 = require("./pairing.component");
var about_component_1 = require("./about.component");
var routes = [
    { path: '', redirectTo: '/pairing', pathMatch: 'full' },
    { path: 'pairing', component: pairing_component_1.PairingComponent },
    { path: 'about', component: about_component_1.AboutComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
        ],
        declarations: [
            app_component_1.AppComponent,
            pairing_component_1.PairingComponent,
            about_component_1.AboutComponent,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map