import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookCabComponent } from './book-cab/book-cab.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ExistnotComponent } from './existnot/existnot.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCabComponent,
    MyBookingsComponent,
    ConfirmBookingComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    ExistnotComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
