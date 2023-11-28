"use client"
import * as React from "react"
import { CaseSensitive } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { nanoid } from "nanoid"
import { setStorage } from "@/utils/localstroge"

export function ThemeFontSizeToggle() {
    let themefontsize: any = null;
    React.useEffect(() => {
        try {
            themefontsize = localStorage.getItem('themefontsize') || "16";
            if (themefontsize) {
                document.documentElement.style.setProperty('--text-fs-body', `${themefontsize}px`);
            }
        } catch (error) {
            console.error('Error setting font size:', error);
        }
    }, []);


    let themeFontSizeData = [
        {
            id: nanoid(),
            name: "sm",
            size: "14",
        },
        {
            id: nanoid(),
            name: "md",
            size: "16",
        },
        {
            id: nanoid(),
            name: "lg",
            size: "18",
        },
        {
            id: nanoid(),
            name: "xl",
            size: "20",
        },
    ]


    const handleChangeThemeFontSize = (name: string) => {
        themeFontSizeData.map(item => {
            if (item.name == name) {
                document.documentElement.style.setProperty('--text-fs-body', item.size + 'px');
                setStorage("themefontsize", item.size)
            }
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <CaseSensitive />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {
                    themeFontSizeData.map((item: any) => (
                        <DropdownMenuItem key={item.id} onClick={() => handleChangeThemeFontSize(item.name)}>
                            {item.name}
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
