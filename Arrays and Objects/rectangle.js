function rectangle(width, height, color) {
    function capitalize(word) {

        let color = word.split('')
        let first = color.shift()
        first = first.toUpperCase()

        return first + color.join('')
    }
    function calcArea() {

        return this.width * this.height

    }
    return {
        width: width,
        height: height,
        color: capitalize(color),
        calcArea
    }

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());