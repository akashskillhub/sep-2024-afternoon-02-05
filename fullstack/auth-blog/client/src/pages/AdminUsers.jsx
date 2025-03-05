import React, { useEffect } from 'react'
import { useGetUsersQuery, useUpdateAccountMutation } from '../redux/admin.api'
import { toast } from 'react-toastify'

const AdminUsers = () => {
    const { data } = useGetUsersQuery()
    const [updateAccount, { isSuccess }] = useUpdateAccountMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("account update success")
        }
    }, [isSuccess])
    return <>
        {
            data && <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>IsActive</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr className={`${item.isActive ? "table-success" : "table-danger"}`}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.isActive ? "Active" : "In-Active"}</td>
                            <td>
                                <button onClick={e => updateAccount({ _id: item._id, isActive: true })} className='btn btn-success'>Active</button>
                                <button onClick={e => updateAccount({ _id: item._id, isActive: false })} className='btn btn-danger'>Block</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default AdminUsers