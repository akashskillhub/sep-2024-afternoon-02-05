import React, { useEffect } from 'react'
import { useLazyGetAdminProductsQuery, useProductUpdateMutation } from '../../redux/apis/admin.api'
import { toast } from 'react-toastify'

const AllProducts = () => {
    const [updateProduct, { isSuccess }] = useProductUpdateMutation()
    const [getProducts, { data }] = useLazyGetAdminProductsQuery()
    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        if (isSuccess) {
            toast.success("product update success")
        }
    }, [isSuccess])
    return <div className="container">
        {
            data && <table class="table  table-striped table-hover table-bordered my-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Desc</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Images</th>
                        <th>Seller</th>
                        <th>Publish</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr key={item._id} className={item.isPublish ? "table-success" : "table-danger"}>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.images.map(img => <img src={img} height={50} alt="" />)}</td>
                            <td>{item.seller}</td>
                            <td>{item.isPublish ? "published" : "un-published"}</td>
                            <td>
                                {
                                    item.isPublish
                                        ? <button onClick={e => updateProduct({ _id: item._id, isPublish: false })} type="button" class="btn btn-warning"> UnPublish</button>
                                        : <button onClick={e => updateProduct({ _id: item._id, isPublish: true })} type="button" class="btn btn-warning">Publish </button>
                                }

                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </div>
}

export default AllProducts