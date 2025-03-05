import * as yup from "yup"
import { useFormik } from "formik"
import { handleClasses } from "../../utils/handleClasses"
import { useSellerSignInMutation } from "../../redux/apis/auth.api"
import { useEffect } from "react"
import { toast } from "react-toastify"
import Loading from "../../components/share/Loading"
import { useNavigate } from "react-router-dom"

const SellerLogin = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess, isLoading, isError, error }] = useSellerSignInMutation()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
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
    useEffect(() => {
        if (isSuccess) {
            toast.success("login success")
            navigate("/seller")
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
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card">
                            <div class="card-header">SignIn</div>
                            <div class="card-body">

                                <div class="mt-2">
                                    <label for="mobile" class="form-label">First username</label>
                                    <input
                                        {...formik.getFieldProps("username")}
                                        type="text"
                                        className={handleClasses(formik, "username")}
                                        id="mobile"
                                        placeholder="Enter Your username"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username</div>
                                </div>

                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        {...formik.getFieldProps("password")}
                                        type="text"
                                        className={handleClasses(formik, "password")}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a password.</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signin
                                </button>
                                <p class="text-center mt-3">
                                    Dont Have Account? <a href="#">SignUp</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default SellerLogin