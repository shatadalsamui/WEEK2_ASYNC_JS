// Rectangle class with width, height, and color properties
class Rectangle {
    constructor(width, height, color) {
        this.width = width; // set width
        this.height = height; // set height
        this.color = color; // set color
    }

    area() {
        const area = this.width * this.height; // calculate area
        return area; // return area
    }

    paint() {
        console.log(`Painting with color ${this.color}`); // print color
    }

}

const rect = new Rectangle(2, 4, 'red') // create Rectangle instance
const area = rect.area(); // get area
console.log(area) // print area
rect.paint(); // print color

const rect2 = new Rectangle(3, 4, "black"); // another Rectangle
const area2 = rect2.area(); // get area
rect2.paint(); // print color
console.log(area2) // print area
