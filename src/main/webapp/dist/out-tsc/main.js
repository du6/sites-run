import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SitesRunAppModule } from './app/app.module';
gapi.load('auth2', function () {
    gapi.auth2.init({
        client_id: '949964552538-v4so8dnqrjrt7d8t8fpr497t60qqa8sh.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
    }).then(function () {
        //platformBrowser().bootstrapModuleFactory(SitesRunAppModuleNgFactory);
        platformBrowserDynamic().bootstrapModule(SitesRunAppModule);
    });
});
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/main.js.map