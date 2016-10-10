import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
import { platformBrowser } from '@angular/platform-browser';
import { SitesRunAppModuleNgFactory } from './aot/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(SitesRunAppModuleNgFactory);
//# sourceMappingURL=/Users/yuelindu/Projects/SitesRun/src/main/webapp/src/main.js.map