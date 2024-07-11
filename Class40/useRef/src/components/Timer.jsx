import React, { useEffect } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = React.useState(0);
    const intervalRef = React.useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
    }, [])
  return (
    <>
        <div>Timer</div>
        <p>{seconds}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </>
  )
}

export default Timer