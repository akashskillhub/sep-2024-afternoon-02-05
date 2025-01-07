import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { employeeReducer } from "./reducer"
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
    allEmployees: employeeReducer
})

const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore