import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    console.log(`Name: ${name} Email: ${email}`)

    setName('')
    setEmail('')
  }

  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input
            type='text'
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          >
          </input>
        </div>
        <button onClick={handleSubmit} type='submit'>Submit</button>
        <button onClick={handleSubmit} type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Form