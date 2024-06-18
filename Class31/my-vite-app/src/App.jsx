import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import DisplayData from './components/DisplayData'
import ConditionalRendering from './components/ConditionalRendering'
import Button from './components/Button'

function App() {
  const fruits = ['Apple', 'Banana', 'Mango']
  const person = {
    name: "sanchit",
    age: 26
  }
  const sayHello = () => {
    console.log("Hello")
  }
  return (
    <>
      <MyComponent greeting="Hello" message="I am a component"/>
      <MyComponent greeting="Hi" message="I am another component"/>
      <MyComponent greeting="Hey" message="A component here"/>
      <MyComponent greeting="Hellooooo" message="I am also component"/>
      <DisplayData fruits={fruits} person={person} fn={sayHello}/>
      {/* <ConditionalRendering isLoggedIn={true} username="Sanchit"/> */}
      <ConditionalRendering isLoggedIn={false}/>
      <Button />
    </>
  )
}

export default App
