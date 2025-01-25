import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { admin: JSON.parse(localStorage.getItem("kahipn")) },
    reducers: {
        signout: (state, { payload }) => {
            localStorage.removeItem("kahipn")
            state.admin = null
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })


})

export const { signout } = authSlice.actions
export default authSlice.reducer