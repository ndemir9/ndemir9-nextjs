import React from 'react'
import Navbar from './Navbar'
import MyTitle from './MyTitle'
import SocialLinkList from './SocialLinkList'

const Header = () => {
    return (
        <header className="w-full">
            <Navbar />
            <MyTitle />
            <SocialLinkList />
            <div className='container'><div className='border-b'></div></div>
        </header>
    )
}

export default Header