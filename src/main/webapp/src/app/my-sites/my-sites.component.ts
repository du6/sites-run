import {Component} from '@angular/core';

import {Mode} from '../common/mode';
import {Site} from '../common/site';
import {GapiService} from '../services/gapi.service';

@Component({
  selector: 'sites-run-my',
  templateUrl: 'my-sites.component.html',
  styleUrls: ['my-sites.component.scss'],
})
export class MySitesComponent {
  mode: Mode;
  loading: boolean;
  sites: Site[];

  constructor(private gapi_: GapiService) {
    this.mode = Mode.USER;
    this.sites = [];
  }

  ngOnInit() {
    this.loadSites();
  }

  loadSites() {
    this.loading = true;
    this.gapi_.loadSitesCreatedByUser()
        .then((items) => this.sites = items)
        .then(() => this.loading = false);
  }

  onSiteSave(site: Site) {
    this.addSite_(site);
  }

  private addSite_(site: Site) {
    this.sites.unshift(site);
  }
}
