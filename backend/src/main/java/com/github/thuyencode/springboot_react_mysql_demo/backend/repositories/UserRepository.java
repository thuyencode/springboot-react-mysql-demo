package com.github.thuyencode.springboot_react_mysql_demo.backend.repositories;

import org.springframework.data.repository.CrudRepository;

import com.github.thuyencode.springboot_react_mysql_demo.backend.models.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
