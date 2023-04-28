import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { envirnoment } from 'src/envirnoment/envirnoment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username : string, password : string): Observable<any>{
    const request = new HttpParams()
    .set('userName', username)
    .set('password', password)
    const url = envirnoment.BaseUrl + '/Auth/login';
    return this.httpClient.post<any>(url, request);
}
}
