import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { registerUser } from '../redux/auth.actions'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Register = () => {
    const { registerSuccess, loading, error } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
            dispatch(registerUser(values))
            resetForm()
        }
    })

    useEffect(() => {
        if (registerSuccess) {
            navigate("/")
        }
    }, [registerSuccess])

    return <form onSubmit={formik.handleSubmit}>
        <input {...formik.getFieldProps("name")} type="text" placeholder='name' />
        <input {...formik.getFieldProps("email")} type="email" placeholder='email' />
        <input {...formik.getFieldProps("password")} type="password" placeholder='password' />
        <button type='submit'>register</button>
    </form>
}

export default Register