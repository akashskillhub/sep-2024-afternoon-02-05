import React from 'react'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    return <>
        <Link to="/">home</Link>
        <Link to="/register">register</Link>
        <Link to="/login">login</Link>
    </>
}

export default PublicNavbar