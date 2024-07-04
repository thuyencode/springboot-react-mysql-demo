package com.github.thuyencode.springboot_react_mysql_demo.backend.exceptions;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class SQLIntegrityConstraintViolationAdvice {

  @ResponseBody
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
  public Map<String, Map<String, String>> exceptionHandler(SQLIntegrityConstraintViolationException exception) {
    Map<String, Map<String, String>> errors = new HashMap<String, Map<String, String>>();
    Map<String, String> messages = new HashMap<>();

    messages.put("message", exception.getMessage());
    errors.put("errors", messages);

    return errors;
  }
}
