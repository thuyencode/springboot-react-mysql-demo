package com.github.thuyencode.springboot_react_mysql_demo.backend.models;

import com.github.thuyencode.springboot_react_mysql_demo.backend.constraints.NoWhitespace;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {
  private final String MIN_LENGTH_ERROR = "The minium length must longer than 3 characters";
  private final String MAX_LENGTH_ERROR = "The maximum length must not exceeds 255 characters";
  private final String EMAIL_ERROR = "Must be a well-formed email address";

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true)
  @Size(min = 3, message = MIN_LENGTH_ERROR)
  @Size(max = 255, message = MAX_LENGTH_ERROR)
  @NoWhitespace
  private String username;

  @Size(min = 3, message = MIN_LENGTH_ERROR)
  @Size(max = 255, message = MAX_LENGTH_ERROR)
  private String name;

  @Column(unique = true)
  @Size(min = 3, message = MIN_LENGTH_ERROR)
  @Size(max = 255, message = MAX_LENGTH_ERROR)
  @NoWhitespace
  @Email(message = EMAIL_ERROR)
  private String email;
}
