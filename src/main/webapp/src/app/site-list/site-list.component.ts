import {Input, Component} from '@angular/core';

import {Site} from '../common/site';
import {Mode} from '../common/mode';

@Component({
  selector: 'sites-run-site-list',
  templateUrl: 'site-list.component.html',
  styleUrls: ['site-list.component.scss'],
})
export class SiteListComponent {
  @Input() mode: Mode;
  @Input() sites: Site[];
}
