import React from 'react'

const ConditionalRendering = ({isLoggedIn, username}) => {
  return (
    <div>
        {
            isLoggedIn ? (<h1>Welcome, {username}</h1>) : (<h1>Please log in</h1>)
        }
    </div>
  )
}

export default ConditionalRendering