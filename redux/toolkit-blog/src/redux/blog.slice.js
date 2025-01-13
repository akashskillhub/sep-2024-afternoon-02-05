import { createSlice } from "@reduxjs/toolkit";
import { createBlog, deleteBlog, readBlog, updateBlog } from "./blog.actions";

const blogSlice = createSlice({
    name: "blogSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(createBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(createBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogCreate = payload
        })
        .addCase(createBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })



        .addCase(readBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(readBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.BLOGS = payload
        })
        .addCase(readBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(updateBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogUpdate = payload
        })
        .addCase(updateBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(deleteBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogDelete = payload // true
        })
        .addCase(deleteBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = blogSlice.actions
export default blogSlice.reducer