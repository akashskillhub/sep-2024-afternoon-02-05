import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo.slice";

const reduxStore = configureStore({
    reducer: {
        allNotes: todoSlice,
    },
})

export default reduxStore