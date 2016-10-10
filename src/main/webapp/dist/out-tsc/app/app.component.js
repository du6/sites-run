import { Component } from '@angular/core';
export var SitesRunAppComponent = (function () {
    function SitesRunAppComponent() {
        this.signInButtonId = 'signin2-button';
    }
    SitesRunAppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            _this.auth2 = gapi.auth2.init({
                client_id: '949964552538-v4so8dnqrjrt7d8t8fpr497t60qqa8sh.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
            });
            _this.attachSignin(document.getElementById(_this.signInButtonId));
        });
    };
    SitesRunAppComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            _this.userDisplayName = googleUser.getBasicProfile().getName();
            console.log(_this);
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
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