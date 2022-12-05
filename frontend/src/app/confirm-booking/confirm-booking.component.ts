import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { TransportService } from '../transport.service';


@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  constructor(private transport: TransportService, private router: Router, private bookingsService: BookingsService,) {

    if (this.transport.bookingData.start == "") {
      this.router.navigateByUrl("bookcab");
    }
  }

  start: string = this.transport.bookingData.start;
  end: string = this.transport.bookingData.end;
  depdate: string = this.transport.bookingData.depdate;
  arrdate: string = this.transport.bookingData.arrdate;
  carType: string = this.transport.bookingData.cartype;
  dist: number = this.transport.bookingData.dist = Math.round(Math.random() * 1000) + 100;
  price: number = this.transport.bookingData.price = Math.round(Math.random() * 10000) + 1000;

  confirm() {

    if (this.transport.curUser.name == "") {
      this.router.navigateByUrl("login");
    }
    else {

      this.transport.bookingData.userid = this.transport.curUser.id;
      this.bookingsService.bookingApi(this.transport.bookingData).subscribe((result) => {
        console.log(result);

        this.router.navigateByUrl("mybookings");
      });
    }



  }

  ngOnInit(): void {
  }

}
