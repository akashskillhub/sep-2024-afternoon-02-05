import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useUserSignOutMutation } from '../../redux/apis/auth.api'

const UserNavbar = () => {
    const { user } = useSelector(state => state.auth)
    const [signout] = useUserSignOutMutation()
    return <>
        <nav class="navbar navbar-expand-lg bg-warning">
            <div class="container">
                <Link to="/user" class="navbar-brand">{user.name}'s Panel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/user" class="nav-link active">Home</Link>
                        <Link to="/user/profile" class="nav-link">Profile</Link>
                        <button onClick={signout} class="nav-link text-danger">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default UserNavbar