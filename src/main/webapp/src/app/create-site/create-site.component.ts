import {Input, Output, Component, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {GapiService} from '../services/gapi.service';
import {Site} from '../common/site';
import {Mode} from '../common/mode';

@Component({
  selector: 'sites-run-create-site',
  templateUrl: 'create-site.component.html',
  styleUrls: ['create-site.component.scss'],
})
export class CreateSiteComponent {
  @Input() mode: Mode;
  @Output() siteSaved: EventEmitter<Site> = new EventEmitter();
  siteForm: FormGroup;
  name: FormControl;
  source: FormControl;
  description: FormControl;

  constructor(private fb_: FormBuilder, private gapi_: GapiService) {
    this.name = new FormControl('', this.validName);
    this.source = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.maxLength(500));

    this.siteForm = fb_.group({
      name: this.name,
      source: this.source,
      description: this.description,
    });
  }

  validName(c: FormControl): {[key: string]: any} {
    if (!c.value || c.value.length == 0) {
      return {
        empty: true
      }
    } else if (c.value.charAt(0) != '_') {
      return null;
    } else {
      return {
        startWith_: true
      }
    }
  }

  saveSite(event) {
    const site = new Site();
    site.name = this.name.value;
    site.source = this.source.value;
    site.description = this.description.value;
    this.siteForm.reset();
    this.gapi_.createSite(site).then(() => {
      this.siteSaved.emit(site);
    });
  }
}
