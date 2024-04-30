function printName(name, printAgeCallback, printAddressCallback) {
    console.log(name) 
    printAddressCallback("Delhi")
    printAgeCallback()
}

function printAge() {
    // console.log(age)
    return 26;
}

let printAddress = function(city) {
    console.log(city)
}

printName("Sanchit", printAge, printAddress)
// printAge()
// printAddress()
