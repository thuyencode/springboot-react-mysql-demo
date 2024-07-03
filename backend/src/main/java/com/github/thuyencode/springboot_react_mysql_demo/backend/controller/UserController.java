package com.github.thuyencode.springboot_react_mysql_demo.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.thuyencode.springboot_react_mysql_demo.backend.model.User;
import com.github.thuyencode.springboot_react_mysql_demo.backend.repository.UserRepository;

@RestController
public class UserController {

  @Autowired
  private UserRepository repo;

  @PostMapping("/user")
  public User addNewUser(@RequestBody User newUser) {
    return repo.save(newUser);
  }

}
