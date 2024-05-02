const task1 = () => {
    console.log("I am task 1")
}

const task2 = () => {
    console.log("I am task 2")
}


const heavyTaskSync = () => {
    console.log("Starting heavy task")

    let start = Date.now()
    // mimicing heavy opertaion which will take 5 secs to run
    while (Date.now() - start < 10000) {
        
    }
    console.log("Ended heavy operation")
}

const heavyTaskAsync = () => {
    console.log("Start heavy operation")

    setTimeout(() => {
        console.log("End heavy task")
    }, 10000)
    
}

task1()
// heavyTaskSync()
heavyTaskAsync()
task2()