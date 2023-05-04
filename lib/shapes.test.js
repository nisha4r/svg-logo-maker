const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle Testing", () => {
    test("Triangle testing with yellow color and red text", () => {
        const shape = new Triangle("JFK", "red", "yellow");
        expect(shape.render()).toEqual(
            '<?xml version="1.0" standalone="no"?>'
            + '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<polygon points="100, 15 200, 200 0, 200" stroke="yellow" fill="yellow" />'
            + '<text x="100" y="150" font-size="50" text-anchor="middle" fill="red">JFK</text>'
            + '</svg>');
    });

});

describe("Circle Testing", () => {
    test("Circle testing with green color and white text", () => {
        const shape = new Circle("SLC", "white", "green");
        expect(shape.render()).toEqual(
            '<?xml version="1.0" standalone="no"?>'
            + '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<circle cx="150" cy="100" r="100" stroke="green" fill="green" />'
            + '<text x="150" y="125" font-size="70" text-anchor="middle" fill="white">SLC</text>'
            + '</svg>');
    });
});
describe("Square Testing", () => {
    test("Square testing with blue color and white text", () => {
        const shape = new Square("NYC", "white", "blue");
        expect(shape.render()).toEqual(
            '<?xml version="1.0" standalone="no"?>'
            + '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="10" width="200" height="200" stroke="blue" fill="blue" stroke-width="1" />'
            + '<text x="200" y="125" font-size="60" text-anchor="middle" fill="white">NYC</text>'
            + '</svg>');
    });

});


