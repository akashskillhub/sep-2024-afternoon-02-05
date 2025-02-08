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
            mobile: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            mobile: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
            cpassword: yup.string().required().oneOf([yup.ref("password")]),
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
            toast.error(error.data.message)
        }
    }, [isError])
    return <>
        <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("name")} type="text" placeholder='name' />
            <input {...formik.getFieldProps("mobile")} type="number" placeholder='mobile' />
            <input {...formik.getFieldProps("email")} type="email" placeholder='email' />
            <input {...formik.getFieldProps("password")} type="password" placeholder='password' />
            <input {...formik.getFieldProps("cpassword")} type="password" placeholder='confirm password' />
            <button type='submit'>Registe</button>
        </form>

        <Link to="/">alerady have account? login here</Link>
    </>
}

export default Register