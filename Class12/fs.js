const fs = require("fs")

// console.log("Before")

// const file1 = fs.readFileSync("/Users/stanwar/Desktop/Sanchit/Work/LLD/Mar24/Class12/file1.txt", "utf-8")

// console.log(file1)

// console.log("After")


// console.log("Before")

// fs.readFile("/Users/stanwar/Desktop/Sanchit/Work/LLD/Mar24/Class12/file1.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log("Error reading file: ", err)
//     } else {
//         console.log(data)
//     }    
// })

// fs.readFile("/Users/stanwar/Desktop/Sanchit/Work/LLD/Mar24/Class12/file2.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log("Error reading file: ", err)
//     } else {
//         console.log(data)
//     }    
// })

// console.log("After")


console.log("Before")

fs.readFile("/Users/stanwar/Desktop/Sanchit/Work/LLD/Mar24/Class12/file1.txt", "utf-8", (err, data) => {
    if(err) {
        console.log("Error reading file: ", err)
    } else {
        console.log(data)
        fs.readFile("/Users/stanwar/Desktop/Sanchit/Work/LLD/Mar24/Class12/file2.txt", "utf-8", (err, data) => {
            if(err) {
                console.log("Error reading file: ", err)
            } else {
                console.log(data)
                // async task 3 here with the callback
            }    
        })
    }    
})

console.log("After")