import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const [data, setData] = useState(null)
    console.log(params)

    const fetchUserDetails = async () => {
        const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`)
        const userData = await resp.json()
        setData(userData)
    }

    useEffect(() => {
        fetchUserDetails()
    }, [])
  return (
    <div>
        {data ? <p>{JSON.stringify(data)}</p> : <h1>Loading...</h1>}
    </div>
  )
}

export default User