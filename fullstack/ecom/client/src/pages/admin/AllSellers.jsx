import React, { useEffect, useState } from 'react'
import { useLazyGetAdminSellersQuery, useSellerAccountUpdateMutation } from '../../redux/apis/admin.api'
import { toast } from 'react-toastify'
import Loading from '../../components/share/Loading'

const AllSellers = () => {
    const [pagi, setPagi] = useState({ limit: 1, start: 0 })

    const [updateSeller, { isSuccess, isLoading }] = useSellerAccountUpdateMutation()
    const [getSellers, { data }] = useLazyGetAdminSellersQuery()
    useEffect(() => {
        getSellers(pagi)
    }, [pagi])

    useEffect(() => {
        if (isSuccess) {
            toast.success("seller account update")
        }
    }, [isSuccess])

    if (isLoading) {
        return <Loading />
    }

    return <div className="container">

        <select className='my-3 w-25' onChange={e => setPagi({ start: 0, limit: +e.target.value })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>

        {
            data && <table class="table  table-striped table-hover table-bordered my-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Photo</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr
                            key={item._id}
                            className={item.isActive ? "table-success" : "table-danger"}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.gender}</td>
                            <td>{item.city}</td>
                            <td>{item.address}</td>
                            <td> <img src={item.photo} height={50} alt="" /></td>
                            <td>{item.isActive ? "Active" : "in-active"}</td>
                            <td>
                                {
                                    item.isActive
                                        ? <button
                                            onClick={e => updateSeller({ _id: item._id, isActive: false })}
                                            type="button"
                                            className="btn btn-danger">De-Activate</button>

                                        : <button
                                            onClick={e => updateSeller({ _id: item._id, isActive: true })}
                                            type="button"
                                            className="btn btn-success">Activate</button>
                                }

                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

        {
            data && [...Array(Math.ceil(data.total / pagi.limit))]
                .map((item, i) => <button
                    onClick={e => setPagi({ ...pagi, start: pagi.limit * i })}
                    className='btn btn-sm btn-outline-primary me-2'>{i + 1}</button>)
        }
    </div>
}

export default AllSellers