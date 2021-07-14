function Rectangle(a, b) {
    this.length = a,
        this.width = b,
        this.perimeter = function () {
            return 2 * (this.length + this.width);
        },
        this.area = function () {
            return this.length * this.width;
        };

    return {
        length: this.length,
        width: this.width,
        perimeter: this.perimeter(),
        area: this.area()
    }
}

let sq = new Rectangle(4, 5);
// console.log(sq.length);
// console.log(sq.width);
// console.log(sq.perimeter());
// console.log(sq.area());
console.log(sq)