import {Component} from '@angular/core';

import {Mode} from '../common/mode'

@Component({
  selector: 'sites-run-my',
  templateUrl: 'my-sites.component.html',
  styleUrls: ['my-sites.component.scss'],
})
export class MySitesComponent {
  mode: Mode;

  constructor() {
    this.mode = Mode.USER;
  }
}
