/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS chours_db;

-- Create the database chours_db and specified it for use.
CREATE DATABASE chours_db;

USE chours_db;

-- Create the table tasks.
CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(255) NOT NULL,
  pay decimal(4,2)
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO tasks (task,pay) VALUES ('Clean Apt', 20.00);
INSERT INTO tasks (task,pay) VALUES ('Book Report', 50.00);

