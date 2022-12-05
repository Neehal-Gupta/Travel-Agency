import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public transport:TransportService) {
      
   }

  ngOnInit(): void {
  }

}
