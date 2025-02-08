import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useSigninMutation } from '../redux/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess, isError, error }] = useSigninMutation()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("login sucess")
            navigate("/admin")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message)
        }
    }, [isError])
    return <>
        <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("email")} type="email" placeholder='email' />
            <input {...formik.getFieldProps("password")} type="password" placeholder='password' />
            <button type='submit'>login</button>
        </form>

        <Link to="/register">dont have account? register here</Link>
    </>
}

export default Login

// JWT  json web token
// cookies