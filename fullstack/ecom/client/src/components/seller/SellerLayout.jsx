import React from 'react'
import SellerNavbar from './SellerNavbar'
import { Outlet } from 'react-router-dom'

const SellerLayout = () => {
    return <>
        <SellerNavbar />
        <Outlet />
    </>
}

export default SellerLayout