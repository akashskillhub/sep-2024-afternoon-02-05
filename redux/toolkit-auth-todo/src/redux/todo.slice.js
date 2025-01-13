import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, readTodo, updateTodo } from "./todo.actions";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(createTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(createTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoCreateSuccess = true
        })
        .addCase(createTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(updateTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoUpdateSuccess = true
        })
        .addCase(updateTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoDeleteSuccess = true
        })
        .addCase(deleteTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(readTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(readTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.TODOS = payload
        })
        .addCase(readTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = todoSlice.actions
export default todoSlice.reducer