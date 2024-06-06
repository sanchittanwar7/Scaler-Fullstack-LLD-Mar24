// function describeGlobal() {
//     // console.log(this)
//     return `Hi, my name is ${this.name} and I am ${this.age} years old`
// }

const person1 = {
    name: "Sanchit",
    age: 26,

    describe: function describeGlobal(greeting, location) {
        // console.log(this)
        return `${greeting}, my name is ${this.name} and I am ${this.age} years old. I live in ${location}`
    }
}

const person2 = {
    name: "Shynu",
    age: 26,
}

// Call function
// <function_that_we_want_to_call>.call(<value_of_this_keyword>, param1, param2)

console.log(person1.describe('hello', 'delhi'))
console.log(person1.describe.call(person2, 'hi', 'delhi'))

// Apply function
// <function_that_we_want_to_call>.apply(<value_of_this_keyword>, [param1, param2])
console.log(person1.describe('hello', 'delhi'))
console.log(person1.describe.apply(person2, ['hi', 'delhi']))

// Bind function
const func = person1.describe.bind(person2)
console.log(func)
// some point later in code
console.log(person1.describe('hello', 'delhi'))
console.log(func('hey', 'delhi'))
