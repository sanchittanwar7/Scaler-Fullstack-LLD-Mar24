const nestedArray = [1, [2, 3], [4, [5, 6]]]

// [1,2,3,4,5,6]

// const flattenedArray = [...nestedArray]

function flattenArray(arr) {
    const flattenedArray = arr.reduce((flatArray, item) => {
        if (Array.isArray(item)) {
            // Further flatten it
            const _flatArray = flattenArray(item)
            flatArray.push(..._flatArray)
        } else {
            // push element in accumulator
            flatArray.push(item)
        }
        return flatArray;
    }, [])
    return flattenedArray
}

console.log(flattenArray(nestedArray))


// Problem Statement:

// You are given an array of objects representing transactions made by customers. Each object contains the following properties:

// customerId: Number, representing the unique ID of the customer.
// amount: Number, representing the amount of the transaction.
// date: String, representing the date of the transaction (in the format "YYYY-MM-DD").
// Your task is to write a JavaScript function using functional programming techniques that takes this array of transaction objects and returns an object containing the following information:

// totalTransactions: Total number of transactions.
// totalAmount: Total amount of all transactions.
// averageTransactionAmount: Average amount of transactions.
// transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
// transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.
// Example Input:

// const transactions = [
//   { customerId: 1, amount: 100, date: '2024-03-01' },
//   { customerId: 2, amount: 150, date: '2024-03-01' },
//   { customerId: 1, amount: 200, date: '2024-03-02' },
//   { customerId: 3, amount: 50, date: '2024-03-02' },
//   { customerId: 2, amount: 120, date: '2024-03-03' }
// ];

// Expected answer:

// const details = {
//     totalTransactions: '',
//     totalAmount: '',
//     averageTransactionAmount: '',
//     transactionsPerDay: {
//         '2024-06-01': [<list_of_transactions_on_1st_June>],
//         '2024-06-02': [<list_of_transactions_on_2nd_June>],
//     },
//     transactionsByCustomer: {
//         '1': [<list_of_transactions_done_by_customer_1>],
//         '2': [<list_of_transactions_done_by_customer_2>],
//     }
// }