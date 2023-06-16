import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'
import { Observable, first } from 'rxjs';
import { envirnoment } from 'src/envirnoment/envirnoment';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(login:any): Observable<any> {
    const url = envirnoment.BaseUrl + 'Auth/login';    
    return this.httpClient.post<any>(url,login);
  }

  signup(signup:any): Observable<any> {
    const url = envirnoment.BaseUrl + 'Auth/Register';
    return this.httpClient.post<user>(url, signup);
  }
}
