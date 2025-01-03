// old redux    100
// redux toolkit  80
// redux RTKQuery 20

import { combineReducers, createStore } from "redux"

// reducer
const accountReducer = (state = { amount: 100 }, action) => {
    if (action.type === "deposit") {
        return { amount: state.amount + action.payload }
    }
    if (action.type === "widraw") {
        return { amount: state.amount - action.payload }
    }
    return state
}
const rootReducer = combineReducers({
    bank: accountReducer
})
// store
export const store = createStore(rootReducer)

// actions
export const depositMoney = arg => {
    store.dispatch({ type: "deposit", payload: arg })
}
export const widrawMoney = arg => {
    store.dispatch({ type: "widraw", payload: arg })
}
