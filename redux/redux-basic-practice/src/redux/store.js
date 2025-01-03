
import { combineReducers, createStore } from "redux"
import { accountReducer } from "./reducers"

// reducer                                            👇 { type: "DEPOSIT", payload: 50 }
// const accountReducer = (state = { balance: 100 }, action) => { }


// store
export const reduxStore = createStore(combineReducers({
    bank: accountReducer
}))

// actions
