import {Component} from "@angular/core";
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {FirstComponent} from "./first-component";
import {SecondComponent} from "./second-component"


@Component({
    selector: "my-app",
    directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
    template: `<page-router-outlet></page-router-outlet>`,
})
@RouteConfig([
    { path: '/first', component: FirstComponent, name: 'First', useAsDefault: true },
    { path: '/second', component: SecondComponent, name: 'Second' },
])
export class AppComponent {}

//nativeScriptBootstrap(AppComponent, [NS_ROUTER_PROVIDERS]);