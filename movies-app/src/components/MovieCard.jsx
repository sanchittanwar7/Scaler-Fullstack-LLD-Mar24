import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110
                        duration-300 hover:cursor-pointer flex justify-between items-end"
      style={{
        backgroundImage: `url(${movie.url})`,
      }}
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900">
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;
