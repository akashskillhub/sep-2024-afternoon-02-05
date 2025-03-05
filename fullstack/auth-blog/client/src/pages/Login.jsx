import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import clsx from "clsx"
import { Link, useNavigate } from "react-router-dom"
import { useSigninUserMutation, useSignupUserMutation } from '../redux/auth.api'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const Login = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess, isError, error, isLoading }] = useSigninUserMutation()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: yup.object({
            username: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })


    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("login success")
            navigate("/user")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(error.data.message || "unable to login")
        }
    }, [isError])

    if (isLoading) {
        return <Loading />
    }

    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Signup</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div>
                                    <label for="username" class="form-label">First username</label>
                                    <input {...formik.getFieldProps("username")}
                                        type="text"
                                        class={handleClasses("username")}
                                        id="username"
                                        placeholder="Enter your username"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.username}</div>
                                </div>

                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input {...formik.getFieldProps("password")}
                                        type="password"
                                        class={handleClasses("password")}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.password}</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    SignIn
                                </button>
                                <p class="text-center mt-3">
                                    dont have account? <Link to="/register">Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login