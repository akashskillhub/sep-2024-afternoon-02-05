import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    const { bag } = useSelector(state => state.cart)
    return <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
            <Link to="/" className="navbar-brand" >Flipkart Lite</Link>
            <div>
                <button type="button" className="btn btn-light me-2">Login</button>
                <Link to="/cart" type="button" className="btn btn-light">Cart {bag.length}</Link>
            </div>
        </div>
    </nav>
}

export default PublicNavbar