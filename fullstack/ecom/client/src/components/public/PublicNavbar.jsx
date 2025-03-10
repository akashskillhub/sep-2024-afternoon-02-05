import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useUserSignOutMutation } from '../../redux/apis/auth.api'

const PublicNavbar = () => {
    const { bag } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const [signout] = useUserSignOutMutation()
    return <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
            <Link to="/" className="navbar-brand" >Flipkart Lite</Link>
            <div className='d-flex gap-2'>
                {
                    user
                        ? <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                <img src={user.picture} className='rounded-5 me-2' height={30} alt="" />
                                {user.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li><Link to="/user" class="dropdown-item">Orders</Link></li>
                                <li><Link to="/user/profile" class="dropdown-item">Profile</Link></li>
                                <li><button onClick={signout} class="dropdown-item text-danger">Logout</button></li>
                            </ul>
                        </div>
                        : <Link to="/user-login" type="button" className="btn btn-light me-2">Login</Link>
                }

                <Link to="/cart" type="button" className="btn btn-light">Cart {bag.length}</Link>
            </div>
        </div>
    </nav>
}

export default PublicNavbar