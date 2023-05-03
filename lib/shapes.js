class Shape {
    color;
    constructor() {

    }

    setColor(value) {
        this.color = value;
    }
}

class Triangle extends Shape {

}
class Circle extends Shape {

}
class Square extends Shape {

}

module.exports =   {Triangle, Circle, Square};