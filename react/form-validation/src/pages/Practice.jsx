import { useFormik } from 'formik'
import React from 'react'

const Practice = () => {
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })
    return <>
        <form onSubmit={formik.handleSubmit} >
            <input type="text" {...formik.getFieldProps("email")} />
            <input type="text" {...formik.getFieldProps("password")} />
            <button>add</button>
        </form>
    </>
}

export default Practice