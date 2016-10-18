import { Injectable } from '@angular/core';

import {Site} from '../common/site';

// Google's login API namespace
declare var gapi: {client: {sitesRunApi: any}};

@Injectable()
export class GapiService {
  private gapi_: {client: {sitesRunApi: any}};

  constructor() {
    this.gapi_ = gapi;
  }

  loadSitesCreatedByUser(limit: number = 10): Promise<Site[]> {
    return new Promise((resolve,reject) => 
        this.gapi_.client.sitesRunApi.getSitesCreated(limit)
            .execute((resp) => {
              if (resp.error) {
                reject(resp.error);
              } else if (resp.result) {
                resolve(<Site[]> resp.result.items);
              }
            }));
  }
}
