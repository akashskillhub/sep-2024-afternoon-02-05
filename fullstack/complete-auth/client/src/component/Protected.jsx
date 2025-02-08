import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
//                     👇 Dashboard
const Protected = ({ children }) => {
    const { user } = useSelector(state => state.auth)
    return user ? children : <Navigate to="/" />
}

export default Protected