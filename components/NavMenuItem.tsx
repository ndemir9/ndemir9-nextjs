import Link from 'next/link'
import React from 'react'

interface IProps {
    href: string,
    name: string
}

const NavMenuItem = ({ href, name }: IProps) => {
    return (
        <li>
            <Link href={href}>{name}</Link>
        </li>
    )
}

export default NavMenuItem