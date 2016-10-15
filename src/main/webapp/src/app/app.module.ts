import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Routes, RouterModule}   from '@angular/router';

import {SitesRunAppComponent} from './app.component';
import {MySitesComponent} from './my-sites/my-sites.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
 { path: '_my', component: MySitesComponent },
 { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [SitesRunAppComponent, MySitesComponent, HomeComponent],
  bootstrap: [SitesRunAppComponent],
})
export class SitesRunAppModule { }
