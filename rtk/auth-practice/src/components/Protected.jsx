import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const { admin } = useSelector(state => state.auth)
    return admin ? children : <Navigate to="/login" />
}

// useState
// useEffect

// lazy loading
// useCallback
// useMemo
// useRef
// useReducer
// memo



export default Protected