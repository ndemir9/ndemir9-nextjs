import React from 'react'
import { DataMyMail } from '@/utils/constants'

const NavTopMail = () => {
    return <a className='text-sm hover:text-[hsl(var(--primary))] transition' href={`"mailto:${DataMyMail}`}>{DataMyMail}</a>
}

export default NavTopMail