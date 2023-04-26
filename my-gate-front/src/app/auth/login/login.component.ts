import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm = this.formBuilder.group({
    username : '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder){}

  OnSubmit() : void {

  }
}
