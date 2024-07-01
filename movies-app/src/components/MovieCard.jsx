import React from "react";

const MovieCard = ({
  movie,
  addToWatchlist,
  removeFromWatchList,
  watchlist,
}) => {
  const isAddedToWatchList = (movie) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      {isAddedToWatchList(movie) ? (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={() => removeFromWatchList(movie)}
        >
          ❌
        </div>
      ) : (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={() => addToWatchlist(movie)}
        >
          ❤️
        </div>
      )}

      <div className="text-white w-full text-center text-xl p-2 bg-gray-900">
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;
