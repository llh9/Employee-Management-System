INSERT INTO `employer_db`.`department` (`id`, `name`) 
VALUES 
    ('1', 'administration'),
    ('2', 'staff'),
    ('3', 'maintenance')
;

INSERT INTO `employer_db`.`role` (`id`, `title`, `salary`, `department_id`) 
VALUES 
    ('1', 'manager', '100', '1'),
    ('2', 'engineer', '100', '2'),
    ('3', 'technician', '75', '3'),
    ('4', 'Boss', '1000000000', '1')

;

INSERT INTO `employer_db`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES 
    ('1', 'Katie', 'Hinkle', '1', '1'),
    ('2', 'Landon', 'HInkle', '3', '1'),
    ('3', 'Meccade', 'Hinkle', '4', '1')
;

SELECT * FROM `employer_db`.`department`;
SELECT * FROM `employer_db`.`role`;
SELECT * FROM `employer_db`.`employee`;
