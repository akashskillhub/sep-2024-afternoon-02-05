import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./todo.api";

import todoSlice from "./todo.slice"
const reduxStore = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        notes: todoSlice
    },
    middleware: def => [...def(), todoApi.middleware]
})

export default reduxStore