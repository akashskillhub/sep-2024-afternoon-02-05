import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddTodoMutation, useGetTodosQuery, useLazyGetTodosQuery } from '../redux/todo.api'
import { useEffect, useState } from 'react'

const Todo = () => {
    const [start, setStart] = useState(0)
    const [limit, setLimit] = useState(2)
    const [getTodos, { data }] = useLazyGetTodosQuery()
    const [addTodo] = useAddTodoMutation()

    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            addTodo(values)
            resetForm()
        }
    })

    useEffect(() => {
        getTodos({ limit, start })
    }, [limit, start])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("task")} type="text" />
            <textarea {...formik.getFieldProps("desc")}></textarea>
            <button type='submit'>add</button>
        </form>

        <select value={limit} onChange={e => {
            setLimit(+e.target.value)
            setStart(0)
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
        </select>

        {data && <h1>{Math.ceil(data.total / limit)}</h1>}
        {
            data && <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>task</th>
                        <th>desc</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>
                                <button>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

        <button
            disabled={start === 0}
            onClick={e => setStart(start - limit)}>pre</button>
        {
            data && [...Array(Math.ceil(data.total / limit)).keys()].map(item => <button onClick={e => setStart(limit * item)}>{item}</button>)
        }
        {
            data && <button
                disabled={(start + limit) >= (data.total)}
                onClick={e => setStart(start + limit)}>next</button>
        }
    </>
}

export default Todo