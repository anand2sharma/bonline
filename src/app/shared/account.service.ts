import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { accounts } from '../../data';
import { Account } from '../_interface/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress), this.generateHeaders());
  }

  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }
 
  private generateHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Mzg4Mzk0NzE2MzY3NGY1ZGNiODA4MjFlZjNhMTI2OWI='
      })
    }
  }
}
