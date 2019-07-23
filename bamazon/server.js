// Requirements
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connection to server
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Door opens slowly with a seemingly abundant astral light fighting to escape...\n\n");
    showItems();
    
});

function showItems(){
    //open a connection.query to find all items in table
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("Heres the store...\n");
        console.log(res)
        console.log("--------------------------------------------")
        console.log(res[9].item_id)
        console.log("--------------------------------------------")
        if (err) throw err;
        askCustomer(res);
    })

    //askCustomer(data)
    function askCustomer(res){
    inquirer.prompt([
                    {
                        type: "input",
                        name: "userChoice",
                        message: "Please choose the item id of the item you would like to buy."
                    }]).then(function (answer) {
                        console.log(answer.userChoice)
                        console.log(res[answer.userChoice].item_id-1)
                        for (i=0; i = res[i].length; i++){
                        if (answer.userChoice===res[i].item_id-1)
                        {console.log("We're In")};
                        }
                    })
                }
};



// function seeShop(data) {
//     connection.query("SELECT * FROM products", function (err, res) {
//         console.log("Heres the store...\n");
//         if (err) throw err;
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "userChoice",
//                 message: "Please choose the item id of the item you would like to buy."
//             }]).then(function (user) {
//                 for (i = 0; i > res[i].length; i++) {
//                     if (parseInt(user.userChoice) === parseInt(res[i].item_id)) {
//                         console.log("How many would you like to buy?");
//                         inquirer.prompt([
//                             {
//                                 type: "input",
//                                 name: "userNumbers",
//                                 message: "Please tell us how much of the item you would like to buy."
//                             }]).then(function (user) {
//                                 connection.query(
//                                     "DELETE FROM products WHERE ?",
//                                     {
//                                         user: userNumbers
//                                     },
//                                     function (err, res) {
//                                         console.log(" products deleted!\n");
                                        
//                                     }
//                                 );
//                             })
//                     }
//                 }
//             });
//     }
//     )
// }