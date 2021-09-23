CREATE DATABASE SPIT;

USE SPIT;

CREATE TABLE member
(
id int not null auto_increment,
first_name varchar(30),
last_name varchar(30),
email varchar(30),
age int,
password varchar(30),
address_id int,
primary key(id),
FOREIGN KEY (address_id) REFERENCES address(id)
);

INSERT INTO member (id, first_name, last_name, email, age, password, address_id)
VALUES 
(1, "John", "Doe", "jdoe@mail.com", "25",  "123", "1"),
(2, "Marco", "Polo", "mpolo@mail.com", "30",  "123", "2"),
(3, "Tom", "Riddle", "triddle@mail.com", "35",  "123", "3");

DROP TABLE Member;
delete from Member where id = 1;
ALTER TABLE Member AUTO_INCREMENT = 1;
SELECT * FROM Member;

CREATE TABLE address (
	id int not null auto_increment,
	street varchar(30),
    city varchar(20),
    state varchar(20),
    zip varchar(10),
    PRIMARY KEY (id)
);

INSERT INTO address (id, street, city, state, zip)
VALUES 
(1, "1234 Main St", "Miami", "Florida", "12345"),
(2, "5678 Main St", "Atlanta", "Georgia", "12346"),
(3, "9012 Main St", "Austin", "Texas", "12347");

SELECT * FROM address;
delete from address where id = 1;
ALTER TABLE address AUTO_INCREMENT = 1;
DROP TABLE address;

CREATE TABLE Stocks
(
id INT NOT NULL AUTO_INCREMENT,
symbol VARCHAR(9), 
company_name VARCHAR(100),
Price DECIMAL(6, 2),
day_change DECIMAL(6, 2),
bid DECIMAL(6, 2),
ask DECIMAL(6, 2),
member_id int,
PRIMARY KEY (id),
FOREIGN KEY (member_id) REFERENCES member(id)
);

DROP TABLE stocks;
SELECT * FROM Stocks;

delete from stocks where id = 1;
ALTER TABLE stocks AUTO_INCREMENT = 1;

INSERT INTO Stocks (id, symbol, company_name, member_id)
VALUES 
(1, "GOOGL", "Alphabet Inc Class A", "1"),
(2, "AMZN", "Amazon.com, Inc.", "2"),
(3, "AAPL", "Apple Inc", "1");

CREATE TABLE StockList
(
id INT NOT NULL AUTO_INCREMENT,
symbol VARCHAR(9), 
company_name VARCHAR(100),
Price DECIMAL(6, 2),
day_change DECIMAL(6, 2),
Bid DECIMAL(6, 2),
Ask DECIMAL(6, 2),
member_id int,
PRIMARY KEY (id),
FOREIGN KEY (member_id) REFERENCES member(id)
);

SELECT * FROM StockList;
DROP TABLE StockList;

INSERT INTO StockList (id, symbol, company_name, price, day_change, bid, ask, member_id)
VALUES 
(1, "GOOGL", "Alphabet Inc Class A", "2888.27", "13.48",  "2886.94", "2888.26", "1"),
(2, "AMZN", "Amazon.com, Inc.", "3515.54", "37.49", "3509.81", "3511.25", "2"),
(3, "AAPL", "Apple Inc", "155.69", "1.39", "155.59", "155.6", "1");

DROP DATABASE SPIT