function sum(a, b) {
    console.log("Traditional function")
    return a+b
}

var s = sum(1, 2)
console.log(s)

var product = function(a, b) {
    console.log("Function expression")
    return a*b
}

var p = product(2, 3)
console.log(p)

var subtract = (a, b) => {
    console.log("Arrow function")
    return a-b;
}

var sub = subtract(4, 2)
console.log(sub)

var square = a => a*a

var sq = square(5)
console.log(sq)


var val = ((x) => {
    return x*x
})(6);

console.log(val)
