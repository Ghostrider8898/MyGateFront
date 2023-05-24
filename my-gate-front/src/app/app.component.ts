import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Subscription } from 'rxjs';
import { user } from './core/models/user.model';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-gate-front';
  currentUser$: Subscription = Subscription.EMPTY;
  user: user | null = null;

  constructor(private _dialog: MatDialog,
    private userService : UserService){}

  openLoginMenu(){
    this._dialog.open(LoginComponent);
  }

  openSignUpMenu(){
    this._dialog.open(SignupComponent, {
      height: '600px',
    });
  }

  ngOnInit() : void{
    this.currentUser$ = this.userService.currentUser$.subscribe((user: any) => {
      this.user = user;
    })
  }
}
