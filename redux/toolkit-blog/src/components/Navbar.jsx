import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blog</Link>
    </>
}

export default Navbar