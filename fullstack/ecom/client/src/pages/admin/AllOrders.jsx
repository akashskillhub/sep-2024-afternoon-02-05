import React, { useEffect, useState } from 'react'
import { useLazyUserOrdersQuery, useUpdateOrderMutation } from '../../redux/apis/admin.api'
import { toast } from 'react-toastify'
import Loading from '../../components/share/Loading'

const AllOrders = () => {
    const [updateOrder, { isSuccess, isLoading }] = useUpdateOrderMutation()

    const [pagi, setPagi] = useState({ start: 0, limit: 2 })
    const [getOrders, { data }] = useLazyUserOrdersQuery()
    useEffect(() => {
        getOrders(pagi)
    }, [pagi])
    useEffect(() => {
        if (isSuccess) {
            toast.success("order status update")
        }
    }, [isSuccess])

    if (isLoading) {
        return <Loading />
    }
    return <div className="container">
        <select className='form-control my-3 w-25' onChange={e => setPagi({ start: 0, limit: +e.target.value })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>

        {
            data && <table class="table  table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>user</th>
                        <th>products</th>
                        <th>address</th>
                        <th>city</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr>
                            <td>
                                {item.user.name} | {item.user.email}
                            </td>
                            <td>{item.products.map(pro => <div className='d-flex gap-5 my-2'>
                                <img src={pro.product.images[0]} height={50} alt="" />
                                <p>{pro.product.name}</p>
                                <strong>{pro.product.price}</strong>
                                X
                                <strong>{pro.qty}</strong>
                            </div>)}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>
                                <select className='form-control' value={item.status} onChange={e => updateOrder({ _id: item._id, status: e.target.value })}>
                                    <option value="placed">placed</option>
                                    <option value="delivered">delivered</option>
                                    <option value="cancel">cancel</option>
                                    <option value="shiped">shiped</option>
                                    <option value="out">out</option>
                                </select>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

        <div>
            {
                data && [...Array(Math.ceil(data.total / pagi.limit))].map((item, i) => <button
                    type="button"
                    onClick={e => setPagi({ ...pagi, start: pagi.limit * i })}
                    class="btn btn-sm btn-outline-primary">{i + 1}</button>)
            }
        </div>
    </div>
}

export default AllOrders