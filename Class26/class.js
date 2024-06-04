function Car(model, year) {
    this.model = model;
    this.year = year;

    // this.describe = function() {
    //     console.log(`This is a ${this.model} ${this.year}`)
    // }
}

// Car.prototype.describe = function() {
//     console.log(`This is a ${this.model} ${this.year}`)
// }

// Car.prototype.__proto__.describe = function() {
//     console.log(`This is a ${this.model} ${this.year}`)
// }

const car1 = new Car("Toyota Camry", 2020);
// const car2 = new Car("Ford Mustang", 2022);

console.log(car1)
// console.log(car2)

// car1.describe()
// car2.describe()

// const arr = [12,12,12]
// arr.describe()

// const arr = [3,2,1]
// Array.prototype.toString = function () {
//     return "I wont let you to convert it into string"
// }
// console.log(arr.toString())

// const obj = {}
// const objPrototype = Object.getPrototypeOf(obj)
// console.log(objPrototype)

// const blah = Object.getPrototypeOf(objPrototype)
// console.log(blah)


// const carPrototype = {
//     describe: function() {
//         console.log(`This is a ${this.model} ${this.price}`)
//     },
//     parentCompany: 'abc'
// }

// const car1 = Object.create(carPrototype)
// car1.model = 'model'
// car1.price = '100000'
// console.log(car1.describe())
