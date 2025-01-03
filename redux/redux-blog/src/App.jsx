// OLD        100
// Tollkit    80
// RTK Query  20
// useDispatch
// useSelector

import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as yup from "yup"
import { addBlog, getBlog } from "./redux/actions"
import { useEffect } from "react"

const App = () => {
  const callAction = useDispatch()
  //       👇 from reducer                      👇 from store
  const { blogs } = useSelector(state => state.allBlogs)
  const formik = useFormik({
    initialValues: {
      title: "",
      hero: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Enter title"),
      hero: yup.string().required("Enter hero"),
    }),
    onSubmit: (values, { resetForm }) => {
      // addBlog
      callAction(addBlog(values))
      resetForm()
    }
  })

  useEffect(() => {
    callAction(getBlog())
  }, [])
  return <>
    <form onSubmit={formik.handleSubmit}>
      <input type="text"  {...formik.getFieldProps("title")} />
      <input type="text"  {...formik.getFieldProps("hero")} />
      <button type="submit">add blog</button>
    </form>
    <hr />
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>hero</th>
        </tr>
      </thead>
      <tbody>
        {
          blogs.map(item => <tr>
            <td>{item.title}</td>
            <td>{item.hero}</td>
          </tr>)
        }
      </tbody>
    </table>
  </>
}

export default App