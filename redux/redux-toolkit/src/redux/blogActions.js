import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/articles" })

export const addBlog = createAsyncThunk("add-blog", async (blogData, { rejectWithValue }) => {
    try {
        await API.post("/", blogData)
        return true
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)
    }
})
export const getBlog = createAsyncThunk("get-blog", async (blogData, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/")
        return data // 👈 payload
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const updateBlog = createAsyncThunk("update-blog", async () => { })
export const deleteBlog = createAsyncThunk("delete-blog", async (id, { rejectWithValue }) => {
    try {
        await API.delete("/" + id)
        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})