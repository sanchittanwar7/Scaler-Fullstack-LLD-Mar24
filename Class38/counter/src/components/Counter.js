import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count+1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(count-1)
    } 
  }
  
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>

        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default Counter