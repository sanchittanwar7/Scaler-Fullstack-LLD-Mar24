const car = {
    name: "Creta",
    color: "white",
}

function buyCar(price, place) {
    console.log(`Brought a ${this.color} colored ${this.name} of ${price} in ${place}`)
}

Function.prototype.myCall = function(context = {}, ...args) {
    if(typeof this !== 'function') {
        throw new Error(this + ' is not callable')
    }
    context.tempFunc = this;
    context.tempFunc(...args)
}

Function.prototype.myApply = function(context = {}, argsArray = []) {
    if(typeof this !== 'function') {
        throw new Error(this + ' is not callable')
    }
    if(!Array.isArray(argsArray)) {
        throw new Error(this + 'needs an array of arguments')
    }
    context.tempFunc = this;
    context.tempFunc(...argsArray)
}

Function.prototype.myBind = function(context = {}, ...boundArgs) {
    if(typeof this !== 'function') {
        throw new Error(this + ' is not callable')
    }
    const tempFunc = this;
    return function (...args) {
        return tempFunc.apply(context, [...boundArgs, ...args])
    }
}

// buyCar.call(car, 1000000)
// buyCar.myCall(car, 100000)

// buyCar.apply(car, [100000, 'delhi'])
// buyCar.myApply(car, [100000, 'delhi'])


const funcInbuilt = buyCar.bind(car, 10000, 'delhi')
const funcCustomised = buyCar.myBind(car, 10000)

funcInbuilt()
funcCustomised('delhi')