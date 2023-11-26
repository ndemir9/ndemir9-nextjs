import React from 'react'
import { ModeToggle } from './ui/mode-toggle'
import NavTopMail from './NavTopMail'

const NavTop = () => {
    return (
        <div className="border-b color-border py-2">
            <div className='container flex items-center justify-between'>
                <NavTopMail />
                <ModeToggle />
            </div>
        </div>
    )
}

export default NavTop