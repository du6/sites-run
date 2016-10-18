import {Input, Component} from '@angular/core';

import {Site} from '../common/site';

@Component({
  selector: 'sites-run-site-detail',
  templateUrl: 'site-detail.component.html',
  styleUrls: ['site-detail.component.scss'],
})
export class SiteDetailComponent {
  @Input() site: Site;
}
