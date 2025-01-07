import { createSlice } from "@reduxjs/toolkit";
import { addBlog, deleteBlog, getBlog } from "./blogActions";

//                       👇 reducer
const blogSlice = createSlice({
    name: "blog",
    initialState: {},
    extraReducers: (builder) => {
        return builder
            .addCase(addBlog.pending, (state, { type, payload }) => {
                state.loading = true
            })
            .addCase(addBlog.fulfilled, (state, { type, payload }) => {
                state.blogCreate = true
                state.loading = false
            })
            .addCase(addBlog.rejected, (state, { type, payload }) => {
                state.error = payload
                state.loading = false
            })




            .addCase(getBlog.pending, (state, { type, payload }) => {
                state.loading = true
            })
            .addCase(getBlog.fulfilled, (state, { type, payload }) => {
                state.blogs = payload
                state.loading = false
            })
            .addCase(getBlog.rejected, (state, { type, payload }) => {
                state.error = payload
                state.loading = false
            })


            // delete start

            .addCase(deleteBlog.pending, (state, { type, payload }) => {
                state.loading = true
            })
            .addCase(deleteBlog.fulfilled, (state, { type, payload }) => {
                state.blogDelete = true
                state.loading = false
            })
            .addCase(deleteBlog.rejected, (state, { type, payload }) => {
                state.error = payload
                state.loading = false
            })





    }
})

export default blogSlice.reducer