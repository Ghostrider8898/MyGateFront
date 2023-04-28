import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthServiceService){}

   ngOnInit() : void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })   
  }

  login(){
     if(this.loginForm.valid){
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.authService.login(username, password)
      .subscribe({
        next: (Response: any) => {
          console.log(Response);
        },
        error: (Error : any) => {
          console.log(Error);
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