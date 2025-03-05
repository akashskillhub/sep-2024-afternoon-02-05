import React, { useEffect } from 'react'
import { useLazyGetProductsQuery } from '../../redux/apis/public.api'
import { Link } from "react-router-dom"
const Home = () => {
    const [getProducts, { data }] = useLazyGetProductsQuery()
    useEffect(() => {
        getProducts()
    }, [])
    return <>
        <div className="container">
            <div className="row">
                {
                    data && data.result.map(item => <div className="col-sm-4" key={item._id}>
                        <Link to={`/details/${item._id}`} className='nav-link'>
                            <div className="card">
                                <img src={item.images[0]} className='img-fluid' alt="" />
                                <div className="card-body">
                                    <strong>{item.name}</strong>
                                    <p>₹{item.price}/-</p>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Home