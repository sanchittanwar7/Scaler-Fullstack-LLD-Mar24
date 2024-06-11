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


Promise.allSettled([fetchUserData(), fetchUserPosts()])
    .then(result => {
        console.log(result)
    })