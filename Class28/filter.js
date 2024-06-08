const arr = [1, 2, 3];
const threshold = {
  factor: 2,
};

console.log("arr: ", arr);

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error(callback + " is not a function");
  }

  var result = [];

  for (var i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

// const transformedArr = arr.filter(function (ele, index, array) {
//   console.log(
//     `Checking if element (which is ${ele}) at index ${index} of array ${array} is greater than or equals to ${threshold.factor}`
//   );
//   return ele >= threshold.factor;
// }, threshold);

const transformedArr = arr.myFilter(function (ele, index, array) {
    console.log(
      `Checking if element (which is ${ele}) at index ${index} of array ${array} is greater than or equals to ${threshold.factor}`
    );
    return ele >= threshold.factor;
  }, threshold);

console.log("arr: ", arr);
console.log("transformedArr: ", transformedArr);
