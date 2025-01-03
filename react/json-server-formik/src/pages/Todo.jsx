import axios from 'axios'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'

const Todo = () => {
    const [allTodos, setAllTodos] = useState([])
    const createTodo = async () => {
        await axios.post("http://localhost:5000/todos", formik.values)
        console.log("todo create success")
        readTodo()
    }
    const readTodo = async () => {
        const { data } = await axios.get("http://localhost:5000/todos")
        setAllTodos(data)
    }
    const updateTodo = async () => { }
    const deleteTodo = async id => {
        //                                            👇 important forword slash
        await axios.delete("http://localhost:5000/todos/" + id)
        console.log("todo delete success")
        readTodo()
    }

    //     👇 object
    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            task: yup.string().required("enter task"),
            desc: yup.string().required("enter desc"),
            priority: yup.string().required("enter priority"),
        }),
        onSubmit: (values, { resetForm }) => {
            createTodo()
            resetForm()
        }
    })

    useEffect(() => {
        readTodo()
    }, [])

    return <div className='container mt-5'>
        {/*                         👇 this will call onSubmit function internally */}
        <form onSubmit={formik.handleSubmit}>
            <div className='my-3'>
                <input
                    className={formik.errors.task ? "form-control is-invalid" : "form-control"}
                    {...formik.getFieldProps("task")} // 👈 will return props => value , name , onChange, onBlur
                    placeholder='task' type="text" />
                <span className='invalid-feedback'>{formik.errors.task}</span>
            </div>
            <div className='my-3'>
                <textarea
                    className={formik.errors.desc ? "form-control is-invalid" : "form-control"}
                    {...formik.getFieldProps("desc")} placeholder='desc'></textarea>
                <span className='invalid-feedback'>{formik.errors.desc}</span>

            </div>
            <div className='my-3'>
                <select
                    className={formik.errors.priority ? "form-control is-invalid" : "form-control"}
                    {...formik.getFieldProps("priority")}>
                    <option >choose priority</option>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
                <span className='invalid-feedback'>{formik.errors.priority}</span>

            </div>
            <button className='btn btn-primary btn-lg w-100'>add</button>
        </form>

        <table className='table table-bordered mt-5'>
            <thead>
                <tr>
                    <th>task</th>
                    <th>desc</th>
                    <th>priority</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allTodos.map(item => <tr>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>
                            <button className='btn btn-warning me-2'>edit</button>
                            <button onClick={() => deleteTodo(item.id)} className='btn btn-danger me-2'>remove</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default Todo

// props
// context
// redux  => 15 days

// json-server 