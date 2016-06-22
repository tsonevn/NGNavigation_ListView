"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require('@angular/router-deprecated');
var router_1 = require("nativescript-angular/router");
var first_component_1 = require("./first-component");
var second_component_1 = require("./second-component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, router_1.NS_ROUTER_DIRECTIVES],
            template: "<page-router-outlet></page-router-outlet>",
        }),
        router_deprecated_1.RouteConfig([
            { path: '/first', component: first_component_1.FirstComponent, name: 'First', useAsDefault: true },
            { path: '/second', component: second_component_1.SecondComponent, name: 'Second' },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//nativeScriptBootstrap(AppComponent, [NS_ROUTER_PROVIDERS]); 
//# sourceMappingURL=app.component.js.map