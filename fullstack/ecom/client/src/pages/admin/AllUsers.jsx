import React, { useEffect, useState } from 'react'
import { useLazyGetUsersQuery, useUpdateUserMutation } from '../../redux/apis/admin.api'
import { toast } from 'react-toastify'

const AllUsers = () => {
    const [updateAccount, { isSuccess }] = useUpdateUserMutation()
    const [pagi, setPagi] = useState({ start: 0, limit: 2 })
    const [getUsers, { data }] = useLazyGetUsersQuery()

    useEffect(() => {
        getUsers(pagi)
    }, [pagi])
    useEffect(() => {
        if (isSuccess) {
            toast.success("account update success")
        }
    }, [isSuccess])

    return <>
        <div className="container">
            <select className='form-control my-3' onChange={e => setPagi({ start: 0, limit: +e.target.value })}>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>

            {
                data && <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Picture</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.result.map(item => <tr className={item.isActive ? "table-success" : "table-danger"} key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td> <img src={item.picture} height={50} alt="" /> </td>
                                <td>
                                    {
                                        item.isActive
                                            ? <button onClick={e => updateAccount({ _id: item._id, isActive: false })} type="button" class="btn btn-danger">De Activate</button>
                                            : <button onClick={e => updateAccount({ _id: item._id, isActive: true })} type="button" class="btn btn-success">Activate</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }

            {
                data && [...Array(Math.ceil(data.total / pagi.limit))].map((item, i) => <button
                    type="button"
                    onClick={e => setPagi({ ...pagi, start: i * pagi.limit })}
                    className="btn btn-sm btn-outline-primary">{i + 1}</button>)
            }
        </div>
    </>
}

export default AllUsers