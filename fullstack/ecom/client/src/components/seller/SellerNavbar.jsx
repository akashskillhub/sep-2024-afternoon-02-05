import React from 'react'
import { Link } from 'react-router-dom'
import { useSellerSignOutMutation } from '../../redux/apis/auth.api'
import { useSelector } from 'react-redux'

const SellerNavbar = () => {
    const { seller } = useSelector(state => state.auth)
    const [signout] = useSellerSignOutMutation()
    return <>
        <nav class="navbar navbar-expand-lg bg-warning ">
            <div class="container">
                <Link to="/seller" class="navbar-brand">Seller</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/seller/profile" class="nav-link">Profile</Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        <img src={seller.photo} className='rounded-5 me-2' height={30} width={30} alt="" />
                        {seller.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><Link to="/seller/profile" class="dropdown-item">Profile</Link></li>
                        <li><button onClick={signout} class="dropdown-item etxt-danger">Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default SellerNavbar