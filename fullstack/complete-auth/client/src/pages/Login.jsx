import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useSigninMutation } from '../redux/auth.api'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess, isError, error }] = useSigninMutation()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("register success")
            navigate("/admin")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(error.data ? error.data.message : "something went wrong")
        }
    }, [isError])
    return <>
        <pre>{JSON.stringify(formik.errors, null, 2)}</pre>

        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("email")} type="email" />
            <input {...formik.getFieldProps("password")} type="password" />
            <button type='submit'>Login</button>
            <Link to="/register">register</Link>
        </form>
    </>
}

export default Login