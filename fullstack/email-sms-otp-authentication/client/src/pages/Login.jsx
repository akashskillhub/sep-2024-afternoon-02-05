import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import handleClasses from '../utils/handleClasses'
import { useOtpMutation, useSigninMutation } from '../redux/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const [sendOTP, { isSuccess, isLoading }] = useOtpMutation()
    const [signin, { isSuccess: loginSuccess, isLoading: loginIsLoading }] = useSigninMutation()
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
            if (isSuccess) {
                signin(values)
            } else {
                sendOTP(values)
            }
            // resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("otp send success")
        }
    }, [isSuccess])

    useEffect(() => {
        if (loginSuccess) {
            toast.success("login success")
            navigate("/admin")
        }
    }, [loginSuccess])

    if (isLoading || loginIsLoading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'>
            Please wait... <div class="spinner-border text-primary"></div>
        </div>
    }
    return <form onSubmit={formik.handleSubmit}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">

                            {
                                isSuccess
                                    ? <div className="mt-2">
                                        <label for="otp" className="form-label">otp</label>
                                        <input
                                            {...formik.getFieldProps("otp")}
                                            type="number"
                                            className={handleClasses(formik, "otp")}
                                            id="otp"
                                            placeholder="Enter Your otp"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.otp}</div>
                                    </div>
                                    : <div className="mt-2">
                                        <label for="username" className="form-label">username</label>
                                        <input
                                            {...formik.getFieldProps("username")}
                                            type="text"
                                            className={handleClasses(formik, "username")}
                                            id="username"
                                            placeholder="Enter Your username"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.username}</div>
                                    </div>
                            }


                            <button type="submit" className="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p className="text-center mt-3">
                                Don't Have Account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Login