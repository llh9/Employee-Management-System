INSERT INTO `employer_db`.`department` (`id`, `name`) 
VALUES 
    ('1', 'administration'),
    ('2', 'staff')
;

INSERT INTO `employer_db`.`role` (`id`, `title`, `salary`, `department_id`) 
VALUES 
    ('1', 'manager', '100', '1'),
    ('2', 'engineer', '100', '2')
;

INSERT INTO `employer_db`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES 
    ('2', 'katie', 'hinkle', '1', '2'),
    ('1', 'landon', 'hinkle', '2', '2')
;

SELECT * FROM `employer_db`.`department`;
SELECT * FROM `employer_db`.`role`;
SELECT * FROM `employer_db`.`employee`;
