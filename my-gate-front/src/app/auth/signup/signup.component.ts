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
}
