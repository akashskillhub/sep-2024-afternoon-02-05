import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { createBlog, deleteBlog, readBlog, updateBlog } from '../redux/blog.actions'

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState()
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const { BLOGS, loading } = useSelector(state => state.kahihi)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: selectedBlog ? selectedBlog.title : "",
            desc: selectedBlog ? selectedBlog.desc : "",
            hero: selectedBlog ? selectedBlog.hero : "",
            status: selectedBlog ? selectedBlog.status : "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            desc: yup.string().required(),
            hero: yup.string().required(),
            status: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedBlog) {
                dispatch(updateBlog({ ...values, id: selectedBlog.id }))
                setSelectedBlog(null)
            } else {
                dispatch(createBlog(values))
            }
            setToggle(!toggle)
            resetForm()
        }
    })

    useEffect(() => {
        dispatch(readBlog())
    }, [toggle])

    if (loading) {
        return <h1>Please Wait...</h1>
    }
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder='title' {...formik.getFieldProps("title")} />
            <input type="text" placeholder='hero'  {...formik.getFieldProps("hero")} />
            <textarea placeholder='desc' {...formik.getFieldProps("desc")}></textarea>

            <select {...formik.getFieldProps("status")}>
                <option value="">choose status</option>
                <option value="publish">publish</option>
                <option value="unpublish">unpublish</option>
            </select>
            {
                selectedBlog
                    ? <button type='submit'>update blog</button>
                    : <button type='submit'>add blog</button>
            }

        </form>

        {
            BLOGS && <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>desc</th>
                        <th>hero</th>
                        <th>status</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        BLOGS.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>
                                <img src={item.hero} height={50} alt="" />
                            </td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={e => setSelectedBlog(item)}>edit</button>
                                <button onClick={e => {
                                    dispatch(deleteBlog(item.id))
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

export default Blogs