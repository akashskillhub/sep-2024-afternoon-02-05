import { createSlice } from "@reduxjs/toolkit";
import { todoApi } from "./todo.api";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: { allTodos: [] },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, { payload }) => {
            //                                  👇 push
            state.allTodos = [...state.allTodos, ...payload.result]
        })

})

export const { invalidate } = todoSlice.actions
export default todoSlice.reducer