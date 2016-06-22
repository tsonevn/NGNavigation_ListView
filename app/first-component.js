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
var FirstComponent = (function () {
    function FirstComponent() {
        this.myItems = [];
    }
    FirstComponent.prototype.ngOnInit = function () {
        //this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    };
    FirstComponent.prototype.onItemTap = function (args) {
        console.log("------------------------ ItemTapped: " + args.index);
    };
    FirstComponent = __decorate([
        core_1.Component({
            selector: "first",
            directives: [ns_router_1.NS_ROUTER_DIRECTIVES],
            templateUrl: 'first.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=first-component.js.map