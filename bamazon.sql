DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(20,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla", "customer", 2.50, 100),("rice", "customer", 5.50, 100),("cake", "customer", 3.50, 200),("cake", "customer", 3.50, 200),("cake", "customer", 3.50, 200);




SELECT * FROM products;


