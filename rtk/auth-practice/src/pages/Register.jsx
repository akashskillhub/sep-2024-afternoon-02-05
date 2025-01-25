import { useFormik } from 'formik'
import * as yup from 'yup'
import { useSignupMutation } from '../redux/auth.api'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()
    const [signup, { isSuccess, isError, error, isLoading }] = useSignupMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
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
            navigate("/login")
        }
    }, [isSuccess])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("name")} type="text" placeholder='enter name' />
            <input {...formik.getFieldProps("email")} type="text" placeholder='enter email' />
            <input {...formik.getFieldProps("password")} type="password" placeholder='enter password' />
            <input {...formik.getFieldProps("cpassword")} type="password" placeholder='confirm password' />
            <button type='submit'>register</button>
        </form>
    </>
}

export default Register