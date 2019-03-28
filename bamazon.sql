--==================================MYsql DATA BASE CODE ==========================================--

DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;
-------------------------Create Table---------------------------
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(20,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);
-------------------------Create Rows in table---------------------------
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cake-Peanut", "Production", 5.50, 500),("Cake-Choco", "Production", 8.50, 200),("Cold-Drink", "production", 1.50, 300),("Watch-Gold", "Electronics", 40.50, 100),("Wifi-Router", "Electronics", 20.50, 100),("Power-Bank", "Electronics", 30.00, 50),("Lamp-Stand", "Electronics", 10.00, 50),("Juicer-Blnd", "Electronics", 50.00, 50),("Chopper-MT", "Electronics", 20.00, 100),("Car-Charger", "Electronics", 30.00, 100);


SELECT * FROM products;

--************************************** END SQL CODE ***********************************************--

