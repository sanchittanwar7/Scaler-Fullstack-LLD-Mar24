import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import CounterRedux from './components/CounterRedux'
import TodoRedux from './components/TodoRedux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterRedux />
      <TodoRedux />
    </>
  )
}

export default App
