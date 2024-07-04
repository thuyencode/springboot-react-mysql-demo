package com.github.thuyencode.springboot_react_mysql_demo.backend.exceptions;

public class UserNotFoundException extends RuntimeException {
  public UserNotFoundException(Long id) {
    super(String.format("Could not found the user with %d.", id));
  }
}
