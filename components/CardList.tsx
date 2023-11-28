import React from 'react'
import CardItem from './CardItem'

const CardList = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}

export default CardList