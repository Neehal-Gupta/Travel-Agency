import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransportService } from '../transport.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private transport: TransportService, private userservice: UserService, private router: Router) {


    
    if(this.transport.curUser.name!="")
    {
      this.router.navigateByUrl("");
    }
      
   }

  incorrect: number = 0;
  notFound:number=0;
  login(user: any) {
    console.log(user);
    this.userservice.getUserApi(user.uid).subscribe((result) => {
      console.log(result);
      this.transport.curUser = JSON.parse(JSON.stringify(result));

      if(this.transport.curUser==null)
      {
        this.notFound = 1;
        
      }
      else if (this.transport.curUser.password == user.password) {
        this.transport.loggedIn=0;
        this.transport.url="assets/profile.png";

        localStorage.setItem("curUser",JSON.stringify(this.transport.curUser));
        localStorage.setItem("imgUrl","assets/profile.png");

        this.router.navigateByUrl("/");
      }
      else {
        this.incorrect = 1;
        
      }
    });


  }



  signup()
  {
    this.router.navigateByUrl("signup");
  }
  ngOnInit(): void {
  }

}
