import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import React, { useState }  from 'react'
import Form from './components/Form'
import TemperatureInput from './components/TemperatureInput'
import TemperatureDisplay from './components/TemperatureDisplay'
import Effect from './components/Effect'
import Profile from './components/Profile'

function App() {
  const [temperature, setTemperature] = useState(0)

  const handleTemperatureChange = newTemperature => {
    setTemperature(newTemperature)
  }

  return (
    <>
      {/* <Counter message="hi" /> */}
      {/* <Form /> */}
      {/* <TemperatureInput temperature={temperature} onTemperatureChange={handleTemperatureChange}/>
      <TemperatureDisplay temperature={temperature} /> */}
      <Effect />
      {/* <Profile /> */}
    </>
  )
}

export default App
