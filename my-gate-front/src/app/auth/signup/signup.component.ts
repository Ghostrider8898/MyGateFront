import { Dialog } from '@angular/cdk/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup;
  isFlatOwner : boolean = false;
  isStaff : boolean = false;
  flatNumbersList : any = [
      {
        id : 'A-101',
        value : 'A-101'
      },
      {
        id : 'A-102',
        value : 'A-102'
      },
      {
        id : 'A-103',
        value : 'A-103'
      }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _dialog : MatDialog
  ) { }

  CloseSignUoDialog() {
      this._dialog.closeAll();
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber : ['',[Validators.required, Validators.maxLength(10)]],
      dateOfBirth : ['', Validators.required],
      ardharCard : ['', [Validators.required, Validators.maxLength(10)]]
    })
  }

  signup() {
    if (this.signUpForm.valid) {
      this.authService.signup(this.signUpForm.value)
        .subscribe({
          next: (Response: any) => {
            console.log(Response);
          },
          error: (Error: any) => {
            console.log(HttpErrorResponse);
          }
        });
    }
    else {
      this.validateAllFormFields(this.signUpForm);
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }

  radioButtonChanged(value: any){
    if(value === 'flatowner'){
      this.isFlatOwner = true;
      this.isStaff = false;
    }
    else if( value === 'staff'){
      this.isStaff = true;
      this.isFlatOwner = false;
    }
    else{
      this.isFlatOwner = false;
      this.isStaff = false;
    }
    console.log(" Value is : ", value );
 }
}
