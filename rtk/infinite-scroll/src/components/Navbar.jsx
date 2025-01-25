import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <Link to="/">home</Link>
        <Link to="/todo">todo</Link>
        <Link to="/infinite">infinite</Link>
        <Link to="/test">test</Link>
    </>
}

export default Navbar