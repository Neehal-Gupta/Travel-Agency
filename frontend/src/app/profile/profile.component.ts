import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransportService } from '../transport.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private transport:TransportService,private userservice:UserService,private router:Router) { 
      if(this.transport.curUser.name=="")
      {
          this.router.navigateByUrl("login");
      }
   }

  id:number=this.transport.curUser.id;
  name:string = this.transport.curUser.name;
  email:string = this.transport.curUser.email;
  password:string = this.transport.curUser.password;
  contact:string = this.transport.curUser.contact;
  address:string = this.transport.curUser.address;
  

  deleteUser(uid:number)
  {

      try {
        
        this.userservice.deleteUserApi(uid).subscribe((result)=>{
          console.log(result);
    })
      } catch (error) {
        
      } finally
      {
        this.transport.curUser = JSON.parse(JSON.stringify(this.transport.clearUser));
        localStorage.removeItem("imgUrl");
        localStorage.removeItem("curUser");
      }

      
  }
  ngOnInit(): void {
  }

}
