import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { booking } from "../bookingClass";
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-book-cab',
  templateUrl: './book-cab.component.html',
  styleUrls: ['./book-cab.component.css']
})
export class BookCabComponent implements OnInit {

  maxDate:string= ""; 
  constructor(private router: Router, private bookingsService: BookingsService, private transport: TransportService) {

      this.minDate = ""  +  this.today.getFullYear();
      this.minDate = this.minDate + "-" + (this.today.getMonth()+1);
      if(this.today.getDate()<10)
      {
        this.minDate = this.minDate + "-0" + this.today.getDate();
      }
      else{
        this.minDate = this.minDate + "-" + this.today.getDate();
      }


      var targetDate = new Date();
      targetDate=new Date(targetDate.setDate(targetDate.getDate() + 7));
      this.maxDate = ""  +  targetDate.getFullYear();
      this.maxDate = this.maxDate + "-" + (targetDate.getMonth()+1);
      if(this.today.getDate() +7 <10)
      {
        this.maxDate = this.maxDate + "-0" + targetDate.getDate();
      }
      else{
        this.maxDate = this.maxDate + "-" + targetDate.getDate();
      }

      console.log(this.maxDate);
   } 

  DateValid:number=0;
  defaultCar: string = "SUV";
  animator:string="";
  today: Date = new Date(new Date().toLocaleDateString('en-US'));
  minDate:String = ""
  Departure: Date = new Date();
  Arrival: Date = new Date();
  book(bookingObj: booking) {
    this.Departure = new Date(bookingObj.depdate);
    this.Arrival = new Date(bookingObj.arrdate);

    if (this.today.getTime() > this.Departure.getTime() || this.Arrival.getTime() < this.Departure.getTime()) {
        this.DateValid=1;
    }
    else{

    this.transport.bookingData.start = bookingObj.start;
    this.transport.bookingData.end = bookingObj.end;
    this.transport.bookingData.depdate = bookingObj.depdate;
    this.transport.bookingData.arrdate = bookingObj.arrdate;
    this.transport.bookingData.cartype = this.defaultCar;

    this.animator="animator";
    setTimeout(() => {
      
      this.router.navigateByUrl("confirmbooking");
    }, 1000);
    
    }
    


  }
  bid: number = 0;
  uid: number = 0;

  ngOnInit(): void {

  }

}
