import axios from 'axios'
import { useFormik } from 'formik'
import { useContext, useEffect } from 'react'
import * as yup from 'yup'
import { AuthContext } from '../App'

const Todo = () => {
    const { setAllTodos } = useContext(AuthContext)

    const readTodo = async () => {
        const { data } = await axios.get("http://localhost:5000/todos")
        setAllTodos(data)
    }

    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            task: yup.string().required("Enter task"),
            desc: yup.string().required("Enter desc"),
            priority: yup.string().required("Enter priority"),
        }),
        onSubmit: async (values, { resetForm }) => {
            await axios.post("http://localhost:5000/todos", values)
            console.log("todo create success")
            readTodo()
            resetForm()
        }
    })

    useEffect(() => { readTodo() }, [])
    return <form onSubmit={formik.handleSubmit}>
        <input {...formik.getFieldProps("task")} type="text" />
        <textarea {...formik.getFieldProps("desc")}></textarea>
        <select {...formik.getFieldProps("priority")}>
            <option selected disabled>choose priority</option>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>
        <button type='submit'>add todo</button>
    </form>
}

export default Todo