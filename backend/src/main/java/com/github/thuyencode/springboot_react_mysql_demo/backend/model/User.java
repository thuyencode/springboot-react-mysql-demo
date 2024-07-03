package com.github.thuyencode.springboot_react_mysql_demo.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(unique = true)
  @Size(min = 3, max = 255)
  private String username;

  @Size(min = 3, max = 255)
  private String name;

  @Column(unique = true)
  @Size(min = 3, max = 255)
  private String email;
}
