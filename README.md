# Mysql Bamazon App

*   This is Mysql app that depends on user input from the command line
*   It uses a MySQL database on the back-end to store its product information.
*   It relies on the npm inquirer package to display prompts.
*   It takes the user input and give back response of the product purchasing detail as per available stock in the bamazon        product.

## Technologies Used
*   Javascript
*   Node.js
*   Mysql database
*   NPM Inquirer Package
*   NPM Mysql Package

## Mysql Bamazon App Videos

** Video Link

[Mysql Bamazon App Video](https://drive.google.com/open?id=1INnvBV7moTcg5ZqSxFUW-NgWI_SyB900)

## Mysql Bamazon App Images

** Bamazone product item purchased

![alt text](https://github.com/atiftariq786/mysql-bamazon-app/blob/master/assets/images/Item-Purchased.png?raw=true "Item Purchased")

** Bamazone product insufficient quantity 

![alt text](https://github.com/atiftariq786/mysql-bamazon-app/blob/master/assets/images/Insufficient-quantity.png?raw=true "Insufficient Quantity")

** Bamazone product valid input

![alt text](https://github.com/atiftariq786/mysql-bamazon-app/blob/master/assets/images/Valid%20input.png?raw=true "Valid Input")

** Mysql database updated

![alt text](https://github.com/atiftariq786/mysql-bamazon-app/blob/master/assets/images/Mysql-database-updated.png?raw=true "Mysql database updated")

** Quit purchasing

![alt text](https://github.com/atiftariq786/mysql-bamazon-app/blob/master/assets/images/Runtime-Quit%20Shoping.png?raw=true "Quit purchasing")

## Mysql Bamazon Description

*   I am using main four function to fullfill app requirement and there are 4 main functions
        (1) displayproducts: This function display the bamazon product table with full stock and then call the promptUser function.
        (2) promptUser: This function ask the question from user, takes the user input using valid user input check conditions and than call the checkQuantity function.
        (3) checkQuantity: This function compare the user input with database. It give back response to user for the available stock and purchasing detail as well and than call to updateData function.
        (4) updateData: This function update the available product stock in database and call to displayProduct.
*   Purchase item summary will be diplay including unit rate, quantity and total price.
*   User can quit the Bamazon shoping with enter the "Q" in any user input.

## Author
    Atif Tariq
