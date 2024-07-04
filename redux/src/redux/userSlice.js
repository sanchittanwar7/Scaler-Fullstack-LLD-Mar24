import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: null,
        error: false,
        loading: true,
        param: null
    },
    reducers: {
        userLoading: state => {
            state.error = false;
            state.loading = true;
            state.user = null;
        },
        userError: state => {
            state.error = true;
            state.loading = false;
            state.user = null;
        },
        userData: (state, action) => {
            state.loading = false;
            state.error = false;
            state.user = action.payload;
        },
        setParam: (state, action) => {
            state.param = action.payload
        }
    }
})

export default userSlice;