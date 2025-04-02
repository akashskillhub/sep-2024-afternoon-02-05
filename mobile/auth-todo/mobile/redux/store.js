import { configureStore } from "@reduxjs/toolkit";
import { mobileAuthApi } from "./apis/mobile-auth.api";
import { mobileTodoApi } from "./apis/mobile-todo.api";

import mobileAuthSlice from "./slices/mobile-auth.slice"
const reduxStore = configureStore({
    reducer: {
        [mobileAuthApi.reducerPath]: mobileAuthApi.reducer,
        [mobileTodoApi.reducerPath]: mobileTodoApi.reducer,
        auth: mobileAuthSlice
    },
    middleware: def => [...def(), mobileAuthApi.middleware, mobileTodoApi.middleware]
})

export default reduxStore