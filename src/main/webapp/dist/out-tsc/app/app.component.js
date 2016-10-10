import { Component } from '@angular/core';
export var Material2AppAppComponent = (function () {
    function Material2AppAppComponent() {
        var _this = this;
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        // Update the value for the progress-bar on an interval.
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    Material2AppAppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            _this.auth2 = gapi.auth2.init({
                client_id: '949964552538-v4so8dnqrjrt7d8t8fpr497t60qqa8sh.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
            });
            _this.attachSignin(document.getElementById('signin2-button'));
        });
    };
    Material2AppAppComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            _this.userDisplayName = googleUser.getBasicProfile().getName();
            console.log(_this);
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    Material2AppAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'material2-app-app',
                    templateUrl: 'app.component.html',
                    styleUrls: ['app.component.css'],
                },] },
    ];
    /** @nocollapse */
    Material2AppAppComponent.ctorParameters = [];
    return Material2AppAppComponent;
}());
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/app/app.component.js.map