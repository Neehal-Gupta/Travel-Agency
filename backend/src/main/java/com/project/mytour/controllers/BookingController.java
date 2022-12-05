package com.project.mytour.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.mytour.entities.Booking;
import com.project.mytour.repos.BookingRepo;

@RestController
@CrossOrigin("*")
public class BookingController {
	
	@Autowired
	BookingRepo repo;
	
	@GetMapping("/user/bookings/{uid}")
	public List<Booking> getBookingsByUser(@PathVariable("uid") int id) {
		
		return repo.findByUserid(id);
		
	}
	
	@GetMapping("/user/bookings")
	public List<Booking> getBookings() {
		
		return repo.findAll();
		
	}
	
	@DeleteMapping("/user/bookings/{id}")
	public String deleteUser(@PathVariable("id") int bid)
	{
		
		repo.deleteById(bid);
		return "Delete successful...";
	}
	
	
	@PutMapping("/user/bookings")
	public Booking addBooking(@RequestBody Booking booking)
	{
		return repo.save(booking);
	}

}
