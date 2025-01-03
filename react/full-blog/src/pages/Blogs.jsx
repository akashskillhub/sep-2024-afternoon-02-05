import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from 'clsx'
import { toast } from 'react-toastify'

const Blog = () => {
    const [editData, setEditData] = useState()

    const [allBlogs, setAllBlogs] = useState([])

    const createBlog = async () => {
        await axios.post("http://localhost:5000/articles", formik.values)
        readBlog()
        toast.success("blog create success")
    }
    const readBlog = async () => {
        const { data } = await axios.get("http://localhost:5000/articles")
        setAllBlogs(data)
    }
    const deleteBlog = async id => {
        await axios.delete("http://localhost:5000/articles/" + id)
        readBlog()
        toast.success("blog delete success")

    }
    const updateBlog = async () => {
        await axios.patch("http://localhost:5000/articles/" + editData.id, formik.values)
        setEditData(null)
        toast.success("update success")
        readBlog()
    }

    const handleClasses = key => clsx({
        "form-control": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: editData ? editData.title : "",
            desc: editData ? editData.desc : "",
            hero: editData ? editData.hero : "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Enter title"),
            desc: yup.string().required("Enter desc"),
            hero: yup.string().required("Enter hero"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (editData) {
                updateBlog()
            } else {
                createBlog()
            }
            resetForm()
        }
    })

    useEffect(() => { readBlog() }, [])
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header">blog</div>
                            <div class="card-body">
                                <div>
                                    <input
                                        placeholder="Enter Title"
                                        {...formik.getFieldProps("title")}
                                        type="text"
                                        class={handleClasses("title")}
                                    />
                                    <span></span>
                                </div>
                                <div>
                                    <textarea
                                        placeholder='Eneter Desc'
                                        {...formik.getFieldProps("desc")}
                                        class={handleClasses("desc")}
                                    >,</textarea>
                                    <span></span>
                                </div>
                                <div>
                                    <input
                                        placeholder='Eneter Hero'
                                        {...formik.getFieldProps("hero")}
                                        class={handleClasses("hero")}
                                        type="text" />
                                    <span></span>
                                </div>
                                {
                                    editData
                                        ? <>
                                            <button type='submit' className='btn btn-warning'>update blogs</button></>
                                        : <>
                                            <button type='submit' className='btn btn-primary'>add blogs</button>
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <table className='table table-bordered mt-5'>
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
                    allBlogs.map(item => <tr>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>
                            <img src={item.hero} height={50} alt="" />
                        </td>
                        <td>
                            <button onClick={e => setEditData(item)} type="button" class="btn btn-outline-warning me-2">edit</button>
                            <button onClick={e => deleteBlog(item.id)} type="button" class="btn btn-outline-danger">remove</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default Blog