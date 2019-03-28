  var mysql = require("mysql");
  var inquirer = require("inquirer");

  var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "asialink",
  database: "bamazon_db"
});

// ===================================Main Operation =============================================

// connect to the mysql server and sql database
  connection.connect(function(err) {
  if (err) throw err;
// run the start function to begin displaying products
  displayProducts();
});

// retrieve and display all products in the bamazon products table from this function
  function displayProducts() {

  connection.query(
      "SELECT * FROM products", 
  function(err, data) {
// account for potential errors
      if (err) throw err;              

      console.log("============================== Bamazon Products =======================================\n");

      
      console.log("Item ID","----","Product Name","----","Department Name","----","Price","----","Stock Quantity \n")
    for (var i = 0; i < data.length; i++) {
    console.log(

      "   " + data[i].item_id + "            "
    + data[i].product_name + "            "
    + data[i].department_name + "            "
    + data[i].price + "            "
    + data[i].stock_quantity);
          
          
      }
      console.log("=======================================================================================\n");
      // call my prompt function 
      promptUser();
  });
}

  // function to prompt ask to user which item they would like to purchase 
  function promptUser() {

  // begin my inquirer prompt
  inquirer.prompt([
      {
          name: "item_id",
          type: "input",
          message: "What is the ID number of the item you would like to purchase?[Quit with Q] ",
                   
      },
      {
          name: "quantity",
          type: "input",
          message: "How many you would like?[Quit with Q] ",
         
          }
         
  ]).then(function(answer) {

      // store user choices in local variables
      var itemId = answer.item_id;
      
      var quantity = answer.quantity;
                  
  //------------- Valid Input and Quit Purchasing----------------------------
  if(itemId === "Q" || quantity === "Q"){
  console.log("Thanks for using Bamazon");
  connection.end();
  

}
 
  else if (itemId === "" ) {
  console.log("Please enter Item ID and quantity");
  displayProducts();
} 
  else if(quantity === ""){
    console.log("Please enter a quantity");
  displayProducts();
  }
  
  else{
  console.log("------------------------------------------\n")
  console.log("Item ID Selected: " +itemId);
  console.log("Quantity Selected: " +quantity);
  console.log("------------------------------------------\n")
 
  checkQuantity(quantity,itemId);

  }
});    
}

  function checkQuantity(quantity,itemId){

  connection.query('SELECT stock_quantity,price FROM products WHERE item_id = "' + itemId +'"', function(err, res) {
   if (err) throw err;
   
   
   var updateQty = res[0].stock_quantity;
   var price = res[0].price;


   if (updateQty >= quantity ){

    var totalPrice = price * quantity;

    console.log("Succesfully purchased!");
    console.log("Quantity: " + quantity + "  Unit Price: " + price + " $");
    console.log("Total Price: " + totalPrice + " $");
    
    updateData(itemId,quantity,updateQty);

   }
   else{

    console.log("Insufficient quantity!");
    console.log("Available stock: " + updateQty);
    console.log("Customer required: " + quantity);
    displayProducts();
  }

})
}

function updateData(itemId,quantity,updateQty){

  var newQty = updateQty-quantity;
  connection.query("UPDATE products SET ? WHERE ?",
    [
      
      {
        stock_quantity: newQty
      },
  
      {
        item_id: itemId
      }
           
    ],
    
  );
  
  displayProducts();
  
  
  }
  
  