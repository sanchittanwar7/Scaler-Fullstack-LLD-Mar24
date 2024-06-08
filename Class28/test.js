// Array.prototype.myMap = function (callback, thisArg) {
//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }
//   var result = [];

//   for (var i = 0; i < this.length; i++) {
//     if (i in this) {
//       var context = thisArg ? thisArg : this;
//       var mappedValue = callback.call(context, this[i], i, this);
//       result.push(mappedValue);
//     }
//   }
//   return result;
// };

// const multiplier = {
//   factor: 2,
// };

// // Define an array
// const numbers = [1, 2, 3, 4, 5];

// // Use the map function
// const doubledNumbers = numbers.map(function(element, index, array) {
//   console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
//   console.log(this)
//   return element * this.factor; // 'this' refers to the multiplier object
// }, multiplier); // 'thisArg' is the multiplier object

// console.log(doubledNumbers);

// if (!Array.prototype.myFilter) {
//   Array.prototype.myFilter = function (callback, thisArg) {
//     // Step 1: Throw a TypeError if 'callback' is not a function
//     if (typeof callback !== "function") {
//       throw new TypeError(callback + " is not a function");
//     }

//     // Step 2: Create a new empty array for the results
//     var result = [];

//     // Step 3: Iterate over the array
//     for (var i = 0; i < this.length; i++) {
//       // Check if the index exists in the array to handle sparse arrays
//       if (i in this) {
//         // Define the context for the callback
//         var context = thisArg ? thisArg : this;

//         // Step 4: Execute 'callback' for each element, considering 'thisArg'
//         // If 'callback' returns true, push the current element to 'result'
//         if (callback.call(context, this[i], i, this)) {
//           result.push(this[i]);
//         }
//       }
//     }

//     // Step 5: Return the new array
//     return result;
//   };
// }

// const multiplier = {
//   factor: 2,
// };

// // Define an array
// const numbers = [1, 2, 3, 4, 5];

// // Use the map function
// const doubledNumbers = numbers.myFilter(function (element, index, array) {
//   console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
//   console.log(this);
//   return element > this.factor; // 'this' refers to the multiplier object
// }, multiplier); // 'thisArg' is the multiplier object

// console.log(doubledNumbers);

// Polyfill for Array.prototype.reduce
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    // Step 1: Throw a TypeError if 'callback' is not a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Step 2: Handle empty array with no initial value case
    if (this.length === 0 && arguments.length === 1) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    console.log("arguments", arguments)
    console.log("this", this)
    // Step 3: Set the initial index and accumulator
    var accumulator = arguments.length >= 2 ? initialValue : this[0];
    var startIndex = arguments.length >= 2 ? 0 : 1;

    // Step 4: Iterate over the array
    for (var i = startIndex; i < this.length; i++) {
      // Check if the index exists in the array to handle sparse arrays
      if (i in this) {
        // Step 5: Update the accumulator
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    // Step 6: Return the accumulated value
    return accumulator;
  };
}

const numbers = [1, 2, , 4, 5];

const sum = numbers.reduce((acc, ele, index, arr) => {
    console.log(`Accumulator: ${acc}, Current Value: ${ele}, Current Index: ${index}, Array: ${arr}`);
    console.log(this)
    return acc+ele
}, 0)
console.log(sum)


// function flattenArray(arr) {
//     return arr.reduce((flatArray, item) => {
//         if (Array.isArray(item)) {
//             flatArray.push(...flattenArray(item)); // Recursively flatten nested arrays
//         } else {
//             flatArray.push(item); // If it's not an array, push it to the flatArray
//         }
//         return flatArray;
//     }, []);
// }

// // Example nested array
// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// // Flatten the nested array
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);
// console.log(nestedArray.flat(Infinity));


// const transactions = [
//     { customerId: 1, amount: 100, date: '2024-03-01' },
//     { customerId: 2, amount: 150, date: '2024-03-01' },
//     { customerId: 1, amount: 200, date: '2024-03-02' },
//     { customerId: 3, amount: 50, date: '2024-03-02' },
//     { customerId: 2, amount: 120, date: '2024-03-03' }
//   ];
  
//   // Step 1: Calculate the total number of transactions.
//   const totalTransactions = transactions.length;
  
//   // Step 2: Calculate the total amount of all transactions.
//   const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);
  
//   // Step 3: Calculate the average amount of transactions.
//   const averageTransactionAmount = totalAmount / totalTransactions;
  
//   // Step 4: Group transactions by date.
//   const transactionsPerDay = transactions.reduce((acc, transaction) => {
//     if (!acc[transaction.date]) {
//       acc[transaction.date] = [];
//     }
//     acc[transaction.date].push(transaction);
//     return acc;
//   }, {});
  
//   // Step 5: Group transactions by customer.
//   const transactionsByCustomer = transactions.reduce((acc, transaction) => {
//     if (!acc[transaction.customerId]) {
//       acc[transaction.customerId] = [];
//     }
//     acc[transaction.customerId].push(transaction);
//     return acc;
//   }, {});
  
//   // Step 6: Combine all results into a single object.
//   const result = {
//     totalTransactions,
//     totalAmount,
//     averageTransactionAmount,
//     transactionsPerDay,
//     transactionsByCustomer
//   };
  
//   console.log(result);
