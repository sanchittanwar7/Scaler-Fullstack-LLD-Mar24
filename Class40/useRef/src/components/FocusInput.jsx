import { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    console.log(inputRef)
  return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  )
}

export default FocusInput