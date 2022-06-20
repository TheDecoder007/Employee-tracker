INSERT INTO department (name)
VALUES

('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES

('Sales Team Leader', 350000, 1),
('Lead Engineer', 250000, 2),
('Account Manager', 150000, 3),
('Legal Team Lead', 150000, 4),
('Salesperson', 75000, 1),
('Software Engineer', 75000, 2),
('Accountant', 75000, 3),
('Lawyer', 75000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('Ronald', 'Firbank', 1),
  ('Virginia', 'Woolf', 2),
  ('Piers', 'Gaveston', 3),
  ('Charles', 'LeRoi', 4),
  ('Katherine', 'Mansfield', 5),
  ('Dora', 'Carrington', 6),
  ('Edward', 'Bellamy', 7),
  ('Montague', 'Summers', 8);


--   ('Octavia', 'Butler', 3),
--   ('Unica', 'Zurn', 1);


