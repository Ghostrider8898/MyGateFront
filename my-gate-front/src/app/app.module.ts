import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PortalComponent } from './portal/portal.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardComponent } from './portal/dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { FlatownerComponent } from './portal/flatowner/flatowner.component';
import { SecurityComponent } from './portal/security/security.component';
import { StaffComponent } from './portal/staff/staff.component';
import { VisitorComponent } from './portal/visitor/visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    PortalComponent,
    DashboardComponent,
    FlatownerComponent,
    SecurityComponent,
    StaffComponent,
    VisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent],
  entryComponents: [FlatownerComponent]
})
export class AppModule { }
