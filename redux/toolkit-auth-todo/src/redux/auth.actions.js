// register
// login

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../api";
const api = axios.create({ baseURL: "http://localhost:5000/users" })

export const registerUser = createAsyncThunk(
    "registerUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/", userData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const loginUser = createAsyncThunk(
    "loginUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            //                                     👇 filter in json-server ❌ will not use in real application
            const { data } = await api.get("/", { params: userData })
            if (data.length === 0) {
                return rejectWithValue("invalid credentials")
            }
            return data[0] // 👈 has {id:"",name:"",email:"",password:""}
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })