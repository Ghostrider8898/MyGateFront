import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'
import { Observable, first } from 'rxjs';
import { envirnoment } from 'src/envirnoment/envirnoment';
import { user } from '../models/user.model';
import { loginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(login:any): Observable<any> {
    // const request = new HttpParams()
    //   .set('userName', login.userName)
    //   .set('password', login.password)
    const url = 'https://localhost:7192/Auth/login';//envirnoment.BaseUrl + '/Auth/login';
    
    return this.httpClient.post<any>(url,login);
  }

  signup(signup:any): Observable<any> {
   
    //const url = envirnoment.BaseUrl + '/Auth/register';
    const url = 'https://localhost:7192/Auth/register';
    return this.httpClient.post<user>(url, signup);
  }
}
