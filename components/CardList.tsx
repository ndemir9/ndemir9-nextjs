import React from 'react'

interface IProps {
    children: React.ReactNode,
    colItemCount?: string
}

const CardList = ({ children, colItemCount }: IProps) => {

    let gridcolClass: string;
    if (colItemCount) gridcolClass = "lg:grid-cols-" + colItemCount
    else gridcolClass = "lg:grid-cols-3"

    return (
        <div className={`grid gap-8 ${gridcolClass}`}>{children}</div>
    )
}

export default CardList