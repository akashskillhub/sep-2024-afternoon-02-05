import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addEmployee, deleteEmployee, getEmployee } from '../redux/actions'
import { useEffect } from 'react'

const Employee = () => {
    //       👇 from reducer                           👇 from store
    const { kamgar } = useSelector(state => state.allEmployees)
    const callAction = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            department: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            gender: yup.string().required(),
            department: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            callAction(addEmployee(values))

            resetForm()
        }
    })

    useEffect(() => {
        callAction(getEmployee())
    }, [])
    return <>

        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("name")} type="text" placeholder='enter name' />
            <input {...formik.getFieldProps("email")} type="email" placeholder='enter email' />

            <select  {...formik.getFieldProps("gender")}>
                <option selected>choose gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>

            <select  {...formik.getFieldProps("department")}>
                <option selected>choose department</option>
                <option value="frontend">frontend</option>
                <option value="backend">backend</option>
                <option value="mobile app">mobile app</option>
                <option value="devops">devops</option>
            </select>
            <button type='submit'>add employee</button>
        </form>
        {/* table>thead>tr>th*4 */}
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>gender</th>
                    <th>department</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    kamgar.map(item => <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.department}</td>
                        <td>
                            <button onClick={e => callAction(deleteEmployee(item.id))}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Employee