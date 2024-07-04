import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import { Route, Routes } from 'react-router-dom'
import MovieContextWrapper from './context/MovieContext'
import { Provider } from "react-redux"
import store from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <MovieContextWrapper>
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
      </MovieContextWrapper>
    </Provider>
  )
}

export default App
