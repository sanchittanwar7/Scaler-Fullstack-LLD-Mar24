import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import TodoSlice from "./todoSlice";
import UserSlice from "./userSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
        userState: UserSlice.reducer
    }
});

export default store;