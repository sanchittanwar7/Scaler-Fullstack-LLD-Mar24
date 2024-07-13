import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Todo from './components/Todo'
import DataComponent from './components/DataComponent'
import WithLoading from './components/WithLoading'

const EnhancedDataComponent = WithLoading(DataComponent)

function App() {

  return (
    <>
      {/* <Welcome name="Sanchit" key="value"/> */}
      {/* <Counter /> */}
      {/* <Todo /> */}
      <EnhancedDataComponent />
    </>
  )
}

export default App
