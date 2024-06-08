const arr = [1,2,,4,5];
console.log("arr: ", arr);

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    return new Error(callback + " is not a function");
  }

  console.log(arguments);
  if (getLengthExcludingEmptyElements(this) === 0 && arguments.length === 1) {
    throw new Error("Reduce of empty array with no initial value");
  }

  var accumulator = arguments.length >= 2 ? initialValue : getFirstNonEmptyElement(this);
  var startIndex = arguments.length >= 2 ? 0 : getIndexFirstNonEmptyElement(this) + 1;

  for (var i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

function getLengthExcludingEmptyElements(arr) {
    var length = 0;
    for(var i = 0; i < arr.length; i++) {
        if (i in arr) {
            length++
        }
    }
    return length
}

function getFirstNonEmptyElement(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (i in arr) {
            return arr[i]
        }
    }
}

function getIndexFirstNonEmptyElement(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (i in arr) {
            return i
        }
    }
}

// const sum = arr.reduce((sum, ele, index, array) => {
//   console.log(
//     `Adding ${ele} which is at index ${index} in array ${array} to current sum ${sum}`
//   );
//   sum = sum + ele;
//   return sum;
// });

const sum = arr.myReduce((sum, ele, index, array) => {
    console.log(
      `Adding ${ele} which is at index ${index} in array ${array} to current sum ${sum}`
    );
    sum = sum + ele;
    return sum;
  });

console.log("arr: ", arr);
console.log("sum: ", sum);

// 1. complete sparse array. expected: error, got: undefined - FIXED
// 2. First index is sparse and no initial values, expected: sum, got: NaN
