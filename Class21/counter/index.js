const counter = document.querySelector('#counter')
const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
const resetBtn = document.querySelector('#reset')
const incrementBy = document.querySelector('#incrementBy')

incrementBtn.addEventListener('click', event => {
    const currentValue = parseInt(counter.innerText)
    const incrementvalue = parseInt(incrementBy.value)

    const answer = currentValue + incrementvalue

    counter.innerText = answer
})

decrementBtn.addEventListener('click', event => {
    const currentValue = parseInt(counter.innerText)
    const incrementvalue = parseInt(incrementBy.value)

    const answer = currentValue - incrementvalue

    if (answer < 0) {
        counter.innerText = 0
    } else{
        counter.innerText = answer
    }

    
})

resetBtn.addEventListener('click', event => {
    counter.innerText = 0
    incrementBy.value = 1
})