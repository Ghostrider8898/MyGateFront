import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'
import { Observable, first } from 'rxjs';
import { envirnoment } from 'src/envirnoment/envirnoment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const request = new HttpParams()
      .set('userName', username)
      .set('password', password)
    const url = envirnoment.BaseUrl + '/Auth/login';
    return this.httpClient.post<any>(url, request);
  }

  signup(firstName: string, lastName: string, email: string, username: string, password: string): Observable<any> {
    const request = new HttpParams()
      .set('firstName', firstName)
      .set('lastName', lastName)
      .set('email', email)
      .set('userName', username)
      .set('password', password)
    //const url = envirnoment.BaseUrl + '/Auth/register';
    const url = 'https://localhost:7192/Auth/register';
    debugger;
    return this.httpClient.post<any>(url, request);
  }
}
