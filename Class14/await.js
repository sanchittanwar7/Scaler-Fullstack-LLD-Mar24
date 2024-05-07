const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 5000)   
})

// resolving promise inside a normal function
const fetchData = () => {
    promise.then(data => console.log(data))
    console.log("I am done")
}

// resolve promise in async function using await keyword
const handlePromise = async () => {
    const msg1 = await promise
    console.log(msg1)
    const msg2 = await promise
    console.log(msg2)
    console.log("I am done")
}

console.log("Start")
// fetchData()
handlePromise()
console.log("End")