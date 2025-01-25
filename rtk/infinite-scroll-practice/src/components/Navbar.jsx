import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">Infinite</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active">Home</Link>
                    <Link to="/todo" className="nav-link">todo</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar