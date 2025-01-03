import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const Login = ({ setLoggedIn }) => {
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
                console.log("invalid email or password")
            } else {
                setLoggedIn(data[0])
                navigate("/admin")
            }
            resetForm()
        }
    })
    return <form onSubmit={formik.handleSubmit}>
        <input type="text" {...formik.getFieldProps("email")} />
        <input type="text" {...formik.getFieldProps("password")} />
        <button type='submit'>login</button>
    </form>
}

export default Login