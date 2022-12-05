import { Injectable } from '@angular/core';
import { booking } from './bookingClass';
import { user } from './userClass';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  bookingData:booking={
    bid:0,
    start:"",
    end:"",
    userid:0,
    depdate:"",
    arrdate:"",
    dist:0,
    price:0,
    cartype:"",
    status:1
  };
  clearData:booking={
    bid:0,
    start:"",
    end:"",
    userid:0,
    depdate:"",
    arrdate:"",
    dist:0,
    price:0,
    cartype:"",
    status:1
  }




  curUser:user={
    id:0,
    email:"",
    name:"",
    contact:"",
    password:"",
    address:""
  };
  clearUser:user={
    id:0,
    email:"",
    name:"",
    contact:"",
    password:"",
    address:""
  };
  

  loggedIn:number=1;
  url:string="assets/loggedout.jpg";
  
  constructor() { 

        if(localStorage.getItem("curUser")==null) 
        {

        }
        else{
          this.loggedIn=0;
          this.curUser = JSON.parse(localStorage.getItem("curUser") || "{}");
          this.url=localStorage.getItem("imgUrl") || "";
        }

  }
}
