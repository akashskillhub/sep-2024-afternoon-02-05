export const employeeReducer = (state = { kamgar: [] }, { type, payload }) => {

    if (type === "EMP_ADD_SUCCESS") {
        return { ...state, empAddSuccess: true }
    }
    if (type === "EMP_ADD_FAIL") {
        return { ...state, error: payload }
    }

    if (type === "EMP_GET_SUCCESS") {
        return { ...state, kamgar: payload }
    }
    if (type === "EMP_GET_FAIL") {
        return { ...state, error: payload }
    }


    if (type === "EMP_DELETE_SUCCESS") {
        return { ...state, deleteSuccess: true }
    }

    if (type === "EMP_DELETE_FAIL") {
        return { ...state, error: payload }
    }

    return state
}