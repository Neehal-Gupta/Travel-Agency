import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  mybookingsArray: any = [];
  empty: any = 1;
  deleteId: number = 0;
  constructor(private bookingservice: BookingsService, private router: Router, private transport: TransportService) {

    if (this.transport.curUser.name == "") {
      this.router.navigateByUrl("login");
    }

    else {
      
      this.bookingservice.getBookingsApi(this.transport.curUser.id).subscribe((result) => {
      console.log(result);
        
      this.mybookingsArray = result;
      this.empty = !this.mybookingsArray.length;
      });

    }

  }
  delete(dId: number) {

    this.bookingservice.deleteBookingApi(dId).subscribe((result) => {
      console.log(result);
    });
    
  }


  ngOnInit(): void {
  }

}
