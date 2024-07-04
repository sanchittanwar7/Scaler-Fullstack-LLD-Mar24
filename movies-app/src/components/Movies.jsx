import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesMiddleware } from "../redux/middleware/moviesMiddleware";

const Movies = () => {
  const [pageNo, setPageNo] = useState(1);
  const { movies, loading, error } = useSelector((store) => store.movieState);
  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchList } =
    useContext(MovieContext);

  // const addToWatchlist = (movie) => {
  //   const updatedWatchlist = [...watchlist, movie];
  //   setWatchlist(updatedWatchlist);
  //   localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  // };

  // const removeFromWatchList = (movie) => {
  //   const updatedWatchlist = watchlist.filter(
  //     (watchlistMovie) => watchlistMovie.id !== movie.id
  //   );
  //   setWatchlist(updatedWatchlist);
  //   localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/trending/movie/day?api_key=5a6e809a6376d537b15a7d290941d94b&language=en-US&page=${pageNo}`
    //   )
    //   .then((response) => {
    //     setMovies(response.data.results);
    //   });
    dispatch(fetchMoviesMiddleware(pageNo));
  }, [pageNo]);

  useEffect(() => {
    const watchlist = localStorage.getItem("watchlist");
    if (watchlist) {
      setWatchlist(JSON.parse(watchlist));
    }
  }, []);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  if (movies) {
    return (
      <div>
        <div className="text-2xl font-bold text-center m-5">
          <h1>Trending Movies</h1>
        </div>
        <div className="flex justify-evenly flex-wrap gap-8">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard
                  movie={movie}
                  addToWatchlist={addToWatchlist}
                  removeFromWatchList={removeFromWatchList}
                  watchlist={watchlist}
                />
              );
            })}
        </div>
        <Pagination
          pageNo={pageNo}
          nextPageFn={handleNext}
          previousPageFn={handlePrevious}
        />
      </div>
    );
  }
};

export default Movies;
