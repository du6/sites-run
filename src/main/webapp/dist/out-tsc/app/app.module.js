import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SitesRunAppComponent } from './app.component';
import { MySitesComponent } from './my-sites/my-sites.component';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './redirect/redirect.component';
export var SitesRunAppModule = (function () {
    function SitesRunAppModule() {
    }
    SitesRunAppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        MaterialModule.forRoot(),
                        RouterModule.forRoot([
                            { path: '_my', component: MySitesComponent },
                            { path: '', component: HomeComponent },
                            { path: '**', component: RedirectComponent }
                        ])
                    ],
                    declarations: [SitesRunAppComponent, MySitesComponent, HomeComponent, RedirectComponent],
                    bootstrap: [SitesRunAppComponent, MySitesComponent, HomeComponent, RedirectComponent],
                },] },
    ];
    /** @nocollapse */
    SitesRunAppModule.ctorParameters = [];
    return SitesRunAppModule;
}());
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/app/app.module.js.map