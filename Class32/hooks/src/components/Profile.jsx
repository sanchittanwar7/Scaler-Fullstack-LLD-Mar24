import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [data, setData] = useState(null)

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        console.log(result)
        setData(result)
    }

    useEffect(() => {
        fetchData()

        return () => {
            // some code
        }
    }, [])
  return (
    <div>
        {data ? <p>Data loaded</p> : <p>Loading....</p>}
    </div>
  )
}

export default Profile