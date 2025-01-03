import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <Link to="/">home</Link>
        <Link to="/todo">todo</Link>
    </>
}

export default Navbar