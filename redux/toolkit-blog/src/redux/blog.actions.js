import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../api";
const api = axios.create({ baseURL: "http://localhost:5000/articles" })

export const createBlog = createAsyncThunk(
    "createBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/", blogData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const readBlog = createAsyncThunk(
    "readBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const updateBlog = createAsyncThunk(
    "updateBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch("/" + blogData.id, blogData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const deleteBlog = createAsyncThunk(
    "deleteBlog",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete("/" + id)
            return true // 👈 payload in slice
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })