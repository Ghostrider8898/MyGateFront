import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PortalComponent } from '../portal/portal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      //{path: '', component: LoginComponent},
      // {path: 'login', component: LoginComponent},
      // {path: 'signup', component: SignupComponent}
      {path: 'portal', component: PortalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
