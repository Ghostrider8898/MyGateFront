import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router){}
  NavigateToFlatOwnerList(): void{
    this.router.navigate(["portal/flatowner"]);
  }

  NavigateToSecurityList(): void{
    this.router.navigate(["/portal/security"]);
  }

  NavigateToVisitorList(): void{
    this.router.navigate(["/portal/visitor"]);
  }

  NavigateToStaffList(): void{
    this.router.navigate(["/portal/staff"]);
  }
}
