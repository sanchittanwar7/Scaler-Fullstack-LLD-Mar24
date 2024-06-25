import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='/watchlist'
          element={<Watchlist />}
        ></Route>
      </Routes>

    </>
  )
}

export default App
