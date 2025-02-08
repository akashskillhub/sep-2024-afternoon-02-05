import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery } from './redux/blog.api'

import { toast, ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { useEffect, useState } from 'react'
const App = () => {
  const [deleteBlog, { isSuccess: deleteSuccess, isLoading: deleteIsLoading }] = useDeleteBlogMutation()
  const [preview, setPreview] = useState()
  const [addBlog, { isSuccess, isLoading }] = useAddBlogMutation()
  const { data } = useGetBlogsQuery()
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      thumbnail: "",
    },
    validationSchema: yup.object({
      title: yup.string().required(),
      desc: yup.string().required(),
      thumbnail: yup.string().required(),
    }),
    onSubmit: (values, { resetForm }) => {
      const fd = new FormData()
      fd.append("title", values.title)
      fd.append("desc", values.desc)
      fd.append("thumbnail", values.thumbnail)
      addBlog(fd)
      setPreview(null)
      resetForm()
    }
  })
  const handleChange = e => {
    formik.setFieldValue("thumbnail", e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]))

  }
  useEffect(() => {
    if (isSuccess) {
      toast.success("blog create success")
    }
  }, [isSuccess])
  useEffect(() => {
    if (deleteSuccess) {
      toast.success("blog delete success")
    }
  }, [deleteSuccess])

  if (isLoading || deleteIsLoading) {
    return <h1>Uploading Please wait ... </h1>
  }
  return <>

    <form onSubmit={formik.handleSubmit}>
      <input {...formik.getFieldProps("title")} type="text" />
      <input {...formik.getFieldProps("desc")} type="text" />
      <input onChange={handleChange} type="file" />
      {preview && <img src={preview} height={50} alt="" />}
      <button type='submit'>add</button>
    </form>

    {
      data && <table border={1}>
        <thead>
          <tr>
            <th>title</th>
            <th>desc</th>
            <th>hero</th>
            <th>action</th>
          </tr>
        </thead>
        {
          data.result.map(item => <tr>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td><img src={item.hero} height={50} alt="" /></td>
            <td> <button onClick={e => deleteBlog(item._id)}>delete</button> </td>
          </tr>)
        }
      </table>
    }
  </>
}

export default App