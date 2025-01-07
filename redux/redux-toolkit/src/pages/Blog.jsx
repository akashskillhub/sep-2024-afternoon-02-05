import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addBlog, deleteBlog, getBlog } from '../redux/blogActions'
import { useEffect } from 'react'

const Blog = () => {
    const callAction = useDispatch()
    //      👇from slice                                            👇 store
    const { loading, error, blogs } = useSelector(state => state.allBlogs)
    const formik = useFormik({
        initialValues: {
            title: "",
            hero: "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            hero: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            callAction(addBlog(values))
            resetForm()
        }
    })

    useEffect(() => { callAction(getBlog()) }, [])
    if (loading) {
        return <h1>Please wait....</h1>
    }
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" {...formik.getFieldProps("title")} />
            <input type="text" {...formik.getFieldProps("hero")} />
            <button type='submit'>add blog</button>
        </form>
        <table border={1}>
            <thead>
                <tr>
                    <th>title</th>
                    <th>hero</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogs && blogs.map(item => <tr>
                        <td>{item.title}</td>
                        <td>{item.hero}</td>
                        <td>
                            <button onClick={e => callAction(deleteBlog(item.id))}>remove</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Blog