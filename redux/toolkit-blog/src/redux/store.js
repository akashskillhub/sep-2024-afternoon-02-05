import { configureStore } from "@reduxjs/toolkit";

import blogSlice from "./blog.slice"
const reduxStore = configureStore({
    reducer: {
        kahihi: blogSlice,
    },
})

export default reduxStore