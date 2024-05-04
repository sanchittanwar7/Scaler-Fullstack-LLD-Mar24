const fs = require('fs')

// parallel async processing
let readFile1Promise = fs.promises.readFile('./file1.txt', 'utf-8')

const readFileCallback = result => {
    console.log("Content of my file: ", result)
}

const errorHandlingCallback = error => {
    console.log("Error reading the file", error)
}

readFile1Promise
    .then(readFileCallback)
    .catch(errorHandlingCallback)

let readFile2Promise = fs.promises.readFile('./file2.txt', 'utf-8')

readFile2Promise
    .then(readFileCallback)
    .catch(errorHandlingCallback)

// serial async processing
readFile1Promise
    .then(result => {
        console.log("Content of my file: ", result)
        let readFile2Promise = fs.promises.readFile('./file2.txt', 'utf-8')
        return readFile2Promise
    }).then(result => {
        console.log("Content of my file: ", result)
    }).catch(error => {
        console.log("Error reading the file", error)
    })


    

