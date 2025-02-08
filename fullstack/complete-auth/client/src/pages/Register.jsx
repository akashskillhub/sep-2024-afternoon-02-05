import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useSignupMutation } from '../redux/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()
    const [signup, { isSuccess, isError, error }] = useSignupMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signup(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("register success")
            navigate("/")
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
            <input {...formik.getFieldProps("name")} type="text" />
            <input {...formik.getFieldProps("email")} type="email" />
            <input {...formik.getFieldProps("password")} type="password" />
            <button type='submit'>register</button>
            <Link to="/">login</Link>
        </form>
    </>
}

export default Register