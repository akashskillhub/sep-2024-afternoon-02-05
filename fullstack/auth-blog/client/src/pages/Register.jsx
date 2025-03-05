import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import clsx from "clsx"
import { Link, useNavigate } from "react-router-dom"
import { useSignupUserMutation } from '../redux/auth.api'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const Register = () => {
    const navigate = useNavigate()
    const [signup, { isSuccess, isError, error, isLoading }] = useSignupUserMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            password: yup.string().required(),
            cpassword: yup.string().required().oneOf([yup.ref("password")]),
        }),
        onSubmit: (values, { resetForm }) => {
            signup(values)
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
            toast.success("register success")
            navigate("/login")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(error.data.message || "unable to register")
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
                                    <label for="name" class="form-label">First name</label>
                                    <input {...formik.getFieldProps("name")}
                                        type="text"
                                        class={handleClasses("name")}
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.name}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="email" class="form-label">First Email</label>
                                    <input {...formik.getFieldProps("email")}
                                        type="email"
                                        class={handleClasses("email")}
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="mobile" class="form-label">First mobile</label>
                                    <input {...formik.getFieldProps("mobile")}
                                        type="number"
                                        class={handleClasses("mobile")}
                                        id="mobile"
                                        placeholder="Enter Your mobile"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.mobile}</div>
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
                                <div class="mt-2">
                                    <label for="cpassword" class="form-label">Confirm Password</label>
                                    <input {...formik.getFieldProps("cpassword")}
                                        type="password"
                                        class={handleClasses("cpassword")}
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.cpassword}</div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register