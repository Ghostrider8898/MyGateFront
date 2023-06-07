import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlatownerComponent } from './flatowner/flatowner.component';
import { SecurityComponent } from './security/security.component';
import { StaffComponent } from './staff/staff.component';
import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [
  {
    path: '', component: PortalComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'flatowner', component:FlatownerComponent},
      { path: 'security', component:SecurityComponent},
      { path: 'staff', component:StaffComponent},
      { path: 'visitor', component:VisitorComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
