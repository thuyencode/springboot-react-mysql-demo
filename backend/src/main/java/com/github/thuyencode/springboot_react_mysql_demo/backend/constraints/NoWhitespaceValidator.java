package com.github.thuyencode.springboot_react_mysql_demo.backend.constraints;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class NoWhitespaceValidator implements ConstraintValidator<NoWhitespace, String> {
  @Override
  public void initialize(NoWhitespace constraintAnnotation) {
    ConstraintValidator.super.initialize(constraintAnnotation);
  }

  @Override
  public boolean isValid(String value, ConstraintValidatorContext context) {
    return value instanceof String && !value.contains(" ");
  }
}
