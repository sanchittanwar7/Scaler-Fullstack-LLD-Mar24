import React, { useState, useEffect } from "react";

export const MovieContext = React.createContext()

const MovieContextWrapper = ({children}) => {
  const [watchlist, setWatchlist] = useState([]);
  const addToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchList = (movie) => {
    const updatedWatchlist = watchlist.filter(
      (watchlistMovie) => watchlistMovie.id !== movie.id
    );
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  useEffect(() => {
    const watchlist = localStorage.getItem("watchlist");
    if (watchlist) {
      setWatchlist(JSON.parse(watchlist));
    }
  }, []);
  return <MovieContext.Provider value={{addToWatchlist, removeFromWatchList, watchlist, setWatchlist}}>{children}</MovieContext.Provider>;
};

export default MovieContextWrapper;