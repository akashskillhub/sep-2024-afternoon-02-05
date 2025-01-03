import { reduxStore } from "./store"

export const depositMoney = () => {
    reduxStore.dispatch({ type: "DEPOSIT", payload: 50 }) // calls reducer
}
export const widrawMoney = () => {
    reduxStore.dispatch({ type: "WIDRAW", payload: 10 })
}
export const widrawAllMoney = () => {
    reduxStore.dispatch({ type: "WIDRAWALL", payload: 0 })
}