import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { SignupComponent } from '../signup/signup.component';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private _dialog : MatDialog,
    private router: Router,
    private userService: UserService){}

    CloseLoginDialog(){
      this._dialog.closeAll();
    }
    OpenSignUp(){
      this._dialog.closeAll();
      this._dialog.open(SignupComponent, {
        height: '600px',
      });
    }
   ngOnInit() : void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })   
  }

  login(){
     if(this.loginForm.valid){
      this._dialog.closeAll();
      this.userService.setUser(this.loginForm.value);
      this.authService.login(this.loginForm.value)
      .subscribe({
        next: (Response: any) => {
          console.log(Response);
          this.router.navigate(["/portal"])
        },
        error: (Error : any) => {
          console.log(HttpErrorResponse);
        }
      });
  }
     else{
       this.validateAllFormFields(this.loginForm);
     }
  }

  private validateAllFormFields(formGroup : FormGroup){
    Object.keys(formGroup.controls).forEach(field=> {
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if( control instanceof FormGroup){
        this.validateAllFormFields(control);
      }
    })
  }
}
