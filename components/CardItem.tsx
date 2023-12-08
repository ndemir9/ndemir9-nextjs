import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from './ui/button'
import { Badge } from "@/components/ui/badge"
const CardItem = () => {

    let cardTitle: string = "Card Title"
    let cardDescription: string = "Card Description"

    let liveDemoBtn: React.JSX.Element = <Button>Live Demo</Button>
    let sourceCodedBtn: React.JSX.Element = <Button variant="secondary">Source Code</Button>

    let img: React.JSX.Element = <Image
        src="https://user-images.githubusercontent.com/73329877/247981435-cd62bcb3-2130-49ab-9c32-f3ce9534eb57.png"
        fill
        alt="Picture of the author"
        className='rounded-sm'
    />


    return (
        <Card className='defaultShadow border-none'>
            <CardHeader>
                <div className='relative w-[100%] h-[200px]'>
                    {img}
                </div>
                <div className="flex flex-wrap gap-1 py-2">
                    <Badge>Badge</Badge>
                    <Badge>Badge</Badge>
                </div>
                <CardTitle>{cardTitle}</CardTitle>
                <CardDescription>{cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-2 gap-2 items-center'>
                    {liveDemoBtn}
                    {sourceCodedBtn}
                </div>
            </CardContent>
        </Card>

    )
}

export default CardItem