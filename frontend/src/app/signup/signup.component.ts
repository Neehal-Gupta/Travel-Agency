import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransportService } from '../transport.service';
import { UserService } from '../user.service';
import { user } from '../userClass';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router,private transport:TransportService) { }
  
 
  exists:number=0;

  signup(userObj:user)
  {
    console.log("signing up....");

    if(!this.name_check(userObj.name))
    {
        this.namecheck=0;
    }
    
    else{

      this.userservice.signupApi(userObj).subscribe((result)=>{
            console.log(result);
            this.router.navigateByUrl("login");
          });
        setTimeout(() => {
              this.exists=1;
            }, 300);
    }
    
  }

  namecheck:number=1;
  name_check(name:string){
            
    for(var i=0;i<name.length;i++)
        {
            if(name[i]==' ')
                continue;
            if(name[i].toLowerCase() == name[i].toUpperCase())
                return false;
        }
    return true;
}
 
  ngOnInit(): void {
  }

}
