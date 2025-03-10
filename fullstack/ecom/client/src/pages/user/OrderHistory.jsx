import React, { useEffect, useState } from 'react'
import { useLazyFetchOrdersQuery } from '../../redux/apis/user.api'

const OrderHistory = () => {
    const [getOrders, { data }] = useLazyFetchOrdersQuery()
    const [pagi, setPagi] = useState({ start: 0, limit: 1 })

    useEffect(() => {
        getOrders(pagi)
    }, [pagi])

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
                        <th>products</th>
                        <th>address</th>
                        <th>city</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr>
                            <td>{item.products.map(pro => <div className='d-flex gap-5 my-2'>
                                <img src={pro.product.images[0]} height={50} alt="" />
                                <p>{pro.product.name}</p>
                                <strong>{pro.product.price}</strong>
                                X
                                <strong>{pro.qty}</strong>
                            </div>)}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>{item.status}</td>
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

export default OrderHistory