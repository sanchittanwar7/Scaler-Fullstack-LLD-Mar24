"use strict"

// Case 1: Global Context
// console.log("GLobal context | THIS : ", this)

// Case 2: Function context
// function func() {
//     console.log("Function context | THIS : ", this)
// }
// func()

// Case 3: Object method
// const obj = {
//     name: 'name',
//     func: function() {
//         console.log("Object method | THIS : ", this)
//     }
// }

// obj.func()

// Case 4: Nested method
const obj = {
    name: 'name',
    func: function() {
        function func2() {
            console.log("Object method | THIS : ", this)
        }
        return func2
    }
}

// const v = obj.func() // -> const v = func2
// obj.func()()

obj.func()()

// var global = (0, eval)('this');

// console.log(global)
