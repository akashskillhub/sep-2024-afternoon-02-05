import React, { useEffect } from 'react'
import { useGetBlogsQuery, useUpdateBlogMutation } from '../redux/admin.api'
import { toast } from 'react-toastify'

const AdminBlogs = () => {
    const { data } = useGetBlogsQuery()
    const [updateBlog, { isSuccess }] = useUpdateBlogMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("blog update success")
        }
    }, [isSuccess])
    return <>

        {
            data && <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Hero</th>
                        <th>Publish</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr className={`${item.isPublish ? "table-success" : "table-danger"}`}>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>
                                <img src={item.hero} height={50} alt="" />
                            </td>
                            <td>{item.isPublish ? "publish" : "un-publish"}</td>
                            <td>
                                <button onClick={e => updateBlog({ _id: item._id, isPublish: true })} className='btn btn-success'>publish</button>
                                <button onClick={e => updateBlog({ _id: item._id, isPublish: false })} className='btn btn-danger'>un publish</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>


}

export default AdminBlogs