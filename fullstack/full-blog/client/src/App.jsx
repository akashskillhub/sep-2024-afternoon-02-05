import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { useAddBlogMutation, useGetBlogsQuery, useModifyBlogMutation, useRemoveBlogMutation } from './redux/blog.api'

const App = () => {
  const { data } = useGetBlogsQuery()
  const [addBlog, { isSuccess: addBlogSuccess }] = useAddBlogMutation()
  const [modifyBlog, { isSuccess: modifyBlogSuccess }] = useModifyBlogMutation()
  const [removeBlog, { isSuccess: removeBlogSuccess }] = useRemoveBlogMutation()


  const [selectedBlog, setSelectedBlog] = useState()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: selectedBlog ? selectedBlog.title : "",
      desc: selectedBlog ? selectedBlog.desc : "",
      hero: selectedBlog ? selectedBlog.hero : "",
    },
    validationSchema: yup.object({
      title: yup.string().required(),
      desc: yup.string().required(),
      hero: yup.string().required(),
    }),
    onSubmit: (values, { resetForm }) => {
      if (selectedBlog) {
        // update
        modifyBlog({ ...values, _id: selectedBlog._id })
        setSelectedBlog(null)
      } else {
        // create
        addBlog(values)
      }
      resetForm()
    }
  })

  useEffect(() => {
    if (addBlogSuccess) {
      toast.success("addBlogSuccess")
    }
  }, [addBlogSuccess])

  useEffect(() => {
    if (modifyBlogSuccess) {
      toast.success("modifyBlogSuccess")
    }
  }, [modifyBlogSuccess])

  useEffect(() => {
    if (removeBlogSuccess) {
      toast.success("removeBlogSuccess")
    }
  }, [removeBlogSuccess])

  return <div className='container'>
    <ToastContainer />
    <div class="card my-5">
      <div class="card-body">

        <form onSubmit={formik.handleSubmit}>
          <input className='form-control my-2' type="text" {...formik.getFieldProps("title")} />
          <input className='form-control my-2' type="text" {...formik.getFieldProps("desc")} />
          <input className='form-control my-2' type="text" {...formik.getFieldProps("hero")} />
          {
            selectedBlog
              ? <button className='btn btn-primary' type='submit'>update</button>
              : <button className='btn btn-primary' type='submit'>add</button>
          }
        </form>
      </div>
    </div>
    {
      data && <table className='table table-bordered'>
        <thead>
          <tr>
            <th>title</th>
            <th>desc</th>
            <th>hero</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.result.map(item => <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>
                <img src={item.hero} height={50} alt={item.hero} />
              </td>
              <td>
                <button className='btn btn-warning' onClick={e => setSelectedBlog(item)}>edit</button>
                <button className='btn btn-danger' onClick={e => removeBlog(item._id)}>delete</button>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    }
  </div>
}

export default App