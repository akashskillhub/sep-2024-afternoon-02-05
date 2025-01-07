import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../api";
const api = axios.create({ baseURL: "http://localhost:5000/notes" })

export const createTodo = createAsyncThunk(
    "createTodo",
    //      👇formik values 👇for error    👇same as useSelctor() in react
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/", todoData)
            return true // 👈 this will be payload in slice
        } catch (error) {
            //          👇 in case of error this will call rejectd case in slice
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const readTodo = createAsyncThunk(
    "readTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const deleteTodo = createAsyncThunk(
    "deleteTodo",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete("/" + id)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const updateTodo = createAsyncThunk(
    "updateTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch("/" + todoData.id, todoData)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })