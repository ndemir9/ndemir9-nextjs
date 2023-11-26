import { DataMyTitle } from '@/utils/constants'
import React from 'react'

const MyTitle = () => {
  if (!DataMyTitle) return null;
  return (
    <div className='container'>
      <h1 className='width-[94%] max-w-[768px] my-10 text-3xl lg:text-4xl xl:text-5xl myTitleHeader font-semibold' dangerouslySetInnerHTML={{ __html: DataMyTitle }} />
    </div>
  )
}

export default MyTitle