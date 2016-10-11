import {Component} from '@angular/core';

// Google's login API namespace
declare var gapi: any;

@Component({
  selector: 'sites-run-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class SitesRunAppComponent {
  auth2: any;

  constructor() {
    this.auth2 = gapi.auth2.getAuthInstance();
  }
}
