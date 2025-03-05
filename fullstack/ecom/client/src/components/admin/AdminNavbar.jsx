import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAdminLogoutMutation } from '../../redux/apis/auth.api'

const AdminNavbar = () => {
    const [logout] = useAdminLogoutMutation()
    const { admin } = useSelector(state => state.auth)

    return <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
        <div class="container">
            <Link to="/admin" class="navbar-brand">Admin Panel</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/admin" class="nav-link active">Sellers</Link>
                    <Link to="/admin/products" class="nav-link">Products</Link>
                    <Link to="/admin/orders" class="nav-link">Orders</Link>
                    <Link to="/admin/users" class="nav-link">Users</Link>
                </div>
            </div>

            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    {admin.name}
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item">Action</a></li>
                    <li><a class="dropdown-item">Another action</a></li>
                    <li><button onClick={logout} class="dropdown-item text-danger">Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default AdminNavbar