let transactions = [100, -200, 300, -400, 500]

// let filterCreditTransactions = transactions => {
//     let creditTransactions = []
//     for(let i = 0; i < transactions.length; i++) {
//         if (transactions[i] > 0) {
//             creditTransactions.push(transactions[i])
//         }
//     }
//     return creditTransactions
// }

// let creditTransactions = filterCreditTransactions(transactions)
// console.log(creditTransactions)


// let filterDebitTransactions = transactions => {
//     let debitTransactions = []
//     for(let i = 0; i < transactions.length; i++) {
//         if (transactions[i] < 0) {
//             debitTransactions.push(transactions[i])
//         }
//     }
//     return debitTransactions
// }

// let debitTransactions = filterDebitTransactions(transactions)
// console.log(debitTransactions)

let isDebit = transaction => {
    return transaction < 0
}

let isCredit = transaction => {
    return transaction > 0
}

let isFraudTransaction = transaction => {
    return transaction > 1000
}

let filterTransactions = (transactions, filterCallback) => {
    let filteredTransactions = []
    for(let i = 0; i < transactions.length; i++) {
        if(filterCallback(transactions[i])) {
            filteredTransactions.push(transactions[i])
        }
    }
    return filteredTransactions
}

let creditTransactions = filterTransactions(transactions, isCredit)
let debitTransactions = filterTransactions(transactions, isDebit)
let fraudTransactions = filterTransactions(transactions, isFraudTransaction)

console.log(creditTransactions)
console.log(debitTransactions)