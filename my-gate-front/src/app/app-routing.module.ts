import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  loadChildren : () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
},
{
  path: 'portal',
  loadChildren : () => import('./portal/portal-routing.module').then(m => m.PortalRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
