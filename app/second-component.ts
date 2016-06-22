import {Component, ChangeDetectionStrategy, OnInit } from "@angular/core"

import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router/ns-router";

class DataItem {
    constructor(public id: number, public name: string) { }
}


@Component({
    selector: "second",
    directives: [NS_ROUTER_DIRECTIVES],
    templateUrl:"second.component.html",
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class SecondComponent implements OnInit  {


      public myItems: Array<DataItem>=[];
    private counter: number;

    ngOnInit() {
        //this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }
 }