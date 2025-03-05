import React from 'react'
import PublicNavbar from './PublicNavbar'
import PublicFooter from './PublicFooter'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <Outlet />
        <PublicFooter />
    </>
}

export default PublicLayout