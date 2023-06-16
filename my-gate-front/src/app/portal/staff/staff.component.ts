import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  displayedColumns: string[] = ['fullName', 'email', 'phoneNumber','flatNumber','shift','actions'];
  dataSource = flatOnwerData;
  constructor(private portalService: PortalService) { }

  ngOnInit() {
    this.portalService.getStaffList()
      .subscribe({
        next: (Response: any) => {
          console.log(Response);
        },
        error: (Error: any) => {
          console.log(HttpErrorResponse);
        }
      });
  }
}

export interface FlatOnwerElements {
  fullName: string;
  email: string,
  phoneNumber: number;
  flatNumber: string;
  shift: string;
}

const flatOnwerData: FlatOnwerElements[] = [
  { fullName: "Krutika Pardeshi",email:'krutika2519@gmail.com', phoneNumber: 1234567890, flatNumber: 'A-101',shift: 'morning' },
];