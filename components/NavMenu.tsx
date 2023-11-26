import React from 'react'
import NavMenuItem from './NavMenuItem'
import { DataNavMenus } from "@/utils/constants"

interface DataNavMenusProps {
    id: string,
    href: string,
    name: string,
}

const NavMenu = () => {
    return (
        <nav className='container'>
            <ul>
                {
                    DataNavMenus.map((item: DataNavMenusProps) => (
                        <NavMenuItem key={item.id} href={item.href} name={item.name} />
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavMenu