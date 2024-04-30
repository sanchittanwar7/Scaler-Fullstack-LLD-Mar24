let arr = [1, -2, 3, -4, 5]

// function squareOfNumber(number) {
//     return number*number
// }

// let squareOfNumber = function(number) {
//     return number*number
// }

// let squareOfNumber = number => {
//     return number*number
// }

let squares = arr.map(number => {
    return number*number
})

console.log(arr)
console.log(squares)


let positiveNumbers = arr.filter(number => {
    return number > 0
})

console.log(positiveNumbers)

let negativeNumebers = arr.filter(number => {
    return number < 0
})

console.log(negativeNumebers)


arr.forEach(number => {
    console.log(number*number)
})


let positive_some = arr.some(number => {
    return number > 0
})

console.log(positive_some)

let positive_any = arr.every(number => {
    return number > 0
})

console.log(positive_any)


// let sum = 0
// for(let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)


let sum = arr.reduce((sum, number) => {
    return sum+number
}, 0)

console.log(sum)