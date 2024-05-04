let clearnRoom = function() {
    return new Promise((resolve, reject) => {
        resolve('Cleaned my room')
    })
}

let removeGarbage = function() {
    return new Promise((resolve, reject) => {
        resolve('Garbage Not Removed')
    })
}

let winIcecream = function() {
    return new Promise((resolve, reject) => {
        resolve("Icecream won")
    })
}

clearnRoom()
    .then(result => {
        console.log(result)
        return removeGarbage()
    }).then(result => {
        console.log(result)
        return winIcecream()
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log("Second catch", error)
    })

