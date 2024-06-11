function fetchUserData () {
    return new Promise(resolve => {
        setTimeout(() => resolve({userId: 1, userName: 'sanchittanwar7'}), 3000)
    })
}

function fetchUserPosts () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(["Post1", "Post2"]), 3000)
    })
}

// function fetchUserPosts () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("Unable to retrieve posts"), 1000)
//     })
// }


Promise.myAll = function(promises) {
    return new Promise(function(resolve, reject) {
        let result = []
        let total = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(res => {
                    result[index] = res;
                    total++;
                    if (total == promises.length) {
                        resolve(result)
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    })
}

// Promise.all([fetchUserData(), fetchUserPosts()])
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })

Promise.myAll([fetchUserData(), fetchUserPosts()])
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})