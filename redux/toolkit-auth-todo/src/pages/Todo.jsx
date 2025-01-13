import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { createTodo, deleteTodo, readTodo, updateTodo } from '../redux/todo.actions'
import { useEffect, useState } from 'react'

const Todo = () => {
    const [selectedTodo, setSelectedTodo] = useState()

    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const { loading, error, TODOS } = useSelector(state => state.allNotes)

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
                dispatch(updateTodo({ ...values, id: selectedTodo.id }))
                setSelectedTodo(null) // 👈 to reset edit form
            } else {
                dispatch(createTodo(values))
            }
            setToggle(!toggle)
            resetForm()
        }
    })

    useEffect(() => {
        dispatch(readTodo())
    }, [toggle])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("task")} type="text" />

            <textarea {...formik.getFieldProps("desc")}></textarea>

            <select {...formik.getFieldProps("priority")}>
                <option value="">choose priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
            {
                selectedTodo
                    ? <button type='submit'>Update Todo</button>
                    : <button type='submit'>Add Todo</button>
            }

        </form>
        {
            TODOS && <table border={1}>
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
                        TODOS.map(item => <tr>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button onClick={e => setSelectedTodo(item)}>edit</button>
                                <button onClick={e => {
                                    dispatch(deleteTodo(item.id))
                                    setToggle(!toggle)
                                }}>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default Todo