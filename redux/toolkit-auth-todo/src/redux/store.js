import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice"
import todoSlice from "./todo.slice"

const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        allNotes: todoSlice
    },
})

export default reduxStore