import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSignoutUserMutation } from '../redux/auth.api'

const UserNavbar = () => {
    const [signout] = useSignoutUserMutation()
    const { user } = useSelector(state => state.auth)
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">User Panel</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            Welcome {user.name}
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

export default UserNavbar