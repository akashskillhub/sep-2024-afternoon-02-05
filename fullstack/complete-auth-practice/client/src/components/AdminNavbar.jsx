import React from 'react'
import { useSelector } from 'react-redux'
import { useSignoutMutation } from '../redux/apis/auth.api'

const AdminNavbar = () => {
    const [signout] = useSignoutMutation()
    const { admin } = useSelector(state => state.auth)
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Admin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                welcome {admin.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><button class="dropdown-item text-danger" onClick={signout}>Logout</button></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar