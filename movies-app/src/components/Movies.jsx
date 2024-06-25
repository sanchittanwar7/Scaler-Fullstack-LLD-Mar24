import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

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
