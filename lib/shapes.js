class Shape {
   
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textBgColor = textColor;
        this.shapeBgColor = shapeColor;
    }

}

class Triangle extends Shape {
    constructor(text, textBgColor, shapeBgColor){
        super(text, textBgColor, shapeBgColor);
    }
    render() {
       return `<?xml version="1.0" standalone="no"?>
       <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
       <polygon points="100, 15 200, 200 0, 200" stroke="${this.shapeBgColor}" fill="${this.shapeBgColor}" />
       <text x="100" y="150" font-size="50" text-anchor="middle" fill="${this.textBgColor}">${this.text}</text>
       </svg>`;
    }
}
class Circle extends Shape {
    constructor(text, textBgColor, shapeBgColor){
        super(text, textBgColor, shapeBgColor);
    }
    render() {
        return `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" stroke="${this.shapeBgColor}" fill="${this.shapeBgColor}" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textBgColor}">${this.text}</text>
        </svg>`;
    }
}
class Square extends Shape {
   
    constructor(text, textBgColor, shapeBgColor){
        super(text, textBgColor, shapeBgColor);
    }
    render() {
       return `<?xml version="1.0" standalone="no"?>
       <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="10" width="200" height="200" stroke="${this.shapeBgColor}" fill="${this.shapeBgColor}" stroke-width="1" />
       <text x="200" y="125" font-size="60" text-anchor="middle" fill="${this.textBgColor}">${this.text}</text>
       </svg>`
    }

}

module.exports = { Triangle, Circle, Square };