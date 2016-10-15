import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {RouterModule}   from '@angular/router';

import {SitesRunAppComponent} from './app.component';
import {MySitesComponent} from './my-sites/my-sites.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '_my', component: MySitesComponent },
      { path: '', component: HomeComponent },
    ])
  ],
  declarations: [SitesRunAppComponent, MySitesComponent, HomeComponent],
  bootstrap: [SitesRunAppComponent],
})
export class SitesRunAppModule { }
