import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StateContext } from '../App'

const Navbar = () => {
    const { dummy } = useContext(StateContext)
    return <>
        <h1>{dummy}</h1>
        <p><Link to="/">jsx</Link></p>
        <p><Link to="/state">state</Link></p>
        <p><Link to="/effect">effect</Link></p>
        <p><Link to="/debounce">debounce</Link></p>
        <p><Link to="/loop">loops</Link></p>
        <p><Link to="/props">props</Link></p>
        <p><Link to="/demo">demo</Link></p>
        <p><Link to="/clsx">clsx</Link></p>
        <p><Link to="/actions">Redux-Actions</Link></p>
        <p><Link to="/register">Register</Link></p>
        <p><Link to="/login">login</Link></p>
        <p><Link to="/ref">ref</Link></p>
    </>
}
export default Navbar