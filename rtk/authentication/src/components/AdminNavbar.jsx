import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/auth.slice'

const AdminNavbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { admin } = useSelector(state => state.auth)
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link to="/admin" class="navbar-brand">Admin</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active">Dashboard</Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Welcome {admin && admin.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >Action</a></li>
                        <li><a class="dropdown-item" >Another action</a></li>
                        <li><button
                            onClick={e => {
                                dispatch(logout())
                                navigate("/login")
                            }}
                            class="dropdown-item text-danger">Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar