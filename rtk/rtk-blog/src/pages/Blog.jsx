import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '../redux/blog.api'
import { toast } from 'react-toastify'

const Blog = () => {
    const { data } = useGetBlogsQuery()
    const [createBlog, { isSuccess: addSuccess }] = useAddBlogMutation()
    const [modifyBlog, { isSuccess: updateSuccess }] = useUpdateBlogMutation()
    const [removeBlog, { isSuccess: deleteSuccess }] = useDeleteBlogMutation()

    const [selectedId, setSelectedId] = useState()
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
                modifyBlog({ ...values, id: selectedBlog.id })
                console.log("update")
                setSelectedBlog(null)
            } else {
                createBlog(values)
                console.log("create")
            }
            resetForm()
        }
    })

    useEffect(() => {
        if (addSuccess) {
            toast.success("add Success")
        }
    }, [addSuccess])
    useEffect(() => {
        if (updateSuccess) {
            toast.success("update Success")
        }
    }, [updateSuccess])
    useEffect(() => {
        if (deleteSuccess) {
            toast.success("delete Success")
        }
    }, [deleteSuccess])
    return <>
        {/* .container>.row>.col-sm-6.offset-sm-3 */}
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Blog</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <input className='form-control my-2' {...formik.getFieldProps("title")} type="text" placeholder='title' />
                                <textarea className='form-control my-2' {...formik.getFieldProps("desc")} placeholder='desc'></textarea>
                                <input className='form-control my-2' {...formik.getFieldProps("hero")} type="text" placeholder='hero' />
                                {
                                    selectedBlog
                                        ? <button className='btn btn-warning w-100' type='submit'>update</button>
                                        : <button className='btn btn-primary w-100' type='submit'>add</button>
                                }

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {
            data && <table className='table table-bordered mt-5'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>desc</th>
                        <th>hero</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.hero}</td>
                            <td>
                                <button className='btn btn-outline-warning' onClick={e => setSelectedBlog(item)}>edit</button>
                                <button onClick={e => setSelectedId(item.id)} data-bs-toggle="modal" data-bs-target="#remove" className='btn btn-outline-danger '>delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }


        <div class="modal fade" id="remove" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h1>Are you sure, ypu want to delete this blog?</h1>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">No</button>
                        <button
                            onClick={e => removeBlog(selectedId)}
                            data-bs-dismiss="modal"
                            type="button"
                            class="btn btn-outline-danger">
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Blog