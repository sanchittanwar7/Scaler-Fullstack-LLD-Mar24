import React from 'react'

const MyComponent = (props) => {  
  const message = `${props.greeting}, ${props.message}`
  // console.log(message)
  return (
    <div>{message}</div>
  )
}

export default MyComponent

