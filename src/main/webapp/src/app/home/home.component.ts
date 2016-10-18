import {Component} from '@angular/core';

import {Mode} from '../common/mode'

@Component({
  selector: 'sites-run-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  mode: Mode;

  constructor() {
    this.mode = Mode.ANONYMOUS;
  }
}