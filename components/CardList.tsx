import React from 'react'
import CardItem from './CardItem'

const CardList = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-8'>
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}

export default CardList