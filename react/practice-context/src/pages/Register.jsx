import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const Register = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter name"),
            email: yup.string().required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: async (values, { resetForm }) => {
            await axios.post("http://localhost:5000/users", values)
            navigate("/login")
            resetForm()
        }
    })
    return <form onSubmit={formik.handleSubmit}>
        <input type="text" {...formik.getFieldProps("name")} />
        <input type="text" {...formik.getFieldProps("email")} />
        <input type="text" {...formik.getFieldProps("password")} />
        <button type='submit'>register</button>
    </form>
}

export default Register