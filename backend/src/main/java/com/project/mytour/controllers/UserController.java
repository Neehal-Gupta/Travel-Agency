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

import com.project.mytour.entities.User;
import com.project.mytour.repos.UserRepo;

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	UserRepo repo;
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return repo.findAll();
	}
	
	
	@GetMapping("/user/{email}")
	public User getUserByEmail(@PathVariable("email") String email) {
		System.out.println(email);
		return repo.findByEmail(email); 
	}
	
	
	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable("id") int uid)
	{
		
		repo.deleteById(uid);
		return "Delete successful...";
	}
	
	@PutMapping("/user")
	public User update(@RequestBody User user)
	{
		return repo.save(user);
	}
	
}
