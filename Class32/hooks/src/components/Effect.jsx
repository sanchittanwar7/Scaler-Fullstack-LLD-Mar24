import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [counter, setCounter] = useState(0)
    const [counter1, setCounter1] = useState(0)

    document.title = 'My title'

    const incrementCount = () => {
        setCounter(counter+1)
      }

      const incrementCount1 = () => {
        setCounter1(counter1+1)
      }

    useEffect(() => {
        console.log("I'll get triggered on first render only")
    }, [])

    useEffect(() => {
        document.title = counter
    }, [counter])

    useEffect(() => {
        console.log("I will be triggered on every re-render")
    })
    
  return (
    <div>
        <button onClick={incrementCount}>Increment counter</button>
        <button onClick={incrementCount1}>Increment counter1</button>
    </div>
  )
}

export default Effect