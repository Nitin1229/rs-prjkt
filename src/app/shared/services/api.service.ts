import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ENVIRONMENTS } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
  DEV_CONFIG,
  PREPROD_CONFIG,
  PROD_CONFIG,
  UAT_CONFIG,
} from '../configurations/configuration';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  environment: string = '';
  public url: string = '';
  public loginUrl: string;
  public paymentUrl: string = '';
  public domain: string = '';
  public product_name = 'rs-prjkt';
  public domainUrl: string = '';
  public productId: string = '';

  commonPath: string = '';
  commonCssPath: string = '';
  commonJsPath: string = '';

  constructor(private readonly http: HttpClient) {
    this.loginUrl = '/ipdsv2/login/#/';
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
      const {
        url,
        domain,
        domainUrl,
        productId,
        commonPath,
        commonCssPath,
        commonJsPath,
      } = DEV_CONFIG;

      Object.assign(this, {
        url,
        domain,
        domainUrl,
        productId,
        commonPath,
        commonCssPath,
        commonJsPath,
      });
    } else if (this.environment == ENVIRONMENTS.UAT) {
      const {
        url,
        domain,
        domainUrl,
        productId,
        commonPath,
        commonCssPath,
        commonJsPath,
      } = UAT_CONFIG;

      Object.assign(this, {
        url,
        domain,
        domainUrl,
        productId,
        commonPath,
        commonCssPath,
        commonJsPath,
      });
    } else if (this.environment == ENVIRONMENTS.PREPROD) {
      const {
        url,
        domain,
        domainUrl,
        productId,
        commonPath,
        commonCssPath,
        commonJsPath,
      } = PREPROD_CONFIG;

      Object.assign(this, {
        url,
        domain,
        domainUrl,
        productId,
        commonPath,
        commonCssPath,
        commonJsPath,
      });
    } else if (this.environment == ENVIRONMENTS.PROD) {
      const {
        url,
        domain,
        domainUrl,
        productId,
        commonPath,
        commonCssPath,
        commonJsPath,
      } = PROD_CONFIG;

      Object.assign(this, {
        url,
        domain,
        domainUrl,
        productId,
        commonPath,
        commonCssPath,
        commonJsPath,
      });
    }
  }

  /****  Common HTTP POST Method****/
  async httpPostMethod(url: string, parameter: any): Promise<any[]> {
    try {
      const response: any = await firstValueFrom(
        this.http.post(url, parameter, { observe: 'response' }),
      );
      const data = response['body'];
      return data;
    } catch (err: any) {
      throw new Error(err?.error || 'Server error');
    }
  }

  /****  Common HTTP Get Method****/
  async httpGetMethod(url: string): Promise<any[]> {
    try {
      const response: any = await firstValueFrom(
        this.http.post(url, { observe: 'response' }),
      );
      const data = response['body'];
      return data;
    } catch (err: any) {
      throw new Error(err?.error || 'Server error');
    }
  }

  /****  Common HTTP Delete Method****/
  async httpDeleteMethod(url: string): Promise<any[]> {
    try {
      const response: any = await firstValueFrom(
        this.http.delete(url, { observe: 'response' }),
      );
      const data = response['body'];
      return data;
    } catch (err: any) {
      throw new Error(err?.error || 'Server error');
    }
  }
}
