import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleIncrement = () => {
        setCounter(counter+1)
    }
    const handleDecrement = () => {
        setCounter(counter-1)
    }
  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        {counter}
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter