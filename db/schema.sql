DROP DATABASE IF EXISTS employer_db;
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employer_db;
USE employer_db;

CREATE TABLE `employer_db`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `role_id` INT NOT NULL DEFAULT 1,
  `manager_id` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `employer_db`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
);

CREATE TABLE `employer_db`.`department` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE `employer_db`.`employee` 
ADD INDEX `manager_id_idx` (`manager_id` ASC) VISIBLE;
;
ALTER TABLE `employer_db`.`employee` 
ADD CONSTRAINT `manager_id`
  FOREIGN KEY (`manager_id`)
  REFERENCES `employer_db`.`employee` (`id`)
  ON DELETE SET NULL
  ON UPDATE NO ACTION
;

ALTER TABLE `employer_db`.`role` 
ADD INDEX `department_id_idx` (`department_id` ASC) VISIBLE;
;
ALTER TABLE `employer_db`.`role` 
ADD CONSTRAINT `department_id`
  FOREIGN KEY (`department_id`)
  REFERENCES `employer_db`.`department` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION
;

SELECT DATABASE();
SHOW DATABASES;
SHOW TABLES;