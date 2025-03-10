import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, empty, inc, removeFromCart } from '../../redux/slices/cart.slice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()
    const { bag } = useSelector(state => state.cart)
    if (bag.length === 0) {
        return <div className='text-center vh-100'>
            <h4>Cart is empty</h4>
            <Link to="/">Shop now</Link>
        </div>
    }
    return <div className="container my-5">
        <div className="row">
            <div className="col-sm-8">
                <div class="card">
                    <div class="card-body">
                        <div className='text-end'>
                            <button onClick={e => dispatch(empty())} type="button" class="btn btn-link text-danger">empty cart</button>
                        </div>
                        {
                            bag.map(item => <div className="row my-2">
                                <div className="col-sm-4">
                                    <img src={item.images[0]} className='img-fluid' alt="" />
                                </div>
                                <div className="col-sm-8">
                                    <h6>{item.name}</h6>
                                    <p>{item.price}</p>
                                    <button disabled={item.qty === 1} onClick={e => dispatch(dec(item._id))} type="button" class="btn btn-sm btn-outline-primary">-1</button>
                                    <strong className='mx-2'>{item.qty}</strong>
                                    <button onClick={e => dispatch(inc(item._id))} type="button" class="btn btn-sm btn-outline-primary btn-sm">+1</button>
                                    <div className='my-3'>
                                        <button onClick={e => dispatch(removeFromCart(item._id))} type="button" class="btn btn-outline-danger">remove</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div className='d-flex justify-content-between'>
                            <span>Price</span>
                            <strong>₹{bag.reduce((sum, item) => item.qty * +item.price + sum, 0)}/-</strong>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span>GST</span>
                            <strong>₹{18 / 100 * bag.reduce((sum, item) => item.qty * +item.price + sum, 0)}/-</strong>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <span>Total</span>
                            <strong>₹{
                                (18 / 100 * bag.reduce((sum, item) => item.qty * +item.price + sum, 0))
                                +
                                bag.reduce((sum, item) => item.qty * +item.price + sum, 0)}/-</strong>
                        </div>
                    </div>
                </div>
                <Link to="/checkout" type="button" class="btn btn-primary my-3 w-100">Checkout</Link>

            </div>
        </div>
    </div>
}

export default Cart