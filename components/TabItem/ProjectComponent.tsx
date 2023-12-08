import React from 'react'
import CardList from '../CardList'
import { Button } from '../ui/button'
import CardItem from '../CardItem'

const ProjectComponent = () => {

  let seeAllBtn: React.JSX.Element = <Button className='px-20 py-10' variant="link">see all</Button>

  return (
    <>
      <CardList>
        <CardItem />
      </CardList>
      <div className='text-center'>
        {seeAllBtn}
      </div>
    </>
  )
}

export default ProjectComponent