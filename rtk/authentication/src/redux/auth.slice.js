import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { admin: JSON.parse(localStorage.getItem("auth")) },
    reducers: {
        // 👇 action
        logout: (state, { payload }) => {
            localStorage.removeItem("auth")
            state.admin = null
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
            if (payload.length > 0) {
                state.admin = payload[0]
            }
        })

})

export const { logout } = authSlice.actions
export default authSlice.reducer