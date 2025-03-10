import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        seller: JSON.parse(localStorage.getItem("seller")),
        admin: JSON.parse(localStorage.getItem("admin")),
        user: JSON.parse(localStorage.getItem("user")),
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.sellerSignIn.matchFulfilled, (state, { payload }) => {
            state.seller = payload
        })
        .addMatcher(authApi.endpoints.sellerSignOut.matchFulfilled, (state, { payload }) => {
            state.seller = null
        })


        .addMatcher(authApi.endpoints.adminSignIn.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.adminLogout.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })


        .addMatcher(authApi.endpoints.googleLogin.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.userSignOut.matchFulfilled, (state, { payload }) => {
            state.user = null
        })

})

export default authSlice.reducer