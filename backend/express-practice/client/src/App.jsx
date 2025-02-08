import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import * as yup from 'yup'
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from './redux/todo.api'

const App = () => {
  const { data } = useGetTodosQuery()

  const [addTodo, { isSuccess: addSuccess }] = useAddTodoMutation()
  const [updateTodo, { isSuccess: updateSuccess }] = useUpdateTodoMutation()
  const [deleteTodo, { isSuccess: deleteSuccess }] = useDeleteTodoMutation()

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
        updateTodo({ ...values, _id: selectedTodo._id })
        setSelectedTodo(null)
      } else {
        addTodo(values)
      }
      resetForm()
    }
  })

  useEffect(() => {
    if (addSuccess) {
      toast.success("todo add success")
    }
  }, [addSuccess])

  useEffect(() => {
    if (updateSuccess) {
      toast.success("todo update success")
    }
  }, [updateSuccess])

  useEffect(() => {
    if (deleteSuccess) {
      toast.success("todo delete success")
    }
  }, [deleteSuccess])
  return <>
    <ToastContainer />
    <form onSubmit={formik.handleSubmit}>
      <input {...formik.getFieldProps("task")} type="text" />
      <textarea {...formik.getFieldProps("desc")} ></textarea>
      <select {...formik.getFieldProps("priority")} >
        <option>Choose Priority</option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>

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
            <th>priority</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.result.map(item => <tr>
              <td>{item.task}</td>
              <td>{item.desc}</td>
              <td>{item.priority}</td>
              <td>
                <button onClick={e => setSelectedTodo(item)}>edit</button>
                <button onClick={e => deleteTodo(item._id)}>delete</button>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    }
  </>
}

export default App