import React from 'react'
import NavMenuItem from './NavMenuItem'
import { DataNavMenus } from "@/utils/constants"
import NullReactFragment from './NullReactFragment';


const NavMenu = () => {

    let _navMenus = DataNavMenus || null;
    if (_navMenus.length <= 0) return <NullReactFragment />

    return (
        <nav className='container'>
            <ul>
                {
                    _navMenus.map((item) => (
                        <NavMenuItem key={item.id} href={item.href} name={item.name} />
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavMenu