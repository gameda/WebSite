CREATE DATABASE healthnfood;

CREATE TABLE Users(
    username VARCHAR(50) NOT NULL PRIMARY KEY,
    passwrd VARCHAR(50) NOT NULL,
	fName VARCHAR(30) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    country VARCHAR(20) NOT NULL,
    gender CHAR NOT NULL
    age VARCHAR(2) NOT NULL,
    weight VARCHAR(5) NOT NULL,
    height VARCHAR(5) NOT NULL,
    activity VARCHAR(30) NOT NULL,
    goal VARCHAR(39) NOT NULL
);

CREATE TABLE Posts (
	id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    comment VARCHAR(150) NOT NULL,
    FOREIGN KEY (username) REFERENCES Users(username)
);