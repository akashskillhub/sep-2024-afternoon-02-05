import { createSlice } from "@reduxjs/toolkit";
import { todoApi } from "./todo.api";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: { todos: [], total: 0 },
    reducers: {},
    extraReducers: builder => builder
        // toolkit  => addCase
        // RTK      => addMatcher
        .addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, { payload }) => {
            state.todos = [...state.todos, ...payload.result]
            state.total = payload.total
        })
})

export default todoSlice.reducer