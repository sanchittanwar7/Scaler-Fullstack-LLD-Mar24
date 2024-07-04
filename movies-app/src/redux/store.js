import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";


const store = configureStore({
    reducer: {
        movieState: movieSlice.reducer
    }
});

export default store;