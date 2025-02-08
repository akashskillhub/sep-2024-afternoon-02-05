import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: def => [...def(), authApi.middleware]
})

export default reduxStore