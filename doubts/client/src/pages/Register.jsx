import React, { useEffect, useState } from 'react'
import { useRegisterMutation } from '../redux/apis/auth.api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [register, { isSuccess, isError, isLoading, error }] = useRegisterMutation()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    useEffect(() => {
        if (isSuccess) {
            navigate("/login")
        }
    }, [isSuccess])

    if (isError) {
        console.log(error)
    }
    if (isLoading) {
        return <h1>please thamba ...</h1>
    }
    return <>

        <input name='name' onChange={handleChange} type="text" placeholder='name' />
        <input name='email' onChange={handleChange} type="email" placeholder='email' />
        <input name='mobile' onChange={handleChange} type="number" placeholder='mobile' />
        <input name='password' onChange={handleChange} type="password" placeholder='password' />
        <button onClick={e => register(userData)}>register</button>
    </>

}

export default Register