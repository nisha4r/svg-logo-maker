const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

function writeToFile() {

}
function question() {
    inquirer.prompt([{
        type: "input",
        message: "Enter the text to display in your logo (max 3 characters)",
        name: "logoname"
    },
    {
        type: "input",
        message: "Enter text color either as color keyword or hexadecimal number",
        name: "color"

    },
    {
        type: "list",
        message: "Choose the shape of your logo",
        choices: ["Triangle", "Circle", "Square"],
        name: "shape"

    },
    {
        type: "input",
        message: "Enter the shape's color of your choice, input value should be : color keyword or hexadecimal number",
        name: "shapecolor"

    }
])
}

question();