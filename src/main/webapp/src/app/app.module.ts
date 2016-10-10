import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';

import {SitesRunAppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [SitesRunAppComponent],
  bootstrap: [SitesRunAppComponent],
})
export class SitesRunAppModule { }
