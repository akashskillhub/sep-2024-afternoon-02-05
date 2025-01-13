import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/notes" })
export const createTodo = createAsyncThunk(
    "createTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/", todoData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const readTodo = createAsyncThunk(
    "readTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/")
            return data // 👈 this is  payload in slice
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const updateTodo = createAsyncThunk(
    "updateTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch("/" + todoData.id, todoData)
            return data // 👈 this is  payload in slice
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const deleteTodo = createAsyncThunk(
    "deleteTodo",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete("/" + id)
            return data // 👈 this is  payload in slice
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })