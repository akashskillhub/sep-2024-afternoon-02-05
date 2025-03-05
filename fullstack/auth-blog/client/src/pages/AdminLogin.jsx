import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import clsx from "clsx"
import { useSendotpMutation, useSigninAdminMutation } from '../redux/auth.api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const AdminLogin = () => {
    const navigate = useNavigate()
    const [sendotp, {
        isSuccess: sendotpisSuccess,
        isError: sendotpisError,
        error: sendotperror,
        isLoading: sendotpisLoading,
    }] = useSendotpMutation()


    const [login, {
        isSuccess: loginisSuccess,
        isError: loginisError,
        error: loginerror,
        isLoading: loginisLoading,
    }] = useSigninAdminMutation()


    const formik = useFormik({
        initialValues: {
            username: "",
            otp: "",
        },
        validationSchema: yup.object({
            username: yup.string().required(),
            otp: yup.string(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (sendotpisSuccess) {
                login(values)
                resetForm()
            } else {
                sendotp(values)
            }
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    useEffect(() => {
        if (sendotpisSuccess) {
            toast.success("opt send success")
        }
    }, [sendotpisSuccess])

    useEffect(() => {
        if (loginisSuccess) {
            toast.success("login success")
            navigate("/admin")
        }
    }, [loginisSuccess])

    if (sendotpisLoading || loginisLoading) {
        return <Loading />
    }
    return <>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Signin</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">

                                {
                                    sendotpisSuccess
                                        ? <div class="mt-2">
                                            <label for="otp" class="form-label">Confirm OTP</label>
                                            <input {...formik.getFieldProps("otp")}
                                                type="number"
                                                class={handleClasses("otp")}
                                                id="otp"
                                                placeholder="Enter Your OTP"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">{formik.errors.otp}</div>
                                        </div>
                                        : <div class="mt-2">
                                            <label for="username" class="form-label">First username</label>
                                            <input {...formik.getFieldProps("username")}
                                                type="username"
                                                class={handleClasses("username")}
                                                id="username"
                                                placeholder="Enter Your username"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">{formik.errors.username}</div>
                                        </div>
                                }




                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                                {/* <p class="text-center mt-3">
                                    Don't Have Account? <Link to="/register">Login</Link>
                                </p> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AdminLogin