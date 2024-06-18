import React from 'react'

const Button = () => {

    const handleClick = () => {
        console.log("Button is clicked")
    }
  return (
    <button onClick={handleClick}>Click me</button>
  )
}

export default Button