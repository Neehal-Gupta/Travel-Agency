package com.project.mytour.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.mytour.entities.User;

public interface UserRepo extends JpaRepository<User, Integer> {

			User findByEmail(String email);
}

