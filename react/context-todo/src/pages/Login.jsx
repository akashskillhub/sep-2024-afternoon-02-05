import axios from 'axios'
import { useFormik } from 'formik'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { AuthContext } from '../App'

const Login = () => {
    const { setLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: async (values, { resetForm }) => {
            const { data } = await axios.get("http://localhost:5000/users", { params: values })
            if (data.length === 0) {
                console.log("invalid credentials");
            } else {
                setLoggedIn(data[0])
                navigate("/todo")
            }
            resetForm()
        }
    })
    return <form onSubmit={formik.handleSubmit}>
        <input {...formik.getFieldProps("email")} type="text" placeholder='email' />
        <input {...formik.getFieldProps("password")} type="text" placeholder='password' />
        <button type='submit'>register</button>
    </form>
}

export default Login