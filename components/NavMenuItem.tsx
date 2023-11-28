import { INavMenuItemProps } from '@/modals/NavMenuModal'
import Link from 'next/link'
import React from 'react'

const NavMenuItem = ({ href, name }: INavMenuItemProps) => {
    return (
        <li>
            <Link href={href}>{name}</Link>
        </li>
    )
}

export default NavMenuItem