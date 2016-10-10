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

  userDisplayName: string;

  signInButtonId: string = 'signin2-button';

  constructor() {
  }

  ngAfterViewInit() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '949964552538-v4so8dnqrjrt7d8t8fpr497t60qqa8sh.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      this.attachSignin(document.getElementById(this.signInButtonId));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
        (googleUser) => {
          this.userDisplayName = googleUser.getBasicProfile().getName();
          console.log(this);
        }, (error) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }
}
