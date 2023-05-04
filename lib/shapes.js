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
       xmlns="http://www.w3.org/2000/svg"> <polygon points="100, 15 200, 200 0, 200" />
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