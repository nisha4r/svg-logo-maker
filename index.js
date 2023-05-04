const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

function writeToFile(fileName, promptAnswer) {

    let logo = '<?xml version="1.0" standalone="no"?>' +
        ' <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    let shape = promptAnswer.shape;
   
        logo += '</svg>';
    fs.writeFile(fileName, logo, (error) => {
        error ? console.log(error) : console.log("Generated logo.svg");
    });

}
function question() {
    inquirer.prompt([{
        type: "input",
        message: "Enter the text to display in your logo (max 3 characters)",
        name: "logoName"
    },
    {
        type: "input",
        message: "Enter text color either as color keyword or hexadecimal number",
        name: "textColor"

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
        name: "shapeColor"

    }
    ]).then(promptAnswer => {
        //Validate the logoname text is more than 3 character
        if (promptAnswer.logoName.length > 3) {
            console.log("logo name is more than 3 characters, please enter max of 3 characters to generate a logo");
            question();
        } else {
            //generate logo file here
            let fileName = 'logo.svg';
            writeToFile(fileName, promptAnswer);
        }
    });
}

function createShape(resp){

    let shape = resp.shape;
    let text = resp.logoName;
    let shapeBgColor = resp.shapeColor;
    let textBgColor = resp.textColor;

    switch(shape) {
        case "Triangle":
          let triangle = new Triangle(text, textBgColor, shapeBgColor);
          break;
        case "Circle":
         
          break;
        case "Square":
          
          break;
        default:
          
      }
}
//prompt on load
question();