import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Banner = () => {
  const [bannerImage, setBannerImage] = useState('https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68')
  const [title, setTitle] = useState('Placeholder Movie')

  useEffect(() => {
    // Fetch the movie data
    axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=5a6e809a6376d537b15a7d290941d94b&language=en-US&page=1`
    ).then((response) => {
      console.log(response)
      // Update the bannerImage and title state
      setBannerImage(`https://image.tmdb.org/t/p/original/${response.data.results[0].backdrop_path}`)
      setTitle(response.data.results[0].title)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <div
        className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'
        style={{
           backgroundImage: `url(${bannerImage})`
        }}
    >
        <div className='text-white w-full text-center text-2xl'>
            {title}
        </div>
    </div>
  )
}

export default Banner