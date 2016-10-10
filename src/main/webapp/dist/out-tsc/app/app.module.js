import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { Material2AppAppComponent } from './app.component';
export var MaterialAppModule = (function () {
    function MaterialAppModule() {
    }
    MaterialAppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        MaterialModule.forRoot(),
                    ],
                    declarations: [Material2AppAppComponent],
                    bootstrap: [Material2AppAppComponent],
                },] },
    ];
    /** @nocollapse */
    MaterialAppModule.ctorParameters = [];
    return MaterialAppModule;
}());
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/app/app.module.js.map