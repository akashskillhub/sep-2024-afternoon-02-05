import React from 'react'
import { useSelector } from 'react-redux'
import { useLogoutMutation } from '../redux/apis/auth.api'

const Dashboard = () => {
    const [logout] = useLogoutMutation()
    const { user } = useSelector(state => state.auth)
    return <>
        <div style={{ padding: 10, display: "flex", justifyContent: "space-between" }}>
            <strong>{user.name}</strong>
            <button onClick={logout}>Logout</button>
        </div>
        <div>Dashboard</div>
    </>

}

export default Dashboard