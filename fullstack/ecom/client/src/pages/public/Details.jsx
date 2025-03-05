import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../../redux/apis/public.api'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cart.slice'

const Details = () => {
    const dispatch = useDispatch()

    const [selectedImage, setSlectedImage] = useState()
    const { pid } = useParams()
    const { data, isSuccess } = useGetProductDetailsQuery(pid)

    useEffect(() => {
        if (isSuccess) {
            setSlectedImage(data.result.images[0])
        }
    }, [isSuccess])
    return <>
        {
            data && <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <div class="card">
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-sm-2">
                                        {
                                            data.result.images.map(item => <img
                                                onMouseEnter={e => setSlectedImage(item)} src={item}
                                                className='img-fluid mb-3'
                                                alt=""
                                                key={item._id} />)
                                        }
                                    </div>
                                    <div className="col-sm-10">
                                        <img src={selectedImage} className='img-fluid' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <p className='display-5'>{data.result.name}</p>
                        <div className='badge bg-success'>{data.result.category}</div>
                        <p>{data.result.desc}</p>
                        <strong>₹{data.result.price}/-</strong>
                        <button onClick={e => dispatch(addToCart({ ...data.result, qty: 1 }))} type="button" class="btn btn-warning d-block mt-5">Add To Cart</button>
                    </div>
                </div>


            </div>
        }
    </>
}

export default Details