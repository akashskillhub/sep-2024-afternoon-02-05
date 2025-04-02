import { createSlice } from "@reduxjs/toolkit";
import { mobileAuthApi } from "../apis/mobile-auth.api";

const mobileAuthSlice = createSlice({
    name: "mobileAuthSlice",
    initialState: {},
    reducers: {
        setLoacal: (state, { payload }) => {
            state.user = payload
        }
    },
    extraReducers: builder => builder
        .addMatcher(mobileAuthApi.endpoints.mobileLogin.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(mobileAuthApi.endpoints.mobileLogout.matchFulfilled, (state, { payload }) => {
            state.user = null
        })

})

export const { setLoacal } = mobileAuthSlice.actions
export default mobileAuthSlice.reducer