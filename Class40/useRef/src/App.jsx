import './App.css'
import Modal from './components/Modal'
// import Carousel from './components/Carousel'
// import Stopwatch from './components/Stopwatch'
// import FocusInput from './components/FocusInput'
// import Timer from './components/Timer'
import useVisibility from './useVisibility'

function App() {
  const { isVisible, show, hide, toggle } = useVisibility(false)

  return (
    <div className="App">
      <button onClick={show}>SHOW</button>
      <button onClick={toggle}>TOGGLE</button>
      <Modal isVisible={isVisible} hide={hide} />
    </div>
  )
}

export default App
