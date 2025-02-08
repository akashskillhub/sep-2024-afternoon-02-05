import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchUsersQuery, useSignoutMutation } from '../redux/auth.api'

const Dashboard = () => {
    const { data } = useFetchUsersQuery()
    const [signout] = useSignoutMutation()
    const { user } = useSelector(state => state.auth)
    return <>
        <div>
            <strong>{user.name}</strong>
            <button onClick={signout}>Logout</button>
        </div>

        <div>Dashboard</div>
        {
            data && <table border={1}>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>

}

export default Dashboard