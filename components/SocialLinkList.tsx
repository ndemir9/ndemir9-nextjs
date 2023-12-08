import React from 'react'
import SocialLinkItem from './SocialLinkItem'
import { DataSocialLink } from '@/utils/constants'
import NullReactFragment from './NullReactFragment'

const SocialLinkList = () => {

  let _socialLinks = DataSocialLink || null
  if (_socialLinks.length <= 0) return <NullReactFragment />

  return (
    <div className='container pb-10'>
      <ul className='flex gap-4 items-center'>
        {
          _socialLinks.map((item) => (
            <SocialLinkItem key={item.id} icon={item.icon} href={item.href} name={item.name} />
          ))
        }
      </ul>
    </div>
  )
}

export default SocialLinkList