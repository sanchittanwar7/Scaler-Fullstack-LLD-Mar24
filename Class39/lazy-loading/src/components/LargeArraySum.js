import React, {useState, useMemo, useEffect} from 'react'

const generateLargeArray = (size) => {
    const arr = []
    for (let i = 0; i < size; i++) {
        arr.push(i)
    }
    return arr
}

const LargeArraySum = () => {
    const [counter, setCounter] = useState(0)
    const largeArray = useMemo(() => generateLargeArray(100), [])
    const sum = useMemo(() => {
        console.log("Calculating sum")
        return largeArray.reduce((acc, curr) => acc + curr, 0)
    }, [largeArray])
    console.log(largeArray, sum)
  return (
    <div>
        <h1>Sum: {sum}</h1>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default LargeArraySum