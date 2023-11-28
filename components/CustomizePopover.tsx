import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Paintbrush } from 'lucide-react'
import { ThemeFontSizeToggle } from './ThemeFontSizeToggle'
import { ModeToggle } from './ui/mode-toggle'
import { Button } from './ui/button'


const CustomizePopover = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className='flex items-center gap-2'><Paintbrush /> Customize</Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto flex items-center gap-3">
                <ThemeFontSizeToggle />
                <ModeToggle />
            </PopoverContent>
        </Popover>
    )
}

export default CustomizePopover