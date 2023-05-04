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
       return `<?xml version="1.0" standalone="no"?>
       <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
       xmlns="http://www.w3.org/2000/svg"><polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" />
       </svg>`;
    }
}
class Circle extends Shape {
    constructor(text, textBgColor, shapeBgColor){
        super(text, textBgColor, shapeBgColor);
    }
    render() {
        return `<?xml version="1.0" standalone="no"?>
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="60" />
        </svg>`;
    }
}
class Square extends Shape {
    constructor(text, textBgColor, shapeBgColor){
        super(text, textBgColor, shapeBgColor);
    }
    render() {
       return `<?xml version="1.0" standalone="no"?>
       <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="150" height="150" stroke="black" fill="transparent" stroke-width="5" />
       </svg>`
    }

}

module.exports = { Triangle, Circle, Square };