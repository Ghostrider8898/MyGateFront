import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { SignupComponent } from '../signup/signup.component';


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
    private _dialog : MatDialog){}

    CloseLoginDialog(){
      this._dialog.closeAll();
    }

   ngOnInit() : void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })   
  }

  login(){
     if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      .subscribe({
        next: (Response: any) => {
          console.log(Response);
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
