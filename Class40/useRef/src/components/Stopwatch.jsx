import { useState, useRef } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const timerRef = useRef(null)

    const startTimer = () => {
        if(!isRunning) {
            setIsRunning(true)
            timerRef.current = setInterval(() => {
                setTime((time) => time + 1)
            }, 1000)
        }
    }

    const stopTimer = () => {
        if(isRunning) {
            setIsRunning(false)
            clearInterval(timerRef.current)
        }
    }

    const resetTimer = () => {
        clearInterval(timerRef.current)
        setIsRunning(false)
        setTime(0)
    }

    const formatTime = () => {
        const getSeconds = `0${time % 60}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const hours = `0${Math.floor(time / 3600)}`.slice(-2)
        return `${hours} : ${getMinutes} : ${getSeconds}`
    }
    
  return (
    <div>
        <h1>Stopwatch</h1>
        <p>{formatTime()}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Stopwatch