package com.project.mytour.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
	
	@RequestMapping("/")
	public String check() {
		System.out.println("It workde");
		return "success...";
	}
	

}
