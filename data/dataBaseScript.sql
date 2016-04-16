CREATE DATABASE TheJammer_DB;

CREATE TABLE Users (
	fName VARCHAR(30) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    userName VARCHAR(50) NOT NULL PRIMARY KEY,
    passWord VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    country VARCHAR(20) NOT NULL,
    gender CHAR NOT NULL
    
);

CREATE TABLE Comments (
	id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    comment VARCHAR(150) NOT NULL,
    FOREIGN KEY (userName) REFERENCES Users(userName)
);

CREATE TABLE Friends (
	id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    friendName VARCHAR(50) NOT NULL,
    FOREIGN KEY (userName) REFERENCES Users(userName),
    FOREIGN KEY (friendName) REFERENCES Users(userName)
);

CREATE TABLE PendingFriendship (
	id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userFrom VARCHAR(50) NOT NULL,
    userTo VARCHAR(50) NOT NULL,
    FOREIGN KEY (userFrom) REFERENCES Users(userName),
    FOREIGN KEY (userTo) REFERENCES Users(userName)
);

INSERT INTO Users (fName, lName, userName, passWord, email, country, gender)
VALUES 	('Daniel', 'Garcia', 'gmd17', 'x', 'dan@', 'Mexico', 'M'),
		('Luis', 'Lopez', 'll65', 'x', 'luis@', 'Mexico', 'M'),
		('Jose', 'Perez', 'joshp178', 'x', 'jose@', 'France', 'M'),
		('Diana', 'Mena', 'dian56', 'x', 'diana@', 'Japan', 'F'),
		('Rosa', 'Garza', 'rositag', 'x', 'rosa@', 'China', 'M');

INSERT INTO Comments(userName, comment)
VALUES  ('rositag', 'Class Practice hint to include and change the functionality to jQuery. Open the attached'),
		('dian56', 'The class starts at 7:35AM and your lecturer will take attendance at 7:35AM'),
		('gmd17', 'You must use the AJAX, jQuery, cookies and sessions techniques that we saw at class to manipulate PHP services.'),
		('joshp178', 'Each service must be written in a different PHP file. Name the servicewith a relevant name'),
		('ll65', 'Follow instructions!'); 

INSERT INTO Friends(userName, friendName)
VALUES  ('gmd17', 'joshp178'),
		('joshp178', 'gmd17'), 
		('gmd17', 'dian56'), 
		('dian56', 'gmd17'), 
		('dian56', 'll65'), 
		('ll65', 'dian56'), 
		('gmd17', 'll65'), 
		('ll65', 'gmd17'); 


INSERT INTO PendingFriendship(userFrom, userTo)
VALUES  ('rositag', 'joshp178'),
		('rositag', 'gmd17'), 
		('rositag', 'dian56'),
		('ll65', 'rositag');




		