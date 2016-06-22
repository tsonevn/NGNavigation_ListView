"use strict";
var core_1 = require("@angular/core");
var ns_router_1 = require("nativescript-angular/router/ns-router");
var DataItem = (function () {
    function DataItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return DataItem;
}());
var SecondComponent = (function () {
    function SecondComponent() {
        this.myItems = [];
    }
    SecondComponent.prototype.ngOnInit = function () {
        //this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    };
    SecondComponent.prototype.onItemTap = function (args) {
        console.log("------------------------ ItemTapped: " + args.index);
    };
    SecondComponent = __decorate([
        core_1.Component({
            selector: "second",
            directives: [ns_router_1.NS_ROUTER_DIRECTIVES],
            templateUrl: "second.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second-component.js.map