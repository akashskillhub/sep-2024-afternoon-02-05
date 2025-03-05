import * as yup from "yup"
import { useFormik } from "formik"
import { handleClasses } from "../../utils/handleClasses"
import { useAdminSignInMutation, useSendOTPMutation } from "../../redux/apis/auth.api"
import Loading from "../../components/share/Loading"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [count, setCount] = useState(60)
    const navigate = useNavigate()
    const [sendotp, {
        isSuccess: optIsSuccess,
        isError: otpIsError,
        isLoading: otpIsLoading,
        error: otpError
    }] = useSendOTPMutation()

    const [signin, { isLoading, isSuccess, isError, error }] = useAdminSignInMutation()

    const formik = useFormik({
        initialValues: {
            username: "",
            otp: "",
        },
        validationSchema: yup.object({
            username: yup.string().required(),
            otp: yup.string()
        }),
        onSubmit: (values, { resetForm }) => {
            // resetForm()
            if (optIsSuccess) {
                signin(values)
            } else {
                sendotp(values)
            }
        }
    })

    useEffect(() => {
        if (optIsSuccess) {
            toast.success("otp send success")
            setCount(60)
            const id = setInterval(() => {
                setCount(pre => {
                    if (pre === 0) {
                        clearInterval(id)
                        return 0
                    } else {
                        return pre - 1
                    }
                })
            }, 1000)
        }
    }, [optIsSuccess])

    useEffect(() => {
        if (otpIsError) {
            toast.error(otpError.data.message || "unable to send otp")
        }
    }, [otpIsError])

    useEffect(() => {
        if (isSuccess) {
            toast.success("login success")
            navigate("/admin")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message || "unable to login")
        }
    }, [isError])

    if (isLoading || otpIsLoading) {
        return <Loading />
    }
    return <>


        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card">
                            <div class="card-header">Admin Login</div>
                            <div class="card-body">

                                {
                                    optIsSuccess
                                        ? <div class="mt-2">
                                            <label for="otp" class="form-label">Otp</label>
                                            <input
                                                {...formik.getFieldProps("otp")}
                                                type="otp"
                                                className={handleClasses(formik, "otp")}
                                                id="otp"
                                                placeholder="Enter Your Otp"
                                            />
                                            {
                                                count === 0
                                                    ? <button
                                                        className="btn btn-sm btn-primary"
                                                        type="button"
                                                        onClick={e => sendotp(formik.values)}>
                                                        Resend OTP
                                                    </button>
                                                    : <div className="text-decoration-underline text-primary"> Resend otp in {count}</div>
                                            }

                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">Please enter a OTP.</div>
                                        </div>
                                        : <div>
                                            <label for="email" class="form-label">Username</label>
                                            <input
                                                {...formik.getFieldProps("username")}
                                                type="text"
                                                className={handleClasses(formik, "username")}
                                                id="username"
                                                placeholder="Enter Your Username"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">Please choose a username.</div>
                                        </div>
                                }

                                {
                                    optIsSuccess
                                        ? <button type="submit" class="btn btn-danger w-100 mt-3">
                                            Login
                                        </button>
                                        : <button type="submit" class="btn btn-danger w-100 mt-3">
                                            Send OTP
                                        </button>
                                }


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default AdminLogin