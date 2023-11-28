import { DataMyTitle } from '@/utils/constants'
import React from 'react'

const MyTitle = () => {
  let _myTitle = DataMyTitle || null
  if (!_myTitle) return <></>;
  return (
    <div className='container py-10'>
      <h1 className='width-[94%] max-w-[768px] text-3xl lg:text-4xl xl:text-5xl myTitleHeader font-semibold' dangerouslySetInnerHTML={{ __html: _myTitle }} />
    </div>
  )
}

export default MyTitle