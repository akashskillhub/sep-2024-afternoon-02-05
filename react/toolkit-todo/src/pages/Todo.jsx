import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { createTodo, deleteTodo, readTodo, updateTodo } from '../redux/todo.actions'
import { useEffect, useState } from 'react'

const Todo = () => {
    const [selectedTodo, setSelectedTodo] = useState()
    const [toggle, setToggle] = useState(true)
    //      👇 from slice                                    👇 from store
    const { loading, todos } = useSelector(state => state.allNotes)
    const dispatch = useDispatch()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: selectedTodo ? selectedTodo.title : "",
            desc: selectedTodo ? selectedTodo.desc : "",
            priority: selectedTodo ? selectedTodo.priority : "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedTodo) {
                console.log("update todo action");
                dispatch(updateTodo({ ...values, id: selectedTodo.id }))
                setSelectedTodo(null)
            } else {
                dispatch(createTodo(values))
            }
            setToggle(!toggle)
            resetForm()
        }
    })

    useEffect(() => { dispatch(readTodo()) }, [toggle])

    if (loading) {
        return <h1>Please Wait ...</h1>
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Toolkit Todo</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <input className='form-control my-2' type="text" {...formik.getFieldProps("title")} />
                                <textarea className='form-control my-2' {...formik.getFieldProps("desc")}></textarea>
                                <select className='form-control my-2' {...formik.getFieldProps("priority")}>
                                    <option value="">Choose Priority</option>
                                    <option value="high">high</option>
                                    <option value="medium">medium</option>
                                    <option value="low">low</option>
                                </select>
                                <button className='btn btn-primary w-100' type='submit'> {selectedTodo ? "update todo" : "add todo"} </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>desc</th>
                        <th>priority</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos && todos.map(item => <tr key={item.id} className={`${item.priority === "high" && "table-danger"}`}>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button className='btn btn-warning me-2' onClick={e => setSelectedTodo(item)}>edit</button>
                                <button className='btn btn-danger me-2' onClick={e => {
                                    dispatch(deleteTodo(item.id))
                                    setToggle(!toggle)
                                }}>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table >
        </div>
    </>
}

export default Todo