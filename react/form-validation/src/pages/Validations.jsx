import { useFormik } from 'formik'
import * as yup from 'yup'

const Validations = () => {

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            address: ""
        },
        validationSchema: yup.object({
            fname: yup.string().required(),
            lname: yup.string().required().min(5),
            address: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    console.log(formik.errors)

    return <div className='container mt-5'>
        <form onSubmit={formik.handleSubmit}>
            <input
                className={formik.errors.fname ? "form-control is-invalid" : "form-control"}
                type="text"
                placeholder='fname'
                {...formik.getFieldProps("fname")} />
            <span className='invalid-feedback'>{formik.errors.fname}</span>

            <input
                className={formik.errors.lname ? "form-control is-invalid" : "form-control"}
                type="text"
                placeholder='lname'
                {...formik.getFieldProps("lname")} />

            <span className='invalid-feedback'>{formik.errors.lname}</span>

            <textarea
                className={formik.errors.address ? "form-control is-invalid" : "form-control"}
                {...formik.getFieldProps("address")}></textarea>
            <span className='invalid-feedback'>{formik.errors.address}</span>
            <button>save</button>
        </form >
    </div>
}

export default Validations