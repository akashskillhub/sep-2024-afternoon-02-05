import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { user: JSON.parse(localStorage.getItem("user")) },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.signout.matchFulfilled, (state, { payload }) => {
            state.user = null
        })
})

export const { invalidate } = authSlice.actions
export default authSlice.reducer