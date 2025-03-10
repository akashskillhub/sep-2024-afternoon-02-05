import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const { user } = useSelector(state => state.auth)
    return <div className="container">
        <div className="row">
            <div className="col-sm-4 offset-sm-4">
                <div class="card">
                    <img src={user.picture} className='img-fluid ' alt="" />
                    <div class="card-body">
                        <div className='d-flex justify-content-between'>
                            <span>Name</span>
                            <strong>{user.name}</strong>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span>email</span>
                            <strong>{user.email}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default UserProfile