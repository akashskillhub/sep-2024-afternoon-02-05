import React from 'react'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    return <>
        <Link to="/">login</Link>
        <Link to="/register">register</Link>
    </>
}

export default PublicNavbar