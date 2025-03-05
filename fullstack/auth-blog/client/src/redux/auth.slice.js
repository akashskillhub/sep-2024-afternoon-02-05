import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")),
        admin: JSON.parse(localStorage.getItem("admin")),
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signinUser.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.signoutUser.matchFulfilled, (state, { payload }) => {
            state.user = null
        })

        .addMatcher(authApi.endpoints.signinAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.signoutAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })
})

export const { invalidate } = authSlice.actions
export default authSlice.reducer