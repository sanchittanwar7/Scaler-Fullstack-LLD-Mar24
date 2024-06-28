import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";

const Movies = () => {
    const [pageNo, setPageNo] = useState(1)
  const [movies, setMovies] = useState([
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 1",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 2",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 3",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 4",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 5",
    },
  ]);

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=5a6e809a6376d537b15a7d290941d94b&language=en-US&page=${pageNo}`
    ).then(response => {
      console.log(response)
      setMovies(response.data.results)  
    })
  }, [pageNo])

  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

  const handlePrevious = () => {
    if (pageNo > 1) {
        setPageNo(pageNo - 1)
    }
  }
  return (
  <div>
    <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
    </div>
    <div className="flex justify-evenly flex-wrap gap-8">
        {
            movies.map(movie => {
                return (
                    <MovieCard movie={movie} />
                )
            })
        }
    </div>
    <Pagination pageNo={pageNo} nextPageFn={handleNext} previousPageFn={handlePrevious}/>
  </div>
  );
};

export default Movies;
