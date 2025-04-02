import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./mobile-todo-api";

const reduxStore = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: def => [...def(), todoApi.middleware]
})

export default reduxStore