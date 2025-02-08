import { useFormik } from 'formik'
import * as yup from 'yup'
import handleClasses from '../share/handleClasses'
import { useState } from 'react'
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from '../redux/apis/todo.api'

const Dashboard = () => {
    const { data } = useGetTodosQuery()
    const [addTodo] = useAddTodoMutation()
    const [udpateTodo] = useUpdateTodoMutation()
    const [deleteTodo] = useDeleteTodoMutation()

    const [selectedTodo, setSelectedTodo] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: selectedTodo ? selectedTodo.task : "",
            desc: selectedTodo ? selectedTodo.desc : "",
            priority: selectedTodo ? selectedTodo.priority : "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedTodo) {
                // update
                udpateTodo({ ...values, _id: selectedTodo._id })
                setSelectedTodo(null)
            } else {
                // create
                addTodo(values)
            }
            resetForm()
        }
    })
    return <div className='container'>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="text" {...formik.getFieldProps("task")} className={handleClasses(formik, "task")} />
                <span className='invalid-feedback'>{formik.errors.task}</span>
                <span className='valid-feedback'>thank you</span>
            </div>
            <div>
                <input type="text" {...formik.getFieldProps("desc")} className={handleClasses(formik, "desc")} />
                <span className='invalid-feedback'>{formik.errors.desc}</span>
                <span className='valid-feedback'>thank you</span>
            </div>
            <div>
                <select {...formik.getFieldProps("priority")} className={handleClasses(formik, "desc")} >
                    <option >Choose priority</option>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
                <span className='invalid-feedback'>{formik.errors.priority}</span>
                <span className='valid-feedback'>thank you</span>
            </div>
            {
                selectedTodo
                    ? <button type="submit" class="btn btn-warning w-100">Update Todo</button>
                    : <button type="submit" class="btn btn-primary w-100">Add Todo</button>
            }

        </form>

        {
            data && <table class="table table-dark table-striped table-hover">
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
                        data.result.map(item => <tr key={item._id}>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button onClick={e => setSelectedTodo(item)} className='btn btn-sm btn-outline-warning mx-2'>edit</button>
                                <button onClick={e => deleteTodo(item._id)} className='btn btn-sm btn-outline-danger mx-2'>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </div >
}

export default Dashboard