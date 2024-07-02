import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        value: "",
        todoList: []
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        },
        addTask: (state, action) => {
            const task = action.payload
            const updatedTask = [...state.todoList, task]
            state.todoList = updatedTask
            state.value = ""
        }
    }
})

export default TodoSlice;