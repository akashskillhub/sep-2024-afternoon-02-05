import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { loginUser } from '../redux/auth.actions'
import { useEffect } from 'react'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error, KARTA } = useSelector(state => state.auth)
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
            dispatch(loginUser(values))
            resetForm()
        }
    })

    useEffect(() => {
        if (KARTA) {
            navigate("/admin")
        }
    }, [KARTA])
    return <form onSubmit={formik.handleSubmit}>
        <p>{error}</p>
        <input {...formik.getFieldProps("email")} type="email" placeholder='email' />
        <input {...formik.getFieldProps("password")} type="password" placeholder='password' />
        <button type='submit'>Login</button>
    </form>
}

export default Login