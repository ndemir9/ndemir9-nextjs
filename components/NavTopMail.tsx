import React from 'react'
import { DataMyMail } from '@/utils/constants'
import NullReactFragment from './NullReactFragment';

const NavTopMail = () => {

    let _navMyMail = DataMyMail || null;
    if (_navMyMail.length <= 0) return <NullReactFragment />

    return <a className='text-sm' href={`"mailto:${_navMyMail}`}>{_navMyMail}</a>
}

export default NavTopMail