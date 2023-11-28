import React from 'react'
import { DataMyMail } from '@/utils/constants'

const NavTopMail = () => {

    let _navMyMail = DataMyMail || null;
    if (_navMyMail.length <= 0) return <></>

    return <a className='text-sm' href={`"mailto:${_navMyMail}`}>{_navMyMail}</a>
}

export default NavTopMail