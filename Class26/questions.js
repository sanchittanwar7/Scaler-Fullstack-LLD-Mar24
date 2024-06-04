// let obj = { name: 'Sample Object' };
// console.log(obj.toString());  // Normally works

// // Set prototype to null
// obj.__proto__ = null;
// try {
//     console.log(obj.toString());  // This will throw an error
// } catch (e) {
//     console.log("Error:", e.message);
// }
console.log("Test")
function A() {
    name: 'a'
}

function B() {
    name: 'b'
}

const a = new A()
const b = new B()

A.__proto__ = B

try {
    // B.prototype = a
    console.log(a)
    console.log(b)
} catch (e) {
    console.log("Error: ", e)
}
