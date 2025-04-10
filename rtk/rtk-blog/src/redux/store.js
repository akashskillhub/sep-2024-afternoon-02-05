import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./blog.api";


const reduxStore = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
    },
    middleware: def => [...def(), blogApi.middleware]
})

export default reduxStore