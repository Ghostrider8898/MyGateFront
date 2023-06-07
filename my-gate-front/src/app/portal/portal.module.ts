import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { FlatownerComponent } from './flatowner/flatowner.component';
import { SecurityComponent } from './security/security.component';
import { StaffComponent } from './staff/staff.component';
import { VisitorComponent } from './visitor/visitor.component';


@NgModule({
  declarations: [
    // FlatownerComponent,
    // SecurityComponent,
    // StaffComponent,
    // VisitorComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
