package com.project.mytour.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.mytour.entities.Booking;


public interface BookingRepo extends JpaRepository<Booking, Integer> {

	
		List<Booking> findByUserid(Integer userid);
}
