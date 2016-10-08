import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

enableProdMode();

const platform = platformBrowserDynamic();
gapi.client.load('sitesRunApi', 'v1', null, '//' + window.location.host + '/_ah/api');
gapi.client.load('oauth2', 'v2', function () {
    platform.bootstrapModule(AppModule);
});
