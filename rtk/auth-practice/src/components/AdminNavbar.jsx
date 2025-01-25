import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signout } from '../redux/auth.slice'

const AdminNavbar = () => {
    const dispatch = useDispatch()
    const { admin } = useSelector(state => state.auth)
    return <>
        <Link to="/admin">dash</Link>
        <span>welcome {admin && admin.name}</span>
        <button onClick={e => dispatch(signout())}>Logout</button>
    </>
}

export default AdminNavbar