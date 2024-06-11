function resolveQuickly() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Resolved quickly'), 500)
    })
}

function resolveSlowly() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Resolved slowly'), 2000)
    })
}


Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
        let rejections = [];
        let rejectedCount = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(error => {
                    rejections[index] = error;
                    rejectedCount++;
                    if(rejectedCount == promises.length) {
                        reject(new AggregateError(rejections, 'All promises were rejected'))
                    }
                })
        })
    })
}


// Promise.any([resolveQuickly(), resolveSlowly()])
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })

Promise.myAny([resolveQuickly(), resolveSlowly()])
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })