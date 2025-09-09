import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ENVIRONMENTS } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  environment = '';

  constructor() {
    console.log('test');
    const { host } = window.location;

    if (host == 'localhost:4202') {
      this.environment = environment.environment;
    } else if (host == 'ipds1.cloware.in') {
      this.environment = ENVIRONMENTS.DEV;
    } else if (host == 'uatipds1.cloware.in') {
      this.environment = ENVIRONMENTS.UAT;
    } else if (host == 'ipdsbeta1.tataaig.com') {
      this.environment = ENVIRONMENTS.PREPROD;
    } else if (host == 'sellonline.tataaig.com') {
      this.environment = ENVIRONMENTS.PROD;
    }

    if (this.environment == ENVIRONMENTS.DEV) {
      console.log('Dev Environment');
    } else if (this.environment == ENVIRONMENTS.UAT) {
      console.log('UAT Environment');
    } else if (this.environment == ENVIRONMENTS.PREPROD) {
      console.log('Preprod Environment');
    } else if (this.environment == ENVIRONMENTS.PROD) {
      console.log('Prod Environment');
    }
  }
}
