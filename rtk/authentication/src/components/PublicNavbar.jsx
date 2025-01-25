import React from 'react'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    return <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
        <div class="container">
            <Link to="/" class="navbar-brand">Authentication</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" class="nav-link active">Home</Link>
                    <Link to="/register" class="nav-link">Register</Link>
                    <Link to="/login" class="nav-link">Login</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default PublicNavbar