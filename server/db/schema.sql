DROP DATABASE IF EXISTS expressions;

CREATE DATABASE expressions;

USE expressions;

CREATE TABLE quotesTable (
  /* Describe your table here.*/

  id int PRIMARY KEY AUTO_INCREMENT,
  quotesText varchar(1000) NOT NULL
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

