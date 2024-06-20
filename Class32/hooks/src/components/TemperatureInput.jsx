import React, { useState }  from 'react'

const TemperatureInput = ({temperature, onTemperatureChange}) => {
  return (
    <div>
        <label>
            Enter Temperature
        </label>
        <input
            type='number'
            value={temperature}
            onChange={e => onTemperatureChange(e.target.value)}
        >            
        </input>
        
    </div>
  )
}

export default TemperatureInput