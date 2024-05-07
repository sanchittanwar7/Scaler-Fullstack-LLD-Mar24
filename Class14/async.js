// const fetchData = () => {
//     // make some API call
//     return 'data'
// }

// const data = fetchData()
// console.log(data)

// Async func return data
// const fetchData1 = async () => {
//     // make some API call
//     return 'data'
// }

// const dataPromise1 = fetchData1()
// console.log(dataPromise1)

// dataPromise1.then(data => {
//     console.log(data)
// })

// Async func returns a promise
const promise = new Promise((resolve, reject) => {
    resolve('Promise resolved')
})

const fetchData = async () => {
    // make some API call
    return promise
}

const dataPromise = fetchData()
console.log(dataPromise)

dataPromise.then(data => {
    console.log(data)
}) 