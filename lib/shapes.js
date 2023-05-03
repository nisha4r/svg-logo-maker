class Shape {
    color;
    constructor() {

    }

    setColor(value) {
        this.color = value;
    }
}

class Triangle extends Shape {
    render() {
        <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" />
    }
}
class Circle extends Shape {
    render() {
        <circle cx="25" cy="75" r="60" />
    }
}
class Square extends Shape {
    render() {
        <rect x="10" y="10" width="150" height="150" stroke="black" fill="transparent" stroke-width="5" />
    }

}

module.exports = { Triangle, Circle, Square };