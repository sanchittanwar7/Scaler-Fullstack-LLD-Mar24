"use strict"

// Case 1: Global Context
// console.log("Global context | THIS : ", this)

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

obj.func()()
