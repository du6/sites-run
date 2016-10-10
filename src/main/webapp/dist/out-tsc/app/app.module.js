import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { SitesRunAppComponent } from './app.component';
import { SitesRunToolbarComponent } from './toolbar.component';
export var SitesRunAppModule = (function () {
    function SitesRunAppModule() {
    }
    SitesRunAppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        MaterialModule.forRoot(),
                    ],
                    declarations: [SitesRunAppComponent, SitesRunToolbarComponent],
                    bootstrap: [SitesRunAppComponent, SitesRunToolbarComponent],
                },] },
    ];
    /** @nocollapse */
    SitesRunAppModule.ctorParameters = [];
    return SitesRunAppModule;
}());
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/app/app.module.js.map