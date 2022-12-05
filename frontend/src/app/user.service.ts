import { Injectable } from '@angular/core';
import { user } from './userClass';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  signupApi(userObj:user)
  {
    return this.http.put("http://localhost:8080/user",userObj); 
  }
  deleteUserApi(id:number)
  {
    return this.http.delete("http://localhost:8080/user/"+id);
  }
  getUserApi(id:number){
    return this.http.get("http://localhost:8080/user/"+id);
  }
  getUsers(){
    return this.http.get("http://localhost:8080/users");
  }
  
  constructor(private http:HttpClient) { }
}
