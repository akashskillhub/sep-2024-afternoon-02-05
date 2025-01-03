import { createStore } from "redux"

// reducer
//                      👇 initial store      👇 { type: "deposit", payload: 100 }
const rootReducer = (state = { amount: 10 }, action) => {
    if (action.type === "deposit") {
        return { amount: state.amount + action.payload }
    }
    if (action.type === "widraw") {
        return { amount: state.amount - action.payload }
    }
    return state
}
// store
const store = createStore(rootReducer)

// action
store.dispatch({ type: "deposit", payload: 100 })
console.log(store.getState())

store.dispatch({ type: "widraw", payload: 50 })
console.log(store.getState())

