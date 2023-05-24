import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUpdated$ : BehaviorSubject<any> = new BehaviorSubject({});

  currentUser$ = this.userUpdated$.asObservable();
  constructor() { }

  setUser(user: any){
    this.userUpdated$.next(user);
  }
}
