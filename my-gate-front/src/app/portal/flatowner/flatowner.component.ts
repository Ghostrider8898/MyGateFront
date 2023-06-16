import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'app-flatowner',
  templateUrl: './flatowner.component.html',
  styleUrls: ['./flatowner.component.css']
})
export class FlatownerComponent {
  displayedColumns: string[] = ['fullName', 'email', 'phoneNumber','flatNumber','sCitizens','pets','actions'];
  dataSource = flatOnwerData;

  constructor(private portalService: PortalService) { }

  ngOnInit() {
    this.portalService.getFlatOwnerList()
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
  sCitizens: number;
  pets:number;
}

const flatOnwerData: FlatOnwerElements[] = [
  { fullName: "Krutika Pardeshi",email:'krutika2519@gmail.com', phoneNumber: 1234567890, flatNumber: 'A-101',sCitizens: 1, pets: 1 },
];


