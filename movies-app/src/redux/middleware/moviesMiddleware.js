import movieSlice from "../movieSlice"

const actions = movieSlice.actions

export const fetchMoviesMiddleware = pageNo => {
    return async function(dispatch) {
        try {
            dispatch(actions.moviesLoading())
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=5a6e809a6376d537b15a7d290941d94b&language=en-US&page=${pageNo}`)
            if (!response.ok) {
                throw new Error(response.error)
            }
            const movies = await response.json();
            dispatch(actions.moviesData(movies.results))
        } catch (error) {
            dispatch(actions.movieError())
        }
    }
}