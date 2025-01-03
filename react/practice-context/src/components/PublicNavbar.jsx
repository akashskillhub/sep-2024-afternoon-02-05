import React from 'react'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link to="/" class="navbar-brand" >Context Practice</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active" >Home</Link>
                        <Link to="/about" class="nav-link" >about</Link>
                        <Link to="/register" class="nav-link" >register</Link>
                        <Link to="/login" class="nav-link" >login</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default PublicNavbar