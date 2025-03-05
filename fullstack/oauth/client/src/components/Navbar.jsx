import React from 'react'
import { useSelector } from 'react-redux'
import { useLogoutMutation } from '../redux/auth.api'

const Navbar = () => {
    const { user } = useSelector(state => state.auth)
    const [logout] = useLogoutMutation()
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Account</a>
                <div class="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        <img
                            src={user.hero}
                            height={30}
                            width={30}
                            className='rounded-circle me-3'
                            alt="" />
                        {user.name}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><button onClick={logout} className="dropdown-item text-danger">Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav >
    </>
}

export default Navbar