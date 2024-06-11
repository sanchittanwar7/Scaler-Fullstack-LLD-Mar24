function quickResolve() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Quickly resolve"), 100)
    })
}

function slowResolveOrFastReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Slowly resolved"), 2000)
        setTimeout(() => reject(new Error("Quickly Rejected")), 500)
    })
}


Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        // Add one check for Array.isArray()
        
        if (promises.length === 0) {
            throw new TypeError('Cannot perform Promise.race on an empty array')
        }

        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject)
        })
    })
}


// Promise.race([quickResolve(), slowResolveOrFastReject()])
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })

Promise.myRace([])
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })