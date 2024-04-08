import React from 'react'
import Header from './Header/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout