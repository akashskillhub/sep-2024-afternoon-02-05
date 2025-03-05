import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddTodosMutation, useDeleteTodosMutation, useLazyGetTodosQuery } from '../redux/todo.api'
import { useEffect, useState } from 'react'

const Notes = () => {
    const [pagi, setPagi] = useState({ start: 0, limit: 2 })
    const [getTodos, { data }] = useLazyGetTodosQuery()

    const [addTodo, { isSuccess: addTodoSuccess }] = useAddTodosMutation()
    const [deleteTodo, { isSuccess: deleteTodoSuccess }] = useDeleteTodosMutation()

    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            addTodo(values)
            resetForm()
        }
    })

    useEffect(() => {
        getTodos(pagi)
    }, [pagi])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="card">
                            <div className="card-header">Todo</div>
                            <div className="card-body">
                                <div>
                                    <label for="task" className="form-label">First task</label>
                                    <input
                                        {...formik.getFieldProps("task")}
                                        type="text"
                                        className="form-control"
                                        id="task"
                                        placeholder="Enter Your task"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please add task.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="desc" className="form-label">Description</label>
                                    <input
                                        {...formik.getFieldProps("desc")}
                                        type="text"
                                        className="form-control"
                                        id="desc"
                                        placeholder="Enter task description"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please add description</div>
                                </div>
                                <div className="mt-2">
                                    <label for="priority"> Priority</label>
                                    <select
                                        {...formik.getFieldProps("priority")}
                                        className="form-select" id="priority">
                                        <option selected>Select Priority</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Add Todo
                                </button>
                            </div>
                        </div>
                    </form>

                    <select onChange={e => setPagi({ start: 0, limit: +e.target.value })} className='form-control mt-2'>
                        <option value="2">2</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>

                    {
                        data && <table className='table table-bordered my-2'>
                            <thead>
                                <tr>
                                    <th>no</th>
                                    <th>task</th>
                                    <th>desc</th>
                                    <th>priority</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.result.map((item, i) => <tr key={item._id}>
                                        <td>{pagi.start + i + 1}</td>
                                        <td>{item.task}</td>
                                        <td>{item.desc}</td>
                                        <td>{item.priority}</td>
                                        <td>
                                            <button>delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    }

                    {
                        data && [...Array(Math.ceil(data.total / pagi.limit))].map((item, i) => <button
                            onClick={e => setPagi({ ...pagi, start: pagi.limit * i })}
                            className={`btn btn-sm ${i === pagi.start - i ? "btn-primary" : "btn-outline-primary"}  me-1`}>{i}</button>)
                    }
                </div>
            </div>
        </div>

    </>
}

export default Notes
