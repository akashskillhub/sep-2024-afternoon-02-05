import { configureStore } from "@reduxjs/toolkit";
import { profileApi } from "./profile.api";


const reduxStore = configureStore({
    reducer: {
        [profileApi.reducerPath]: profileApi.reducer,
    },
    middleware: def => [...def(), profileApi.middleware]
})

export default reduxStore