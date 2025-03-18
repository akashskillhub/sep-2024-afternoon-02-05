import React from 'react'
import Footer from './Footer'

const Header = ({ data, children }) => {
    return <>
        <div>Header</div>
        {children}
        <hr />
        <Footer data={data} />
    </>
}

export default Header