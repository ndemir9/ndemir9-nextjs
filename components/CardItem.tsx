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

const CardItem = () => {
    return (
        <Card className='defaultShadow'>
            <CardHeader>
                <div className='relative w-[100%] h-[200px] mb-4'>
                    <Image
                        src="https://user-images.githubusercontent.com/73329877/247981435-cd62bcb3-2130-49ab-9c32-f3ce9534eb57.png"
                        fill
                        alt="Picture of the author"
                        className='rounded-sm'
                    />
                </div>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-2 gap-2 items-center'>
                    <Button>Live Demo</Button>
                    <Button variant="secondary">Source Code</Button>
                </div>
            </CardContent>
        </Card>

    )
}

export default CardItem