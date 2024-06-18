import React from 'react'

const DisplayData = ({fruits, person, fn}) => {
    console.log(fruits, person)
    fn()
  return (
    <div>
        <ul>
            {
                fruits.map(fruit => {
                    return <li>{fruit}</li>
                })
            }
        </ul>
    </div>
  )
}

export default DisplayData