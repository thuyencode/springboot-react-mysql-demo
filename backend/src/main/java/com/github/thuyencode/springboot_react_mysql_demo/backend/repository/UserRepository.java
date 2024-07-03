package com.github.thuyencode.springboot_react_mysql_demo.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.github.thuyencode.springboot_react_mysql_demo.backend.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
