package com.github.thuyencode.springboot_react_mysql_demo.backend.constraints;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Documented
@Constraint(validatedBy = NoWhitespaceValidator.class)
@Target({ ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface NoWhitespace {
  String message() default "Must not contains whitespace(s)";

  Class<?>[] groups() default {};

  Class<? extends Payload>[] payload() default {};
}
