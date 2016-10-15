import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

// Google's login API namespace
declare var gapi: any;

@Component({
  selector: 'sites-run-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class SitesRunAppComponent {
  auth2: any;

  constructor(private router_: Router, private location_: Location) {
    this.auth2 = gapi.auth2.getAuthInstance();
    if (this.auth2.isSignedIn.get()) {
      this.location_.go('/_my');
    } else {
      this.location_.go('/');
    }
  }

  signIn() {
    this.auth2.signIn().then(() => this.router_.navigate(['/_my']));
  }

  signOut() {
    this.auth2.signOut().then(() => this.router_.navigate(['/']));
  }
}
