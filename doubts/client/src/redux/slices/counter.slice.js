import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: { count: 500 },
    reducers: {
        inc: (state, { payload }) => {
            state.count = state.count + 1
        },
        dec: (state, { payload }) => {
            state.count = state.count - 1
        },
        reset: (state, { payload }) => {
            state.count = 0
        }
    },

})

export const { inc, dec, reset } = counterSlice.actions
export default counterSlice.reducer