import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, Navigate } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/abc' element={<Navigate to="/about"></Navigate>}></Route>
        <Route path='/users/:id' element={<User />}></Route>
        {/* <Route path='*' element={<NotFound />}></Route> */}
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home Link</Link></li>
          <li><Link to="/about">About Link</Link></li>
          <li><Link to="/settings">Settings Link</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default App
