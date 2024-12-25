import { useFormik } from 'formik'
import React from 'react'

const Register = () => {
    const formik = useFormik({
        initialValues: { fname: "john", lname: "doe" },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })
    return <div className="container">
        <form onSubmit={formik.handleSubmit}>
            <input type="text"  {...formik.getFieldProps("fname")} />
            <input type="text"  {...formik.getFieldProps("lname")} />
            <button>save</button>
        </form>
    </div>
}

export default Register