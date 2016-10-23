import {Input, Output, Component, EventEmitter, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {GapiService} from '../services/gapi.service';
import {ToastService} from '../services/toast.service';
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

  constructor(
    private fb_: FormBuilder, 
    private gapi_: GapiService,
    private toast_: ToastService,
    private viewContainerRef_: ViewContainerRef) {
    this.name = new FormControl('', this.validName);
    this.source = new FormControl('', this.validUrl);
    this.description = new FormControl('', Validators.maxLength(500));

    this.siteForm = fb_.group({
      name: this.name,
      source: this.source,
      description: this.description,
    });
  }

  validName(c: FormControl): {[key: string]: any} {
    if (!c.value || c.value.length == 0) {
      return {empty: true};
    } else if (c.value.charAt(0) != '_') {
      return null;
    } else {
      return {startWith_: true};
    }
  }

  validUrl(c: FormControl): {[key: string]: any} {
    const RegExp = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    if (!c.value || c.value.length == 0) {
      return {empty: true};
    } else if (RegExp.test(c.value)) {
        return null;
    } else {
        return {validationFail: true};
    }
  }

  saveSite(event) {
    const site = new Site();
    site.name = this.name.value;
    site.source = this.source.value;
    site.description = this.description.value;
    this.siteForm.reset();
    this.gapi_.createSite(site).then((createdSite) => {
      this.siteSaved.emit(createdSite);
      this.toast_.actionSuccessToast(`Site "${createdSite.name}" has been created.`, this.viewContainerRef_);
    }, () => this.toast_.actionFailureToast('Site creation failed!', this.viewContainerRef_));
  }
}
