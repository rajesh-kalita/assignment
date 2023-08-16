package com.project.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.assignment.entity.User;
import com.project.assignment.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	private List<User> users;
	
	@GetMapping
	public List<User> getAllUsers() {
		users = userRepository.findAll();
 		return users;
	}
}
