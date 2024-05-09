// const jatinPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("jatinPromise rejected")
//         reject(2)
//     }, 2000);    
// })

// const p2 = new Promise((resolve, reject) => {

// })

// const sanchit = async () => {
//     return 100
// }

// const sanchit = async () => {
//     return jatinPromise
// }

// const f3 = async () => {
//     return p2
// }


// console.log(p1)
// console.log(p2)
// const promiseToNishant = sanchit()
// promiseToNishant
//     .then(money => console.log("promiseToNishant resolved"))
//     .catch(error => console.log("promiseToNishant rejected"))
// const promiseToNishant = sanchit()
// const f3result = f3()
// console.log(promiseToNishant)
// console.log(f3result)
// jatinPromise.then(data => console.log("then of jatinPromise")).catch(error => console.log("Error for jatinPromise"))
// promiseToNishant.then(data => console.log("then of promiseToNishant")).catch(error => console.log("Error for promiseToNishant")).finally(() => console.log("finally of f2results"))
// f3result.then(data => console.log("then of f3result")).catch(error => console.log("Error for f3result")).finally(() => console.log("finally of f3results"))



const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1 resolved')
        }, 2000)   
    })
}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 resolved')
        }, 2000)   
    })
}

// resolve promise in async function using await keyword
// const handlePromise = async () => {
//     const p1 = promise1()
//     const p2 = promise2()
//     console.log(await p1)
//     console.log(await p2)
//     console.log("I am done")
// }

const handlePromise = async () => {
    const p1 = await promise1()
    console.log( p1)
    const p2 = await promise2()   
    console.log( p2)
    console.log("I am done")
}

console.log("Start")
handlePromise()
console.log("End")