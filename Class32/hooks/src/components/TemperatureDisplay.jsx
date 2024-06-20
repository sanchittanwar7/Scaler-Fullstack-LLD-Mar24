import React, { useState } from 'react'

const TemperatureDisplay = ({temperature}) => {

    const temperatureFahrenheit = (temperature*9/5)+32
  return (
    <>
        <div>Temperature in celcius: {temperature}</div>
        <div>Temperature in fahrenheit: {temperatureFahrenheit}</div>
    </>
  )
}

export default TemperatureDisplay