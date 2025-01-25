import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/practice">Practice</Link>
    </>
}

export default Navbar