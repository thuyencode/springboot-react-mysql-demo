package com.github.thuyencode.springboot_react_mysql_demo.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.thuyencode.springboot_react_mysql_demo.backend.exceptions.UserNotFoundException;
import com.github.thuyencode.springboot_react_mysql_demo.backend.models.User;
import com.github.thuyencode.springboot_react_mysql_demo.backend.repositories.UserRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

  @Autowired
  private UserRepository repo;

  @GetMapping("/users")
  public Iterable<User> getAllUsers() {
    return repo.findAll();
  }

  @PostMapping("/user")
  public User addNewUser(@Valid @RequestBody User newUser) {
    return repo.save(newUser);
  }

  @GetMapping("/user/{id}")
  public User getUser(@PathVariable Long id) {
    return repo.findById(id).orElseThrow(() -> new UserNotFoundException(id));
  }

  @PutMapping("/user/{id}")
  public User updateUser(@Valid @RequestBody User newUser, @PathVariable Long id) {
    return repo.findById(id).map(user -> {
      user.setName(newUser.getName());
      user.setUsername(newUser.getUsername());
      user.setEmail(newUser.getEmail());

      return repo.save(user);
    }).orElseThrow(() -> new UserNotFoundException(id));
  }
}
