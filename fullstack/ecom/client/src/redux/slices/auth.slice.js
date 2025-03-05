import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        seller: JSON.parse(localStorage.getItem("seller")),
        admin: JSON.parse(localStorage.getItem("admin")),
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

})

export default authSlice.reducer