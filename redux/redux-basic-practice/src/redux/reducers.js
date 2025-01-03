export const accountReducer = (state = { balance: 100 }, { type, payload }) => {
    if (type === "DEPOSIT") {
        return { balance: state.balance + payload } // 150
    }
    if (type === "WIDRAW") {
        return { balance: state.balance - payload } // 150
    }
    if (type === "WIDRAWALL") {
        return { balance: payload }
    }
    return state
}