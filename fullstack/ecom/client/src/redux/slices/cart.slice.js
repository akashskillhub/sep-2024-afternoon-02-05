import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { bag: [] },
    reducers: {
        addToCart: (state, { payload }) => {
            state.bag = [...state.bag, payload]
        },
        removeFromCart: (state, { payload }) => {
            state.bag = state.bag.filter(item => item._id !== payload)
        },
        inc: (state, { payload }) => {
            const i = state.bag.findIndex(item => item._id === payload)
            state.bag[i].qty = state.bag[i].qty + 1
        },
        dec: (state, { payload }) => {
            const i = state.bag.findIndex(item => item._id === payload)
            state.bag[i].qty = state.bag[i].qty - 1
        },
        empty: (state, { payload }) => {
            state.bag.length = 0
        },
    },

})

export const { addToCart, removeFromCart, inc, dec, empty } = cartSlice.actions
export default cartSlice.reducer