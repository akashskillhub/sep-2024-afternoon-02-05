import React from 'react'
import { Link } from 'react-router-dom'
import { useSignoutAdminMutation } from '../redux/auth.api'

const AdminNavbar = () => {
    const [signout] = useSignoutAdminMutation()
    return <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
        <div className="container">
            <Link to="/admin" className="navbar-brand">Admin Panel</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/admin" className="nav-link active">Users</Link>
                    <Link to="/admin/blogs" className="nav-link">Blogs</Link>
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            Welcome Admin
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item">Action</a></li>
                            <li><a class="dropdown-item">Another action</a></li>
                            <li><button onClick={signout} class="dropdown-item text-danger">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default AdminNavbar