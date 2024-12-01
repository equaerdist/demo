-- Заполнение таблицы units
INSERT INTO units (name) VALUES
('HR Department'),
('IT Department'),
('Sales Department'),
('Marketing Department'),
('Finance Department'),
('Support Team'),
('Development Team'),
('Logistics Team'),
('Management');

-- Заполнение таблицы units_relations
INSERT INTO units_relations (parent_id, child_id) VALUES
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(6, 7),
(8, 6),
(3, 8);

-- Заполнение таблицы employees
INSERT INTO employees (unit_id, name, role_name, family_name, middle_name, phone, city, project, office_address, position, birth_date, is_general) VALUES
(1, 'John', 'role_1', 'Doe', 'Michael', '+1234567890', 'New York', 'Onboarding', '123 Main St', 'HR Specialist', '1985-03-15', TRUE),
(2, 'Alice', 'role_2', 'Smith', 'Mary', '+1234567891', 'San Francisco', 'IT Infrastructure', '456 Elm St', 'System Administrator', '1990-07-22', TRUE),
(3, 'Bob', 'role_3', 'Johnson', 'Andrew', '+1234567892', 'Chicago', 'Regional Sales', '789 Pine St', 'Sales Manager', '1988-11-09', TRUE),
(4, 'Eve', 'role_4', 'Brown', 'Anna', '+1234567893', 'Boston', 'Campaign Launch', '321 Maple St', 'Marketing Coordinator', '1992-05-30', TRUE),
(5, 'Charlie', 'role_5', 'Davis', 'Patrick', '+1234567894', 'Seattle', 'Annual Budget', '654 Oak St', 'Finance Analyst', '1986-02-12', TRUE),
(6, 'Grace', 'role_6', 'Wilson', 'Elizabeth', '+1234567895', 'Austin', 'Customer Support', '987 Cedar St', 'Support Specialist', '1994-09-17', TRUE),
(7, 'David', 'role_7', 'Martinez', 'Victor', '+1234567896', 'Denver', 'App Development', '123 Spruce St', 'Software Engineer', '1987-04-25', TRUE),
(8, 'Hannah', 'role_8', 'Taylor', 'Emily', '+1234567897', 'Los Angeles', 'Logistics Optimization', '456 Birch St', 'Logistics Manager', '1991-10-19', TRUE),
(9, 'William', 'role_9', 'Anderson', 'Jacob', '+1234567898', 'Houston', 'Company Strategy', '789 Walnut St', 'CEO', '1975-01-05', TRUE),
(1, 'Alice', 'role_10','Johnson', 'Marie', '+1234567901', 'New York', 'Recruitment Drive', '100 Main St', 'HR Specialist', '1985-03-14', FALSE),
(1, 'Bob', 'role_11','Smith', 'Edward', '+1234567902', 'Los Angeles', 'Employee Benefits', '101 Main St', 'HR Manager', '1980-12-22', FALSE),
(1, 'Clara', 'role_12','Williams', 'Louise', '+1234567903', 'Chicago', 'Onboarding', '102 Main St', 'HR Coordinator', '1990-05-18', FALSE),
(2, 'David', 'role_13','Brown', 'Paul', '+1234567904', 'Houston', 'Network Upgrade', '200 Elm St', 'IT Specialist', '1987-11-03', FALSE),
(2, 'Ella', 'role_14','Jones', 'Diana', '+1234567905', 'Phoenix', 'Software Deployment', '201 Elm St', 'IT Manager', '1992-07-09', FALSE),
(2, 'Frank', 'role_15','Garcia', 'Victor', '+1234567906', 'San Antonio', 'Hardware Maintenance', '202 Elm St', 'System Administrator', '1988-02-20', FALSE),
(3, 'Grace', 'role_16','Martinez', 'Anna', '+1234567907', 'Philadelphia', 'Regional Sales', '300 Pine St', 'Sales Representative', '1995-01-15', FALSE),
(3, 'Hannah', 'role_17','Lopez', 'Maria', '+1234567908', 'San Diego', 'Client Acquisition', '301 Pine St', 'Sales Manager', '1989-10-05', FALSE),
(3, 'Ian', 'role_18', 'Clark', 'James', '+1234567909', 'Dallas', 'Sales Strategy', '302 Pine St', 'Account Executive', '1984-04-22', FALSE),
(4, 'Jack', 'role_19', 'Harris', 'George', '+1234567910', 'San Jose', 'Ad Campaign', '400 Cedar St', 'Marketing Specialist', '1986-09-17', FALSE),
(4, 'Kara', 'role_20', 'Walker', 'Elizabeth', '+1234567911', 'Austin', 'SEO Optimization', '401 Cedar St', 'Marketing Manager', '1993-12-11', FALSE),
(4, 'Liam', 'role_21', 'Allen', 'Henry', '+1234567912', 'Jacksonville', 'Content Creation', '402 Cedar St', 'Content Strategist', '1991-03-27', FALSE),
(5, 'Mia', 'role_22','Young', 'Sophia', '+1234567913', 'Fort Worth', 'Quarterly Budget', '500 Maple St', 'Finance Analyst', '1983-06-30', FALSE),
(5, 'Noah', 'role_23','King', 'Victor', '+1234567914', 'Columbus', 'Audit Preparation', '501 Maple St', 'Finance Manager', '1989-08-19', FALSE),
(5, 'Olivia', 'role_24','Hill', 'Charlotte', '+1234567915', 'San Francisco', 'Expense Tracking', '502 Maple St', 'Accountant', '1994-01-08', FALSE),
(6, 'Peter', 'role_25','Scott', 'Robert', '+1234567916', 'Charlotte', 'Support Tickets', '600 Spruce St', 'Support Specialist', '1990-07-25', FALSE),
(6, 'Quinn', 'role_26','Green', 'Angela', '+1234567917', 'Indianapolis', 'Customer Feedback', '601 Spruce St', 'Support Coordinator', '1987-11-19', FALSE),
(6, 'Ruby', 'role_27','Adams', 'Laura', '+1234567918', 'Seattle', 'Tech Support', '602 Spruce St', 'Technical Support', '1995-04-12', FALSE),
(7, 'Sophia', 'role_28','Baker', 'Rose', '+1234567919', 'Denver', 'App Development', '700 Oak St', 'Software Developer', '1988-05-06', FALSE),
(7, 'Thomas', 'role_29','Perez', 'Martin', '+1234567920', 'Washington', 'Bug Fixing', '701 Oak St', 'QA Engineer', '1991-09-13', FALSE),
(7, 'Uma', 'role_30','Reed', 'Victoria', '+1234567921', 'Boston', 'Feature Release', '702 Oak St', 'Frontend Developer', '1993-11-27', FALSE),
(8, 'Victor', 'role_31','Turner', 'Patrick', '+1234567922', 'El Paso', 'Inventory Check', '800 Birch St', 'Logistics Manager', '1985-12-05', FALSE),
(8, 'Willow', 'role_32','Carter', 'Emily', '+1234567923', 'Detroit', 'Supply Chain', '801 Birch St', 'Procurement Specialist', '1989-06-14', FALSE),
(8, 'Xander', 'role_33','Parker', 'Stephen', '+1234567924', 'Nashville', 'Warehouse Management', '802 Birch St', 'Logistics Coordinator', '1992-10-20', FALSE),
(9, 'Yara', 'role_34', 'Collins', 'Isabella', '+1234567925', 'Las Vegas', 'Leadership Training', '900 Walnut St', 'Training Specialist', '1986-01-03', FALSE),
(9, 'Zane', 'role_35', 'Evans', 'Nathan', '+1234567926', 'Louisville', 'Company Vision', '901 Walnut St', 'Executive Assistant', '1983-03-21', FALSE),
(1, 'Alice', 'role_36', 'Smith', 'Marie', '+1234567901', 'New York', 'HR Training', '123 Main St', 'HR Manager', '1987-01-12', FALSE),
(1, 'John', 'role_37', 'Doe', 'Michael', '+1234567902', 'Chicago', 'Employee Onboarding', '456 Elm St', 'Recruiter', '1990-06-18', FALSE),
(2, 'Sophia', 'role_38', 'Johnson', 'Grace', '+1234567903', 'San Francisco', 'Network Upgrade', '789 Pine St', 'System Analyst', '1985-09-10', FALSE),
(2, 'Michael', 'role_39', 'Brown', 'Edward', '+1234567904', 'Los Angeles', 'Server Maintenance', '123 Spruce St', 'IT Specialist', '1992-03-15', FALSE),
(3, 'David', 'role_40','Williams', 'Andrew', '+1234567905', 'Houston', 'Regional Sales', '654 Maple St', 'Sales Representative', '1988-05-20', FALSE),
(3, 'Emma', 'role_41', 'Jones', 'Elizabeth', '+1234567906', 'Dallas', 'Customer Acquisition', '987 Cedar St', 'Account Manager', '1991-07-25', FALSE),
(4, 'Olivia', 'role_42','Garcia', 'Sophia', '+1234567907', 'Austin', 'Ad Campaign', '321 Birch St', 'Marketing Strategist', '1984-11-01', FALSE),
(4, 'Ethan', 'role_43','Martinez', 'Victor', '+1234567908', 'Miami', 'Brand Awareness', '789 Walnut St', 'Digital Marketer', '1986-02-19', FALSE),
(5, 'James', 'role_44','Rodriguez', 'Jacob', '+1234567909', 'Boston', 'Annual Budget', '456 Oak St', 'Finance Controller', '1983-08-30', FALSE),
(5, 'Mia', 'role_45','Hernandez', 'Isabella', '+1234567910', 'Seattle', 'Financial Forecasting', '123 Fir St', 'Financial Analyst', '1989-12-10', FALSE),
(6, 'Liam', 'role_46','Lopez', 'Henry', '+1234567911', 'Denver', 'Tech Support', '654 Ash St', 'Support Engineer', '1993-04-25', FALSE),
(6, 'Ava', 'role_47','Gonzalez', 'Amelia', '+1234567912', 'San Diego', 'Customer Queries', '987 Poplar St', 'Help Desk Specialist', '1995-06-15', FALSE),
(7, 'Benjamin', 'role_48','Perez', 'Nathan', '+1234567913', 'Orlando', 'App Development', '123 Palm St', 'Software Developer', '1990-09-05', FALSE),
(7, 'Charlotte', 'role_49','Harris', 'Chloe', '+1234567914', 'Phoenix', 'System Integration', '456 Bamboo St', 'Frontend Developer', '1987-03-28', FALSE),
(8, 'Lucas', 'role_50','Clark', 'Samuel', '+1234567915', 'Las Vegas', 'Logistics Planning', '789 Magnolia St', 'Logistics Coordinator', '1982-10-08', FALSE),
(8, 'Ella', 'role_51','Lewis', 'Victoria', '+1234567916', 'Philadelphia', 'Supply Chain', '321 Olive St', 'Operations Manager', '1991-01-22', FALSE),
(9, 'Henry', 'role_52','Walker', 'Matthew', '+1234567917', 'Columbus', 'Corporate Strategy', '654 Cherry St', 'Director', '1980-07-14', FALSE),
(9, 'Emily', 'role_53','Young', 'Samantha', '+1234567918', 'Charlotte', 'Board Meetings', '987 Willow St', 'Executive Assistant', '1986-11-30', FALSE);