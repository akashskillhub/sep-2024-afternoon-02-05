import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice"
import { authApi } from "./apis/auth.api";
import authSlice from "./slices/auth.slice";

const reduxStore = configureStore({
    reducer: {
        counter: counterSlice,
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware]
})

export default reduxStore