package com.github.thuyencode.springboot_react_mysql_demo.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.thuyencode.springboot_react_mysql_demo.backend.model.User;
import com.github.thuyencode.springboot_react_mysql_demo.backend.repository.UserRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

  @Autowired
  private UserRepository repo;

  @PostMapping("/user")
  public User addNewUser(@Valid @RequestBody User newUser) {
    return repo.save(newUser);
  }

  @GetMapping("/users")
  public Iterable<User> getAllUsers() {
    return repo.findAll();
  }

}
