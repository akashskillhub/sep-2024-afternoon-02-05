import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link" >Home</Link>
                        <Link to="/about" className="nav-link" >About</Link>
                        <Link to="/contact" className="nav-link" >Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar