import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

const Navbar = () => {
    const { loggedIn, allTodos } = useContext(AuthContext)
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navabr-dark navbar-dark">
            <div class="container">
                <Link to="/" class="navbar-brand" >Learn Context</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/login" class="nav-link active">Login</Link>
                        <Link to="/register" class="nav-link">Register</Link>
                        <Link to="/todo" class="nav-link">Todo {allTodos.length}</Link>
                    </div>
                </div>
                {/* dropdown start */}
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        welcome {loggedIn && loggedIn.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                {/* dropdown end */}
            </div>
        </nav>
    </>
}

export default Navbar