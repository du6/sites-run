import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
import { platformBrowser } from '@angular/platform-browser';
import { MaterialAppModuleNgFactory } from './aot/app/app.module.ngfactory';
gapi.client.load('sitesRunApi', 'v1', null, '//' + window.location.host + '/_ah/api');
platformBrowser().bootstrapModuleFactory(MaterialAppModuleNgFactory);
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/main.js.map