import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {RouterModule}   from '@angular/router';

import {SitesRunAppComponent} from './app.component';
import {MySitesComponent} from './my-sites/my-sites.component';
import {HomeComponent} from './home/home.component';
import {RedirectComponent} from './redirect/redirect.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '_my', component: MySitesComponent },
      { path: '', component: HomeComponent },
      { path: '**', component: RedirectComponent }
    ])
  ],
  declarations: [SitesRunAppComponent, MySitesComponent, HomeComponent, RedirectComponent],
  bootstrap: [SitesRunAppComponent, MySitesComponent, HomeComponent, RedirectComponent],
})
export class SitesRunAppModule { }
