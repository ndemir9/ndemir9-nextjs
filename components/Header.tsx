import React from 'react'
import Navbar from './Navbar'
import MyTitle from './MyTitle'
import SocialLinkList from './SocialLinkList'
import MyDesc from './MyDesc'

const Header = () => {
    return (
        <header className="w-full">
            <Navbar />
            <MyTitle />
            <MyDesc />
            <SocialLinkList />
            <div className='container'><div className='border-b'></div></div>
        </header>
    )
}

export default Header