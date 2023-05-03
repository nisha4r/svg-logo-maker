const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

function writeToFile(fileName, promptAnswer) {
    let logo = "";
    fs.writeFile(fileName, logo, (error) => {
        error ? console.log(error) : console.log("Generated logo.svg");
    });

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
    ]).then(promptAnswer => {
        //Validate the logoname text is more than 3 character
        if (promptAnswer.logoname.length > 3) {
            console.log("logo name is more than 3 characters, please enter max of 3 characters to generate a logo");
        } else {
            //generate logo file here
            let fileName = 'logo.svg';
            writeToFile(fileName, promptAnswer);
        }
    });
}


//prompt on load
question();