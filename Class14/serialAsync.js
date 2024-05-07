const placeOrder = (drink) => {
    return new Promise((resolve, reject) => {
        if (drink == 'coffee') {
            resolve('Order for coffee placed')
        } else {
            reject('Order can not be placed')
        }
    })
} 

const processOrder = new Promise((resolve, reject) => {
        resolve(`Order is served`)
    })


const generateBill = new Promise((resolve, reject) => {
        resolve(`Bill is generated`)
    })


// placeOrder('coffee')
//     .then(orderStatus => {
//         console.log(orderStatus)
//         return processOrder
//     }).then(processedOrder => {
//         console.log(processedOrder)
//         return generateBill
//     }).then(bill => {
//         console.log(bill)
//     }).catch(error => {
//         console.log(error)
//     })

const serveOrder = async () => {
    try {
        let orderStatusPromise = placeOrder('coffee')
        let orderStatus = await orderStatusPromise
        console.log(orderStatus)
        let processStatus = await processOrder
        console.log(processStatus)
        let billStatus = await generateBill
        console.log(billStatus)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONNEEEE")
    }
}

console.log("start")
serveOrder()
console.log("end")

// let name = 'Sanchit'

// console.log(name + 'Scaler')
// console.log(name, 'Scaler')
// console.log(`${name}Scaler`)


try {
    // all the code
} catch {
    // handle error
}
