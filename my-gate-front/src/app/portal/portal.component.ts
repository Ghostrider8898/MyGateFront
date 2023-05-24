import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { user } from '../core/models/user.model';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent{
  currentUser$: Subscription = Subscription.EMPTY;
  user: user | null = null;

  constructor(private userService: UserService){}

  ngOnInit() : void{
    this.currentUser$ = this.userService.currentUser$.subscribe((user: any) => {
      this.user = user;
    })
  }

}
