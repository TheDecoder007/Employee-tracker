INSERT INTO department (department_name)
VALUES

('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES

('Sales Team Leader', 350000, 1),
('Lead Engineer', 250000, 2),
('Account Manager', 150000, 3),
('Legal Team Lead', 150000, 4),
('Salesperson', 75000, 1),
('Software Engineer', 75000, 2),
('Accountant', 75000, 3),
('Lawyer', 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Ronald', 'Firbank', 1, NULL),
  ('Virginia', 'Woolf', 2,1),
  ('Piers', 'Gaveston', 3,1),
  ('Charles', 'LeRoi', 4,1),
  ('Katherine', 'Mansfield', 5, 2),
  ('Dora', 'Carrington', 6,2),
  ('Edward', 'Bellamy', 7,2),
  ('Montague', 'Summers', 8,2 );


--   ('Octavia', 'Butler', 3),
--   ('Unica', 'Zurn', 1);


