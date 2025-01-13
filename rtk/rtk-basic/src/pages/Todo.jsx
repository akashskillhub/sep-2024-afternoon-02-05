import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from '../redux/todo.api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Todo = () => {
    const [selectedTodo, setSelectedTodo] = useState()
    const { data } = useGetTodosQuery()
    const [ceateTodo, { isSuccess }] = useAddTodoMutation()
    const [removeTodo, { isSuccess: removeSuccess }] = useDeleteTodoMutation()
    const [updateTodo, { isSuccess: updateSuccess }] = useUpdateTodoMutation()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: selectedTodo ? selectedTodo.task : "",
            desc: selectedTodo ? selectedTodo.desc : "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedTodo) {
                updateTodo({
                    ...values,
                    id: selectedTodo.id
                })
                // OR
                // updateTodo({
                //     task: values.task,
                //     desc: values.desc,
                //     id: selectedTodo.id
                // })
                setSelectedTodo(null)
            } else {
                ceateTodo(values)
            }
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("todo create success")
        }
    }, [isSuccess])

    useEffect(() => {
        if (removeSuccess) {
            toast.error("todo remove success")
        }
    }, [removeSuccess])

    useEffect(() => {
        if (updateSuccess) {
            toast.warn("todo update success")
        }
    }, [updateSuccess])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" {...formik.getFieldProps("task")} />
            <textarea {...formik.getFieldProps("desc")}></textarea>
            {
                selectedTodo
                    ? <button type='submit'>update</button>
                    : <button type='submit'>add</button>
            }

        </form>

        {
            data && <table border={1}>
                <thead>
                    <tr>
                        <th>task</th>
                        <th>desc</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>
                                <button onClick={e => setSelectedTodo(item)}>edit</button>
                                <button onClick={e => removeTodo(item.id)}>remove</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        }
    </>
}

export default Todo