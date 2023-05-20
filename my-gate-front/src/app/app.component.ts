import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-gate-front';

  constructor(private _dialog: MatDialog){}

  openLoginMenu(){
    this._dialog.open(LoginComponent);
  }

  openSignUpMenu(){
    this._dialog.open(SignupComponent, {
      height: '600px',
    });
  }
}
