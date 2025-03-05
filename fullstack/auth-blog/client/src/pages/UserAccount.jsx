import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import clsx from "clsx"
import { toast } from "react-toastify"
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '../redux/user.api'
import Loading from '../components/Loading'

const UserAccount = () => {
    const [show, setShow] = useState(true)
    const [addBlog, {
        isSuccess: addSuccess,
        isLoading: addIsLoading,
        isError: addIsError,
        error: addError
    }
    ] = useAddBlogMutation()

    const [deleteBlog, {
        isSuccess: deleteisSuccess,
        isLoading: deleteisLoading,
        isError: deleteisError,
        error: deleteerror,
    }] = useDeleteBlogMutation()

    const [updateBlog, {
        isSuccess: updateisSuccess,
        isLoading: updateisLoading,
        isError: updateisError,
        error: updateerror,
    }] = useUpdateBlogMutation()
    const { data } = useGetBlogsQuery()
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
                const fd = new FormData()
                fd.append("title", values.title)
                fd.append("desc", values.desc)
                fd.append("hero", values.hero)
                updateBlog({ fd, _id: selectedBlog._id })
                setSelectedBlog(null)
            } else {
                const fd = new FormData()
                fd.append("title", values.title)
                fd.append("desc", values.desc)
                fd.append("hero", values.hero)
                addBlog(fd)
                // create
            }
            resetForm()
        }
    })


    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })

    const handleChange = e => {
        formik.setFieldValue("hero", e.target.files[0])
    }

    useEffect(() => {
        if (addSuccess) {
            toast.success("blog create success")
        }
    }, [addSuccess])

    useEffect(() => {
        if (addIsError) {
            toast.error(addError.data.message || "unable to create blog")
        }
    }, [addIsError])

    useEffect(() => {
        if (deleteisSuccess) {
            toast.success("blog delete success")
        }
    }, [deleteisSuccess])

    useEffect(() => {
        if (deleteisError) {
            toast.error(deleteerror.data.message || "unable to delete blog")
        }
    }, [deleteisError])


    useEffect(() => {
        if (updateisSuccess) {
            toast.success("blog delete success")
        }
    }, [updateisSuccess])
    useEffect(() => {
        if (updateisError) {
            toast.error(updateerror.data.message || "unable to update blog")
        }
    }, [updateisError])

    if (addIsLoading || deleteisLoading || updateisLoading) {
        return <Loading />
    }
    return <>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Blogs</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div class="mt-2">
                                    <label for="title" class="form-label">Enter Title</label>
                                    <input {...formik.getFieldProps("title")}
                                        type="text"
                                        class={handleClasses("title")}
                                        id="title"
                                        placeholder="Enter Your Title"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.title}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="Description" class="form-label">Enter Description</label>
                                    <input {...formik.getFieldProps("desc")}
                                        type="text"
                                        class={handleClasses("desc")}
                                        id="Description"
                                        placeholder="Enter Your Description"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.desc}</div>
                                </div>
                                {
                                    selectedBlog && show
                                        ? <>
                                            <img src={selectedBlog.hero} height={50} alt="" />
                                            <button onClick={e => setShow(false)} type='button' className='btn btn-outline-dark'>Change Image</button>
                                        </>
                                        : <div class="mt-2">
                                            <label for="hero" class="form-label">Upload File</label>
                                            <input
                                                onChange={handleChange}
                                                type="file"
                                                class={handleClasses("hero")}
                                                id="hero"
                                                placeholder="Upload File"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">{formik.errors.hero}</div>

                                            {!show && <button onClick={e => setShow(true)} className='btn btn-dark'>cancle</button>}
                                        </div>
                                }

                                {
                                    selectedBlog
                                        ? <button type="submit" class="btn btn-warning w-100 mt-3">
                                            Update Blog
                                        </button>
                                        : <button type="submit" class="btn btn-primary w-100 mt-3">
                                            Add Blog
                                        </button>
                                }

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {
            data && <table className='table table-bordered my-5'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Hero</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>
                                <img src={item.hero} height={50} alt="" />
                            </td>
                            <td>
                                <button onClick={e => setSelectedBlog(item)}>Edit</button>
                                <button onClick={e => deleteBlog(item._id)}>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

    </>
}

export default UserAccount