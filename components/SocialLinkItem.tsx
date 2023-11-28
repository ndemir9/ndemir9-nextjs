import { ISocialLinkProps } from '@/modals/SocialLinkModal'
import Link from 'next/link'
import React from 'react'

const SocialLinkItem = ({ icon, href }: ISocialLinkProps) => {
    return (
        <li><Link href={href} target="_blank">{icon}</Link></li>
    )
}

export default SocialLinkItem