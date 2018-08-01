DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers
(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
burger_name VARCHAR
    (40) NOT NULL,
devoured BIT NOT NULL,
createdAt TIMESTAMP default current_timestamp NOT NULL,
PRIMARY KEY
    (id)

)