-- Active: 1718635950751@@127.0.0.1@3306@springboot_react
USE springboot_react;

CREATE TABLE user (
    id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    username VARCHAR(255) UNIQUE
);

DESC user;

ALTER TABLE `user` AUTO_INCREMENT = 1;