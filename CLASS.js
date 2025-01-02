class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log(`Painting with color ${this.color}`);
    }

}

const rect = new Rectangle(2, 4,'red')
const area = rect.area();
console.log(area)
rect.paint();

const rect2 = new Rectangle(3,4,"black");
const area2 = rect2.area();
rect2.paint();
console.log(area2)
