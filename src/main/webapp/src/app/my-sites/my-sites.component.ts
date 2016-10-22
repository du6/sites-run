import {Component, ChangeDetectorRef} from '@angular/core';
import { List } from 'immutable';

import {Mode} from '../common/mode';
import {Site} from '../common/site';
import {GapiService} from '../services/gapi.service';

@Component({
  selector: 'sites-run-my',
  templateUrl: 'my-sites.component.html',
  styleUrls: ['my-sites.component.scss'],
})
export class MySitesComponent {
  mode: Mode = Mode.USER;
  loading: boolean;
  sites: List<Site> = List<Site>();

  constructor(private gapi_: GapiService, private ref_: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadSites();
  }

  loadSites() {
    this.loading = true;
    this.gapi_.loadSitesCreatedByUser()
        .then((items) => this.sites = List<Site>(items))
        .then(() => this.loading = false)
        .then(() => this.ref_.detectChanges());
  }

  onSiteSave(site: Site) {
    this.addSite_(site);
  }

  private addSite_(site: Site) {
    this.sites.unshift(site);
  }
}
