// import { Component } from '@angular/core';
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Component({
//     moduleId: module.id,
//     selector: 'my-app',    
//     template: `
//         <input type="text" [value]="food" />
//         <p>Sriracha sauce is great with {{ food }}</p>
//     `,
// })
// export class AppComponent 
// { 
//     food = 'kielbasa';
// }
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.food = 'kielbasa';
    }
    AppComponent.prototype.foodInput = function (event) {
        var target = event.target;
        this.food = target.value;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        template: "\n        <input type=\"text\" [value]=\"food\" (input)=\"foodInput($event)\"/>\n        <p>Sriracha sauce is great with {{ food }}</p>\n    ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map