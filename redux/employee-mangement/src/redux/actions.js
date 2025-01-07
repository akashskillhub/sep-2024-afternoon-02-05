// import axios from "axios"

import axios from "axios"

// export const addEmployee = empData => {
//     return async (dispatch) => {
//         try {
//             await axios.post("http://localhost:5000/dev", empData)
//             dispatch({ type: "EMP_ADD_SUCCESS", payload: "" })
//         } catch (error) {
//             console.log(error)
//             dispatch({ type: "EMP_ADD_FAIL", payload: "unable to add employee" })
//         }
//     }
// }

export const addEmployee = userData => async (dispatch, getState) => {
    try {

        const { data } = await axios.post("http://localhost:5000/dev", userData)
        dispatch({ type: "EMP_ADD_SUCCESS", payload: data })
    } catch (error) {
        dispatch({ type: "EMP_ADD_FAIL", payload: error.message })
    }
}

export const getEmployee = userData => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("http://localhost:5000/dev")
        dispatch({ type: "EMP_GET_SUCCESS", payload: data })
    } catch (error) {
        dispatch({ type: "EMP_GET_FAIL", payload: error.message })
    }
}


export const deleteEmployee = uid => async (dispatch, getState) => {
    try {
        const { data } = await axios.delete("http://localhost:5000/dev/" + uid)
        dispatch({ type: "EMP_DELETE_SUCCESS", payload: data })
    } catch (error) {
        dispatch({ type: "EMP_DELETE_FAIL", payload: error.message })
    }
}