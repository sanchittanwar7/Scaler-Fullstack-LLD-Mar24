import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../redux/counterSlice'

const actions = counterSlice.actions

const CounterRedux = () => {
    const counter = useSelector(store => {return store.counterState.count})
    const dispatch = useDispatch()
    const handleIncrement = () => {
        // setCounter(counter+1)
        dispatch(actions.increment())
    }
    const handleDecrement = () => {
        // setCounter(counter-1)
        dispatch(actions.decrement())
    }
  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        {counter}
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default CounterRedux