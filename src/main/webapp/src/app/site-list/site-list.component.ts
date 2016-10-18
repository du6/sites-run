import {Input, Component} from '@angular/core';

import {Site} from '../common/site';
import {Mode} from '../common/mode';
import {AuthService} from '../services/auth.service';
import {GapiService} from '../services/gapi.service';

@Component({
  selector: 'sites-run-site-list',
  templateUrl: 'site-list.component.html',
  styleUrls: ['site-list.component.scss'],
})
export class SiteListComponent {
  @Input() mode: Mode;
  sites: Site[];
  loading: boolean;

  constructor(private auth_: AuthService, private gapi_: GapiService) {
    this.loading = true;
    gapi_.loadSitesCreatedByUser()
        .then((items) => this.sites = items)
        .then(() => this.loading = false);
  }
}
