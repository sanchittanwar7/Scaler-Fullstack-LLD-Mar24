const arr = [1,,3]
const multiplier = {
    factor: 3
}

console.log("arr: ", arr)

Array.prototype.myMap = function(callback, thisArg) {
    console.log("callback: ", callback)
    console.log("this: ", this)
    console.log("thisArg: ", thisArg)
    if(typeof callback !== 'function') {
        throw new Error(callback + ' is not a function')
    }
    var result = [];
    for(var i = 0; i < this.length; i++) {
        if (i in this) {  
            var mappedValue = callback.call(thisArg, this[i], i, this)
            result.push(mappedValue)              
        } else {
            result.length++
        }        
    }
    return result;
}

// const transformedArr = arr.map(function(ele, index, array) {
//     console.log(`Multiplying element of array ${array} at index ${index} (which is ${ele}) by 2`)
//     return this.factor*ele;
// }, multiplier)

const transformedArr = arr.myMap(function(ele, index, array) {
    console.log(`Multiplying element of array ${array} at index ${index} (which is ${ele}) by 2`)
    return this.factor*ele;
}, multiplier)


console.log("arr: ", arr)
console.log("transformedArr: ", transformedArr)
 