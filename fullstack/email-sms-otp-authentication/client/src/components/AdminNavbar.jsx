import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSignoutMutation } from '../redux/auth.api'
import { toast } from 'react-toastify'

const AdminNavbar = () => {
    const [logout, { isSuccess }] = useSignoutMutation()
    const { admin } = useSelector(state => state.auth)
    useEffect(() => {
        if (isSuccess) {
            toast.success("logout success")
        }
    }, [isSuccess])
    return <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
            <a className="navbar-brand">Admin Panel</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            Welcome {admin.name}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item">Action</a></li>
                            <li><a className="dropdown-item">Another action</a></li>
                            <li><button onClick={logout} className="dropdown-item text-danger">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default AdminNavbar