import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { bag: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [] },
    reducers: {
        addToCart: (state, { payload }) => {
            localStorage.setItem("cart", JSON.stringify([...state.bag, payload]))
            state.bag = [...state.bag, payload]
        },
        removeFromCart: (state, { payload }) => {
            state.bag = state.bag.filter(item => item._id !== payload)
            localStorage.setItem("cart", JSON.stringify(state.bag))
        },
        inc: (state, { payload }) => {
            const i = state.bag.findIndex(item => item._id === payload)
            state.bag[i].qty = state.bag[i].qty + 1
            localStorage.setItem("cart", JSON.stringify(state.bag))
        },
        dec: (state, { payload }) => {
            const i = state.bag.findIndex(item => item._id === payload)
            state.bag[i].qty = state.bag[i].qty - 1
            localStorage.setItem("cart", JSON.stringify(state.bag))
        },
        empty: (state, { payload }) => {
            state.bag.length = 0
            localStorage.setItem("cart", JSON.stringify(state.bag))
        },
    },

})

export const { addToCart, removeFromCart, inc, dec, empty } = cartSlice.actions
export default cartSlice.reducer