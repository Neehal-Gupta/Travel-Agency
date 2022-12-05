import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { booking } from './bookingClass';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  bookingApi(bookingObj:booking)
  {
    return this.http.put("http://localhost:8080/user/bookings",bookingObj);
  }
  deleteBookingApi(id:number)
  {
    return this.http.delete("http://localhost:8080/user/bookings/"+id);
  }
  getBookingsApi(uid:number){
    return this.http.get("http://localhost:8080/user/bookings/"+uid);
  }
  
  
  constructor(private http:HttpClient) { }
}
