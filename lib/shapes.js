class Shape {
   
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

}

class Triangle extends Shape {
    constructor(text, textBgColor, shapeBgColor){
        super(text, textBgColor, shapeBgColor);
    }
    render() {
       return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" />`
    }
}
class Circle extends Shape {
    constructor(text, textBgColor, shapeBgColor){
        super(text, textBgColor, shapeBgColor);
    }
    render() {
        return `<circle cx="25" cy="75" r="60" />`
    }
}
class Square extends Shape {
    constructor(text, textBgColor, shapeBgColor){
        super(text, textBgColor, shapeBgColor);
    }
    render() {
       return `<rect x="10" y="10" width="150" height="150" stroke="black" fill="transparent" stroke-width="5" />`
    }

}

module.exports = { Triangle, Circle, Square };