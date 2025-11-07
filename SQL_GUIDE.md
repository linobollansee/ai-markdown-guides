# Comprehensive SQL Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Database Basics](#database-basics)
3. [Data Types](#data-types)
4. [Creating Databases and Tables](#creating-databases-and-tables)
5. [Inserting Data](#inserting-data)
6. [Querying Data](#querying-data)
7. [Filtering and Sorting](#filtering-and-sorting)
8. [Joins](#joins)
9. [Aggregate Functions](#aggregate-functions)
10. [Subqueries](#subqueries)
11. [Modifying Data](#modifying-data)
12. [Indexes](#indexes)
13. [Views](#views)
14. [Transactions](#transactions)
15. [Constraints](#constraints)
16. [Advanced Features](#advanced-features)

---

## Introduction

SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It is used to create, read, update, and delete database records.

**Key SQL Categories:**

- **DDL** (Data Definition Language): CREATE, ALTER, DROP
- **DML** (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE
- **DCL** (Data Control Language): GRANT, REVOKE
- **TCL** (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT

---

## Database Basics

### Creating a Database

```sql
CREATE DATABASE company_db;
```

### Using a Database

```sql
USE company_db;
```

### Listing Databases

```sql
SHOW DATABASES;
```

### Dropping a Database

```sql
DROP DATABASE company_db;
```

### Checking Database Information

```sql
SHOW CREATE DATABASE company_db;
```

---

## Data Types

### Numeric Types

| Type             | Description        | Range                                                   |
| ---------------- | ------------------ | ------------------------------------------------------- |
| **TINYINT**      | Very small integer | -128 to 127                                             |
| **SMALLINT**     | Small integer      | -32,768 to 32,767                                       |
| **INT**          | Standard integer   | -2,147,483,648 to 2,147,483,647                         |
| **BIGINT**       | Large integer      | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| **DECIMAL(p,s)** | Fixed-point number | p = precision, s = scale                                |
| **NUMERIC(p,s)** | Exact numeric      | Same as DECIMAL                                         |
| **FLOAT**        | Floating-point     | Approximate numeric                                     |
| **DOUBLE**       | Double precision   | Approximate numeric                                     |

### String Types

| Type           | Description            | Max Length               |
| -------------- | ---------------------- | ------------------------ |
| **CHAR(n)**    | Fixed-length string    | 255 characters           |
| **VARCHAR(n)** | Variable-length string | 65,535 characters        |
| **TEXT**       | Long text              | 65,535 characters        |
| **MEDIUMTEXT** | Medium text            | 16,777,215 characters    |
| **LONGTEXT**   | Very long text         | 4,294,967,295 characters |

### Date and Time Types

```sql
DATE        -- Format: 'YYYY-MM-DD'
TIME        -- Format: 'HH:MM:SS'
DATETIME    -- Format: 'YYYY-MM-DD HH:MM:SS'
TIMESTAMP   -- Unix timestamp
YEAR        -- Format: 'YYYY'
```

### Boolean Type

```sql
BOOLEAN     -- Stored as TINYINT(1): 0 = FALSE, 1 = TRUE
```

---

## Creating Databases and Tables

### Basic Table Creation

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    hire_date DATE,
    salary DECIMAL(10, 2)
);
```

### Table with Auto-Increment

```sql
CREATE TABLE departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL,
    location VARCHAR(100)
);
```

### Table with Multiple Constraints

```sql
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) CHECK (total_amount >= 0),
    status ENUM('pending', 'processing', 'shipped', 'delivered') DEFAULT 'pending',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

### Creating Table from Another Table

```sql
CREATE TABLE employees_backup AS
SELECT * FROM employees;
```

### Viewing Table Structure

```sql
DESCRIBE employees;
-- or
SHOW COLUMNS FROM employees;
```

---

## Inserting Data

### Single Row Insert

```sql
INSERT INTO employees (first_name, last_name, email, hire_date, salary)
VALUES ('John', 'Doe', 'john.doe@example.com', '2023-01-15', 75000.00);
```

### Multiple Rows Insert

```sql
INSERT INTO employees (first_name, last_name, email, hire_date, salary)
VALUES
    ('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 80000.00),
    ('Bob', 'Johnson', 'bob.johnson@example.com', '2023-03-10', 72000.00),
    ('Alice', 'Williams', 'alice.williams@example.com', '2023-04-05', 85000.00);
```

### Insert with SELECT

```sql
INSERT INTO employees_archive
SELECT * FROM employees
WHERE hire_date < '2020-01-01';
```

### Insert or Update (UPSERT)

```sql
INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES (1, 'John', 'Doe', 75000)
ON DUPLICATE KEY UPDATE salary = 75000;
```

---

## Querying Data

### Basic SELECT

```sql
SELECT * FROM employees;
```

### Selecting Specific Columns

```sql
SELECT first_name, last_name, salary FROM employees;
```

### Using Aliases

```sql
SELECT
    first_name AS 'First Name',
    last_name AS 'Last Name',
    salary * 12 AS 'Annual Salary'
FROM employees;
```

### DISTINCT Values

```sql
SELECT DISTINCT department_id FROM employees;
```

### LIMIT Results

```sql
SELECT * FROM employees LIMIT 10;
```

### LIMIT with OFFSET

```sql
SELECT * FROM employees LIMIT 10 OFFSET 20;
-- or
SELECT * FROM employees LIMIT 20, 10;
```

---

## Filtering and Sorting

### WHERE Clause

```sql
SELECT * FROM employees
WHERE salary > 70000;
```

### Multiple Conditions (AND, OR)

```sql
SELECT * FROM employees
WHERE salary > 70000 AND hire_date > '2023-01-01';

SELECT * FROM employees
WHERE department_id = 1 OR department_id = 2;
```

### IN Operator

```sql
SELECT * FROM employees
WHERE department_id IN (1, 2, 3);
```

### BETWEEN Operator

```sql
SELECT * FROM employees
WHERE salary BETWEEN 60000 AND 80000;
```

### LIKE Operator (Pattern Matching)

```sql
-- Names starting with 'J'
SELECT * FROM employees WHERE first_name LIKE 'J%';

-- Names ending with 'son'
SELECT * FROM employees WHERE last_name LIKE '%son';

-- Names containing 'oh'
SELECT * FROM employees WHERE first_name LIKE '%oh%';

-- Names with exactly 4 characters
SELECT * FROM employees WHERE first_name LIKE '____';
```

### IS NULL / IS NOT NULL

```sql
SELECT * FROM employees WHERE manager_id IS NULL;

SELECT * FROM employees WHERE email IS NOT NULL;
```

### NOT Operator

```sql
SELECT * FROM employees
WHERE NOT department_id = 5;

SELECT * FROM employees
WHERE department_id NOT IN (1, 2, 3);
```

### ORDER BY

```sql
-- Ascending order (default)
SELECT * FROM employees ORDER BY salary;

-- Descending order
SELECT * FROM employees ORDER BY salary DESC;

-- Multiple columns
SELECT * FROM employees
ORDER BY department_id ASC, salary DESC;
```

---

## Joins

### INNER JOIN

```sql
SELECT
    e.first_name,
    e.last_name,
    d.dept_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.dept_id;
```

### LEFT JOIN (LEFT OUTER JOIN)

```sql
SELECT
    e.first_name,
    e.last_name,
    d.dept_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.dept_id;
```

### RIGHT JOIN (RIGHT OUTER JOIN)

```sql
SELECT
    e.first_name,
    e.last_name,
    d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.dept_id;
```

### FULL OUTER JOIN

```sql
-- MySQL doesn't support FULL OUTER JOIN directly, use UNION
SELECT
    e.first_name,
    e.last_name,
    d.dept_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.dept_id
UNION
SELECT
    e.first_name,
    e.last_name,
    d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.dept_id;
```

### CROSS JOIN

```sql
SELECT
    e.first_name,
    d.dept_name
FROM employees e
CROSS JOIN departments d;
```

### SELF JOIN

```sql
SELECT
    e1.first_name AS employee,
    e2.first_name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.employee_id;
```

### Multiple Joins

```sql
SELECT
    e.first_name,
    e.last_name,
    d.dept_name,
    p.project_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.dept_id
INNER JOIN employee_projects ep ON e.employee_id = ep.employee_id
INNER JOIN projects p ON ep.project_id = p.project_id;
```

---

## Aggregate Functions

### COUNT

```sql
SELECT COUNT(*) FROM employees;

SELECT COUNT(DISTINCT department_id) FROM employees;

SELECT COUNT(*) FROM employees WHERE salary > 70000;
```

### SUM

```sql
SELECT SUM(salary) AS total_payroll FROM employees;
```

### AVG

```sql
SELECT AVG(salary) AS average_salary FROM employees;
```

### MIN and MAX

```sql
SELECT MIN(salary) AS lowest_salary FROM employees;

SELECT MAX(salary) AS highest_salary FROM employees;
```

### GROUP BY

```sql
SELECT
    department_id,
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;
```

### HAVING (Filter Groups)

```sql
SELECT
    department_id,
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;
```

### GROUP BY with Multiple Columns

```sql
SELECT
    department_id,
    YEAR(hire_date) AS hire_year,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department_id, YEAR(hire_date);
```

---

## Subqueries

### Subquery in WHERE Clause

```sql
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

### Subquery with IN

```sql
SELECT first_name, last_name
FROM employees
WHERE department_id IN (
    SELECT dept_id
    FROM departments
    WHERE location = 'New York'
);
```

### Subquery with EXISTS

```sql
SELECT d.dept_name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.dept_id
);
```

### Subquery in FROM Clause (Derived Table)

```sql
SELECT dept_id, avg_salary
FROM (
    SELECT
        department_id AS dept_id,
        AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
) AS dept_averages
WHERE avg_salary > 70000;
```

### Correlated Subquery

```sql
SELECT
    e1.first_name,
    e1.last_name,
    e1.salary
FROM employees e1
WHERE salary > (
    SELECT AVG(salary)
    FROM employees e2
    WHERE e2.department_id = e1.department_id
);
```

### Subquery with ALL

```sql
SELECT first_name, last_name, salary
FROM employees
WHERE salary > ALL (
    SELECT salary
    FROM employees
    WHERE department_id = 5
);
```

### Subquery with ANY

```sql
SELECT first_name, last_name, salary
FROM employees
WHERE salary > ANY (
    SELECT salary
    FROM employees
    WHERE department_id = 5
);
```

---

## Modifying Data

### UPDATE Single Column

```sql
UPDATE employees
SET salary = 80000
WHERE employee_id = 1;
```

### UPDATE Multiple Columns

```sql
UPDATE employees
SET
    salary = 85000,
    email = 'newemail@example.com'
WHERE employee_id = 1;
```

### UPDATE with Calculation

```sql
UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 3;
```

### UPDATE with JOIN

```sql
UPDATE employees e
INNER JOIN departments d ON e.department_id = d.dept_id
SET e.salary = e.salary * 1.05
WHERE d.dept_name = 'Engineering';
```

### DELETE Records

```sql
DELETE FROM employees
WHERE employee_id = 10;
```

### DELETE with Condition

```sql
DELETE FROM employees
WHERE hire_date < '2020-01-01';
```

### DELETE All Records (Keep Structure)

```sql
DELETE FROM employees;
```

### TRUNCATE Table (Faster than DELETE)

```sql
TRUNCATE TABLE employees;
```

---

## Indexes

### Creating Index

```sql
CREATE INDEX idx_last_name ON employees(last_name);
```

### Creating Unique Index

```sql
CREATE UNIQUE INDEX idx_email ON employees(email);
```

### Composite Index

```sql
CREATE INDEX idx_name ON employees(first_name, last_name);
```

### Viewing Indexes

```sql
SHOW INDEX FROM employees;
```

### Dropping Index

```sql
DROP INDEX idx_last_name ON employees;
```

### Full-Text Index

```sql
CREATE FULLTEXT INDEX idx_description ON products(description);

-- Searching with full-text index
SELECT * FROM products
WHERE MATCH(description) AGAINST('laptop computer');
```

---

## Views

### Creating a View

```sql
CREATE VIEW employee_details AS
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    d.dept_name,
    e.salary
FROM employees e
INNER JOIN departments d ON e.department_id = d.dept_id;
```

### Using a View

```sql
SELECT * FROM employee_details
WHERE salary > 70000;
```

### Updating a View

```sql
CREATE OR REPLACE VIEW employee_details AS
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    d.dept_name,
    e.salary,
    e.hire_date
FROM employees e
INNER JOIN departments d ON e.department_id = d.dept_id;
```

### Dropping a View

```sql
DROP VIEW employee_details;
```

### Materialized View (PostgreSQL)

```sql
CREATE MATERIALIZED VIEW sales_summary AS
SELECT
    product_id,
    SUM(quantity) AS total_quantity,
    SUM(amount) AS total_sales
FROM sales
GROUP BY product_id;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW sales_summary;
```

---

## Transactions

### Basic Transaction

```sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT;
```

### Transaction with Rollback

```sql
START TRANSACTION;

UPDATE employees SET salary = salary * 2 WHERE employee_id = 1;

-- Check if something went wrong
ROLLBACK;
```

### Savepoints

```sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
SAVEPOINT sp1;

UPDATE accounts SET balance = balance - 50 WHERE account_id = 2;
SAVEPOINT sp2;

UPDATE accounts SET balance = balance - 25 WHERE account_id = 3;

-- Rollback to sp2
ROLLBACK TO SAVEPOINT sp2;

COMMIT;
```

### Transaction Isolation Levels

```sql
-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

---

## Constraints

### PRIMARY KEY Constraint

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);

-- Composite primary key
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id)
);
```

### FOREIGN KEY Constraint

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- With ON DELETE and ON UPDATE
CREATE TABLE order_items (
    item_id INT PRIMARY KEY,
    order_id INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

### UNIQUE Constraint

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE
);
```

### NOT NULL Constraint

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
```

### CHECK Constraint

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    age INT CHECK (age >= 18),
    salary DECIMAL(10, 2) CHECK (salary > 0)
);
```

### DEFAULT Constraint

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending'
);
```

### Adding Constraints to Existing Table

```sql
ALTER TABLE employees
ADD CONSTRAINT chk_salary CHECK (salary > 0);

ALTER TABLE orders
ADD CONSTRAINT fk_customer
FOREIGN KEY (customer_id) REFERENCES customers(customer_id);
```

### Dropping Constraints

```sql
ALTER TABLE employees DROP CONSTRAINT chk_salary;
```

---

## Advanced Features

### CASE Statements

```sql
SELECT
    first_name,
    last_name,
    salary,
    CASE
        WHEN salary < 50000 THEN 'Low'
        WHEN salary BETWEEN 50000 AND 80000 THEN 'Medium'
        ELSE 'High'
    END AS salary_grade
FROM employees;
```

### COALESCE (Return First Non-NULL Value)

```sql
SELECT
    first_name,
    COALESCE(phone_number, email, 'No contact') AS contact
FROM employees;
```

### NULLIF (Return NULL if Equal)

```sql
SELECT
    product_name,
    NULLIF(discount, 0) AS discount
FROM products;
```

### IFNULL / ISNULL

```sql
SELECT
    first_name,
    IFNULL(commission, 0) AS commission
FROM employees;
```

### String Functions

```sql
-- Concatenation
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;

-- String length
SELECT LENGTH(first_name) FROM employees;

-- Uppercase and lowercase
SELECT UPPER(first_name), LOWER(last_name) FROM employees;

-- Substring
SELECT SUBSTRING(email, 1, 5) FROM employees;

-- Trim whitespace
SELECT TRIM(first_name) FROM employees;

-- Replace
SELECT REPLACE(email, '@old.com', '@new.com') FROM employees;
```

### Date and Time Functions

```sql
-- Current date and time
SELECT NOW(), CURDATE(), CURTIME();

-- Date arithmetic
SELECT DATE_ADD(hire_date, INTERVAL 1 YEAR) FROM employees;
SELECT DATE_SUB(hire_date, INTERVAL 3 MONTH) FROM employees;

-- Date difference
SELECT DATEDIFF(NOW(), hire_date) AS days_employed FROM employees;

-- Extract parts
SELECT
    YEAR(hire_date) AS year,
    MONTH(hire_date) AS month,
    DAY(hire_date) AS day
FROM employees;

-- Formatting dates
SELECT DATE_FORMAT(hire_date, '%Y-%m-%d') FROM employees;
SELECT DATE_FORMAT(hire_date, '%M %d, %Y') FROM employees;
```

### Math Functions

```sql
SELECT ROUND(salary, 2) FROM employees;
SELECT CEIL(salary) FROM employees;
SELECT FLOOR(salary) FROM employees;
SELECT ABS(-100);
SELECT POWER(2, 3);
SELECT SQRT(16);
SELECT RAND();
```

### Window Functions (Analytic Functions)

```sql
-- ROW_NUMBER
SELECT
    first_name,
    last_name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
FROM employees;

-- RANK and DENSE_RANK
SELECT
    first_name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS rank,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank
FROM employees;

-- PARTITION BY
SELECT
    first_name,
    department_id,
    salary,
    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg_salary
FROM employees;

-- LAG and LEAD
SELECT
    first_name,
    salary,
    LAG(salary) OVER (ORDER BY hire_date) AS previous_salary,
    LEAD(salary) OVER (ORDER BY hire_date) AS next_salary
FROM employees;

-- NTILE (Divide into groups)
SELECT
    first_name,
    salary,
    NTILE(4) OVER (ORDER BY salary) AS quartile
FROM employees;
```

### Common Table Expressions (CTE)

```sql
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 80000
)
SELECT
    department_id,
    COUNT(*) AS high_earner_count
FROM high_earners
GROUP BY department_id;
```

### Recursive CTE

```sql
WITH RECURSIVE employee_hierarchy AS (
    -- Base case
    SELECT
        employee_id,
        first_name,
        manager_id,
        1 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case
    SELECT
        e.employee_id,
        e.first_name,
        e.manager_id,
        eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
)
SELECT * FROM employee_hierarchy;
```

### UNION and UNION ALL

```sql
-- UNION (removes duplicates)
SELECT first_name FROM employees
UNION
SELECT first_name FROM contractors;

-- UNION ALL (keeps duplicates)
SELECT first_name FROM employees
UNION ALL
SELECT first_name FROM contractors;
```

### INTERSECT (Common records)

```sql
SELECT employee_id FROM current_employees
INTERSECT
SELECT employee_id FROM project_members;
```

### EXCEPT / MINUS (Difference)

```sql
SELECT employee_id FROM all_employees
EXCEPT
SELECT employee_id FROM terminated_employees;
```

### Stored Procedures

```sql
DELIMITER //

CREATE PROCEDURE GetEmployeesByDept(IN dept_id INT)
BEGIN
    SELECT * FROM employees WHERE department_id = dept_id;
END //

DELIMITER ;

-- Call stored procedure
CALL GetEmployeesByDept(3);
```

### Stored Procedure with OUT Parameter

```sql
DELIMITER //

CREATE PROCEDURE GetEmployeeCount(IN dept_id INT, OUT emp_count INT)
BEGIN
    SELECT COUNT(*) INTO emp_count
    FROM employees
    WHERE department_id = dept_id;
END //

DELIMITER ;

-- Call with OUT parameter
CALL GetEmployeeCount(3, @count);
SELECT @count;
```

### Functions (User-Defined)

```sql
DELIMITER //

CREATE FUNCTION CalculateBonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN salary * 0.10;
END //

DELIMITER ;

-- Use function
SELECT first_name, salary, CalculateBonus(salary) AS bonus
FROM employees;
```

### Triggers

```sql
-- Trigger on INSERT
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
SET NEW.created_at = NOW();

-- Trigger on UPDATE
CREATE TRIGGER after_salary_update
AFTER UPDATE ON employees
FOR EACH ROW
INSERT INTO salary_audit (employee_id, old_salary, new_salary, change_date)
VALUES (NEW.employee_id, OLD.salary, NEW.salary, NOW());
```

### Pivoting Data

```sql
SELECT
    department_id,
    SUM(CASE WHEN YEAR(hire_date) = 2021 THEN 1 ELSE 0 END) AS '2021',
    SUM(CASE WHEN YEAR(hire_date) = 2022 THEN 1 ELSE 0 END) AS '2022',
    SUM(CASE WHEN YEAR(hire_date) = 2023 THEN 1 ELSE 0 END) AS '2023'
FROM employees
GROUP BY department_id;
```

### JSON Functions (MySQL 5.7+)

```sql
-- Create JSON data
SELECT JSON_OBJECT('name', first_name, 'salary', salary) AS employee_json
FROM employees;

-- Extract from JSON
SELECT
    JSON_EXTRACT(data, '$.name') AS name,
    JSON_EXTRACT(data, '$.age') AS age
FROM json_table;

-- JSON array
SELECT JSON_ARRAY(1, 2, 3, 4, 5);
```

### ALTER TABLE Operations

```sql
-- Add column
ALTER TABLE employees ADD COLUMN phone VARCHAR(20);

-- Drop column
ALTER TABLE employees DROP COLUMN phone;

-- Modify column
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12, 2);

-- Rename column
ALTER TABLE employees RENAME COLUMN old_name TO new_name;

-- Add constraint
ALTER TABLE employees ADD CONSTRAINT uq_email UNIQUE (email);

-- Rename table
ALTER TABLE employees RENAME TO staff;
```

### Performance Optimization Tips

```sql
-- Use EXPLAIN to analyze queries
EXPLAIN SELECT * FROM employees WHERE salary > 70000;

-- Create indexes on frequently queried columns
CREATE INDEX idx_salary ON employees(salary);

-- Use LIMIT when you don't need all results
SELECT * FROM employees ORDER BY salary DESC LIMIT 10;

-- Avoid SELECT *, specify columns
SELECT first_name, last_name, salary FROM employees;

-- Use WHERE instead of HAVING when possible
SELECT department_id, COUNT(*)
FROM employees
WHERE salary > 50000
GROUP BY department_id;
```

---

## Best Practices

1. **Use meaningful table and column names**
2. **Always use PRIMARY KEYs**
3. **Create FOREIGN KEYs to maintain referential integrity**
4. **Use appropriate data types**
5. **Create indexes on frequently queried columns**
6. **Avoid SELECT \* in production code**
7. **Use transactions for data consistency**
8. **Normalize your database to reduce redundancy**
9. **Use prepared statements to prevent SQL injection**
10. **Regular backups and maintenance**

---

## Common SQL Patterns

### Pagination

```sql
SELECT * FROM products
ORDER BY product_id
LIMIT 20 OFFSET 40;  -- Page 3, 20 items per page
```

### Find Duplicates

```sql
SELECT email, COUNT(*) AS count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

### Remove Duplicates (Keep One)

```sql
DELETE t1 FROM employees t1
INNER JOIN employees t2
WHERE t1.employee_id > t2.employee_id
  AND t1.email = t2.email;
```

### Running Total

```sql
SELECT
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;
```

### Find Second Highest Value

```sql
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

### Find Nth Highest Value

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;  -- 3rd highest (N-1)
```

---

This guide covers the fundamental and advanced SQL concepts with practical examples. SQL is a powerful language for database management, and mastering these concepts will enable you to work effectively with relational databases.
