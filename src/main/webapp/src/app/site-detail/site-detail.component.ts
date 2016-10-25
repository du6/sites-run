import {
  Input,
  Output,
  Component, 
  EventEmitter, 
  ViewContainerRef
} from '@angular/core';

import {Site} from '../common/site';
import {GapiService} from '../services/gapi.service';
import {ToastService} from '../services/toast.service';

@Component({
  selector: 'sites-run-site-detail',
  templateUrl: 'site-detail.component.html',
  styleUrls: ['site-detail.component.scss'],
})
export class SiteDetailComponent {
  @Input() site: Site;
  @Output() siteDeleted: EventEmitter<Site> = new EventEmitter();

  constructor(
    private gapi_: GapiService,
    private viewContainerRef_: ViewContainerRef,
    private toast_: ToastService) {
  }

  deleteSite() {
    this.gapi_.deleteSite(this.site.websafeKey)
        .then(() => {
          this.siteDeleted.emit(this.site);
          this.toast_.actionSuccessToast(`Site "${this.site.name}" has been deleted.`, this.viewContainerRef_);
        }, () => this.toast_.actionFailureToast('Site deletion failed!', this.viewContainerRef_));
  }
}
