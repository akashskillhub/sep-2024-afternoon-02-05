import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <div>
        <Link to="/">home</Link>
        <br />
        <Link to="/about">about</Link>
        <br />
        <Link to="/kahihi">contact</Link>
    </div>
}

export default Navbar