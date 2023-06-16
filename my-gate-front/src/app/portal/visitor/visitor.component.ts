import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {
  displayedColumns: string[] = ['fullName', 'email', 'phoneNumber','flatNumber','inTime','outTime','purposeOfVisit','actions'];
  dataSource = flatOnwerData;

  constructor(private portalService: PortalService) { }

  ngOnInit() {
    this.portalService.getVisitorList()
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
  inTime: string;
  outTime: string;
  purposeOfVisit: string
}

const flatOnwerData: FlatOnwerElements[] = [
  { fullName: "Krutika Pardeshi",email:'krutika2519@gmail.com', phoneNumber: 1234567890, flatNumber: 'A-101',inTime: "11:00AM",outTime:'12:00PM',purposeOfVisit:"Guest Visit" },
];
