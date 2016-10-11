import { Component } from '@angular/core';
export var SitesRunAppComponent = (function () {
    function SitesRunAppComponent() {
        this.auth2 = gapi.auth2.init({
            client_id: '949964552538-v4so8dnqrjrt7d8t8fpr497t60qqa8sh.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
    }
    SitesRunAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sites-run-app',
                    templateUrl: 'app.component.html',
                    styleUrls: ['app.component.css'],
                },] },
    ];
    /** @nocollapse */
    SitesRunAppComponent.ctorParameters = [];
    return SitesRunAppComponent;
}());
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/app/app.component.js.map