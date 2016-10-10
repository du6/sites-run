import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';

import {SitesRunAppComponent} from './app.component';
import {SitesRunToolbarComponent} from './toolbar.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [SitesRunAppComponent, SitesRunToolbarComponent],
  bootstrap: [SitesRunAppComponent, SitesRunToolbarComponent],
})
export class SitesRunAppModule { }
