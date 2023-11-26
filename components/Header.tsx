import React from 'react'
import Navbar from './Navbar'
import MyTitle from './MyTitle'

const Header = () => {
    return (
        <header className="w-full">
            <Navbar />
            <MyTitle />
        </header>
    )
}

export default Header