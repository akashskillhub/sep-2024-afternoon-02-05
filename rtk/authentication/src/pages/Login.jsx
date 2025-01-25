import clsx from 'clsx'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useLazySigninQuery } from '../redux/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess, data }] = useLazySigninQuery()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })
    const handleclassName = key => clsx({
        "form-control": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        if (isSuccess) {
            if (data.length === 0) {
                toast.error("invalid credentials")
            } else {
                toast.success("login success")
                navigate("/admin")
            }
        }
    }, [isSuccess])
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">Signup</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="card-body">

                            <div className="mt-2">
                                <label for="email" className="form-label">First Email</label>
                                <input
                                    type="text"
                                    className={handleclassName("email")}
                                    {...formik.getFieldProps("email")}
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div className="mt-2">
                                <label for="password" className="form-label">Password</label>
                                <input
                                    type="text"
                                    className={handleclassName("password")}
                                    {...formik.getFieldProps("password")}
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.password}</div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p className="text-center mt-3">
                                Dont Have Account? <Link to="/register" >Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Login