import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public transport:TransportService,private router:Router) {
      
  }
  
  logout()
  {
    localStorage.removeItem("curUser");
    localStorage.removeItem("imgUrl");
   
  }
  
  ngOnInit(): void {
    
  }

}
