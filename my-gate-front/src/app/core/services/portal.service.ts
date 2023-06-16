import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envirnoment } from 'src/envirnoment/envirnoment';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(private httpClient: HttpClient) { }

  getFlatOwnerList(): Observable<any> {
    const url = envirnoment.BaseUrl + 'FlatOwner/GetFlatOwnerList';    
    return this.httpClient.get<any>(url);
  }

  getStaffList(): Observable<any> {
    const url = envirnoment.BaseUrl + 'Staff/GetStaffList';    
    return this.httpClient.get<any>(url);
  }

  getVisitorList(): Observable<any> {
    const url = envirnoment.BaseUrl + 'Visitor/GetVisitorList';    
    return this.httpClient.get<any>(url);
  }
}
