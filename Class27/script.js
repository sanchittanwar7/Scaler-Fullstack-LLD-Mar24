const person = {
    name: "Sanchit",
    age: 26,
    introduce: function() {
        console.log(this)
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old`)
    }
}

const btn = document.querySelector('button')
btn.addEventListener('click', person.introduce.bind(person))