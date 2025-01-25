import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLazySigninQuery } from '../redux/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess, data }] = useLazySigninQuery()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            if (data) {
                toast.success("login success")
                navigate("/admin")
            } else {
                toast.error("invalid credentials")
            }
        }
    }, [isSuccess])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("email")} type="text" placeholder='enter email' />
            <input {...formik.getFieldProps("password")} type="password" placeholder='enter password' />
            <button type='submit'>Login</button>
        </form>
    </>
}

export default Login