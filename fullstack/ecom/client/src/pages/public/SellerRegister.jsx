import * as yup from "yup"
import { useFormik } from "formik"
import { handleClasses } from "../../utils/handleClasses"
import { useSellerSignUpMutation } from "../../redux/apis/auth.api"
import Loading from "../../components/share/Loading"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"

const SellerRegister = () => {
    const navigate = useNavigate()
    const [signup, { isSuccess, isLoading }] = useSellerSignUpMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            gender: "",
            city: "",
            address: "",
            photo: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            gender: yup.string().required(),
            city: yup.string().required(),
            address: yup.string().required(),
            photo: yup.string().required(),
            password: yup.string().required(),
            cpassword: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("email", values.email)
            fd.append("mobile", values.mobile)
            fd.append("gender", values.gender)
            fd.append("city", values.city)
            fd.append("address", values.address)
            fd.append("photo", values.photo)
            fd.append("password", values.password)
            signup(fd)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("register success")
            navigate("/seller-login")
        }
    }, [isSuccess])

    if (isLoading) {
        return <Loading />
    }
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card">
                            <div class="card-header">Signup</div>
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">First name</label>
                                    <input
                                        {...formik.getFieldProps("name")}
                                        type="text"
                                        className={handleClasses(formik, "name")}
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose name</div>
                                </div>
                                <div class="mt-2">
                                    <label class="form-label">First Email</label>
                                    <input
                                        {...formik.getFieldProps("email")}
                                        type="text"
                                        className={handleClasses(formik, "email")}
                                        id="mobile"
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a email</div>
                                </div>
                                <div class="mt-2">
                                    <label class="form-label">Mobile</label>
                                    <input
                                        {...formik.getFieldProps("mobile")}
                                        type="text"
                                        className={handleClasses(formik, "mobile")}
                                        id="email"
                                        placeholder="Enter Your Mobile"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose mobile</div>
                                </div>
                                <div class="mt-2">
                                    <label class="form-label">Gender</label>
                                    <select{...formik.getFieldProps("gender")}
                                        class="form-select">
                                        <option selected>Slect a gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">other</option>
                                    </select>
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose gender</div>
                                </div>
                                <div class="mt-2">
                                    <label class="form-label">City</label>
                                    <input
                                        {...formik.getFieldProps("city")}
                                        type="text"
                                        className={handleClasses(formik, "city")}
                                        placeholder="Enter Your City"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a city</div>
                                </div>
                                <div class="mt-2">
                                    <label class="form-label">Address</label>
                                    <input
                                        {...formik.getFieldProps("address")}
                                        type="text"
                                        className={handleClasses(formik, "address")}
                                        placeholder="Enter Your Address"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a Address</div>
                                </div>
                                <div class="mt-2">
                                    <label class="form-label">Photo</label>
                                    <input
                                        // {...formik.getFieldProps("photo")}
                                        onChange={e => formik.setFieldValue("photo", e.target.files[0])}
                                        type="file"
                                        className={handleClasses(formik, "photo")}
                                        placeholder="Upload Your Photo"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a image</div>
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
                                <div class="mt-2">
                                    <label class="form-label">Confirm Password</label >
                                    <input
                                        {...formik.getFieldProps("cpassword")}
                                        type="text"
                                        className={handleClasses(formik, "cpassword")}
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">
                                        Please Recheck Your Password.
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default SellerRegister