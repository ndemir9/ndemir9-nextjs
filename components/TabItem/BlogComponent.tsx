import React from 'react'
import CardList from '../CardList'
import { Button } from '../ui/button'

const BlogComponent = () => {
  return (
    <div>
      <CardList />
      <div className='text-center'>
        <Button className='px-20 py-10' variant="link">see all</Button>
      </div>
    </div >
  )
}

export default BlogComponent