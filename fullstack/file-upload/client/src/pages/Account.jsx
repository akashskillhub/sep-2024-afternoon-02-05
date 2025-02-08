import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddAccountMutation, useGetAccountsQuery } from '../redux/profile.api'
import { useState } from 'react'

const Account = () => {
    const { data } = useGetAccountsQuery()
    const [preview, setPreview] = useState()
    const [addAccount, { isSuccess, isError, error }] = useAddAccountMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            kahipn: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            kahipn: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("email", values.email)
            fd.append("kahipn", values.kahipn)
            addAccount(fd)

            setPreview(null)
            resetForm()
        }
    })
    const handleChange = e => {
        console.log(e.target.files)
        setPreview(URL.createObjectURL(e.target.files[0]))
        formik.setFieldValue("kahipn", e.target.files[0])

    }
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("name")} type="text" />
            <input {...formik.getFieldProps("email")} type="email" />
            <input onChange={handleChange} type="file" />
            {
                preview && <img src={preview} height={50} alt="" />
            }
            <button type='submit'>add</button>
        </form>
        {
            data && <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>hero</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <img src={`http://localhost:5000/${item.hero}`} height={50} alt={item.hero} />
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default Account