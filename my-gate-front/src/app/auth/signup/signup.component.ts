import { Dialog } from '@angular/cdk/dialog';
import { Time } from '@angular/common';
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
  isVisitor : boolean = false;
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
  DefaultTime : string = new Date().toString().split(' ')[4];
  isGeneratePass: boolean = false;

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
      email: ['', Validators.required, Validators.email],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber : ['',[Validators.required, Validators.maxLength(10)]],
      dateOfBirth : ['', Validators.required],
      aadharCardNo : ['', [Validators.required, Validators.maxLength(10)]],
      gender : ['', Validators.required],
      userType : ['', Validators.required],
      flatNumber : [''],
      sCitizens : [''],
      pets : [''],
      flatNumberforStaff : [''],
      staffShift : [''],
      inTime : [''],
      outTime : [''],
      vehicleNo: [''],
      expiryDate:[''],
      flatNoForPass:[''],
      visitingPurpose:[''],
      userId:[0],
      flatNoForVisitor:['']
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
    if(value === '2'){
      this.isFlatOwner = true;
      this.isStaff = false;
      this.isVisitor = false;
      this.isGeneratePass = false;
    }
    else if( value === '3'){
      this.isStaff = true;
      this.isFlatOwner = false;
      this.isVisitor = false;
      this.isGeneratePass = false;
    }
    else if( value === '5'){
      this.isStaff = false;
      this.isFlatOwner = false;
      this.isVisitor = true;
      this.isGeneratePass = false;
    }
    else{
      this.isFlatOwner = false;
      this.isStaff = false;
      this.isVisitor = false;
      this.isGeneratePass = false;
    }    
 }

 generatePass(value : any){
  if(value === 'yes')
    this.isGeneratePass = true;
  else
    this.isGeneratePass = false;
}
}
