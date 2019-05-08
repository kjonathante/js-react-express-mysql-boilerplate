DROP DATABASE IF EXISTS myproject_db;
CREATE DATABASE myproject_db;
USE myproject_db;
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  PRIMARY KEY(id),
  username VARCHAR(255)
);

INSERT INTO users (username) VALUES ('Jasmine'), ('Ariel'), ('Cinderella');
