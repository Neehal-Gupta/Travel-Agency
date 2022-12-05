import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCabComponent } from './book-cab/book-cab.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { ExistnotComponent } from './existnot/existnot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"bookcab",component:BookCabComponent},
  {path:"mybookings",component:MyBookingsComponent},
  {path:"confirmbooking",component:ConfirmBookingComponent},
  {path:"profile",component:ProfileComponent},
  {path:"**",component:ExistnotComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
