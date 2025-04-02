import React from 'react'
import { GoogleLogin } from "@react-oauth/google"
import { useOauthMutation } from '../redux/apis/auth.api'

const OAuth = () => {
    const [login, { isSuccess, isError, error, isLoading }] = useOauthMutation()
    return <>
        <GoogleLogin
            onSuccess={data => login(data)}
            onError={err => console.log(err)}
        />
    </>
}

export default OAuth