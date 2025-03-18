import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/apis/auth.api'
import { useErrorBoundary } from 'react-error-boundary'

const Login = () => {
    console.log(x)

    const [login, { isSuccess, isError, isLoading, error }] = useLoginMutation()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    useEffect(() => {
        if (isSuccess) {
            navigate("/account")
        }
        return () => {
            // resetBoundary()
            console.log("reset")
        }
    }, [isSuccess])

    if (isError) {
        console.log(error)
    }
    if (isLoading) {
        return <h1>please thamba ...</h1>
    }
    return <>
        <input onChange={handleChange} type="text" name='username' />
        <input onChange={handleChange} type="password`" name='password' />
        <button onClick={e => login(userData)}>login</button>
    </>
}

export default Login