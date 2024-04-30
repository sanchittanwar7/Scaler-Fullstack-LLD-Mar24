var c = 0

function sum(a, b) {
    return a + b + c++;
    // return a + b + Math.random();
}

function sum_pure(a, b) {
    return a + b
}
console.log(c)
console.log(sum(2, 3)) // 5
console.log(c)
console.log(sum(2, 3)) // 6
console.log(c)