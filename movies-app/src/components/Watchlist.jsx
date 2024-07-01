import React, { useContext, useEffect, useState } from "react";
import {MovieContext} from "../context/MovieContext"

const Watchlist = () => {
  const {watchlist, setWatchlist} = useContext(MovieContext)
  const [search, setSearch] = useState("");
  const [currentGenre, setCurrentGenre] = useState("All")
  const [genreList, setGenreList] = useState(["All"])
  const genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  useEffect(() => {
    const watchlist = localStorage.getItem("watchlist");
    if (watchlist) {
      setWatchlist(JSON.parse(watchlist));
    }
  }, []);

  useEffect(() => {
    const genres = watchlist.map(movie => {
      return genreids[movie.genre_ids[0]]
    })
    const uniqueGenres = new Set(genres)
    setGenreList(["All", ...uniqueGenres])
  }, [watchlist])

  const handleAscendingRatings = () => {
    console.log(watchlist);
    const sortedAscending = watchlist.sort((m1, m2) => {
      return m1.vote_average - m2.vote_average;
    });
    console.log(sortedAscending);
    setWatchlist([...sortedAscending]);
  };

  const handleDescendingRatings = () => {
    console.log(watchlist);
    const sortedDescending = watchlist.sort((m1, m2) => {
      return m2.vote_average - m1.vote_average;
    });
    console.log(sortedDescending);
    setWatchlist([...sortedDescending]);
  };

  console.log(currentGenre)

  return (
    <>
      <div className="flex justify-center m-4">
        {
          genreList.map(genre => {
            return (
              <div className={
                currentGenre === genre ?
                "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl" :
                "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
              }
              onClick={e => setCurrentGenre(e.target.innerText)}
              >
                {genre}
              </div>
            )
          })
        }
      </div>

      <div className="flex justify-center my-10">
        <input
          placeholder="Search movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={handleDescendingRatings}
                    ></i>{" "}
                    Ratings{" "}
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={handleAscendingRatings}
                    ></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist
              .filter(movie => {
                if (currentGenre === "All") {
                  return true;
                } else {
                  return genreids[movie.genre_ids[0]] === currentGenre
                }
              })
              .filter((movie) => {
                return movie.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie) => (
                <tr className="hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                    <img
                      className="h-[6rem] w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="pl-2 py-4">{genreids[movie.genre_ids[0]]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
