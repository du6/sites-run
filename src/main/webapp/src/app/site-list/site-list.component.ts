import {Input, Output, Component, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import { List } from 'immutable';

import {Site} from '../common/site';
import {Mode} from '../common/mode';

@Component({
  selector: 'sites-run-site-list',
  templateUrl: 'site-list.component.html',
  styleUrls: ['site-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteListComponent {
  @Input() mode: Mode;
  @Input() sites: List<Site>;
  @Output() siteDeleted: EventEmitter<Site> = new EventEmitter();

  deleteSite(site: Site) {
    this.siteDeleted.emit(site);
  }
}
