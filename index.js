const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

function writeToFile() {

}
function question() {
    inquirer.prompt([{
        type: "input",
        message: "Enter the text to display in your logo (max 3 characters)",
        name: "text"
    },
    {
        
    }
])
}

question();