import { GoogleLogin } from '@react-oauth/google'
import { useOauthMutation } from '../redux/auth.api'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [oauth, { isSuccess, isLoading }] = useOauthMutation()
    useEffect(() => {
        if (isSuccess) {
            navigate("/account")
        }
    }, [isSuccess])
    return <>
        <GoogleLogin
            onSuccess={data => {
                oauth(data)
            }}
            onError={err => {
                console.log(err)
            }}
        />
    </>


}

export default Login