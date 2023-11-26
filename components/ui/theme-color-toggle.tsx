"use client"

import * as React from "react"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeColorToggle() {

    let themeColor: any = [
        {
            id: 1,
            colorname: "Zinc"
        },
        {
            id: 2,
            colorname: "Rose"
        },
        {
            id: 3,
            colorname: "Blue"
        },
    ]

    let themeColorValue: any = {
        background: "background",
        foreground: "foreground",
        card: "card",
        cardForeground: "card-foreground",
        popover: "popover",
        popoverForeground: "popover",
        primary: "primary",
        primaryForeground: "primary-foreground",
        secondary: "secondary",
        secondaryForeground: "secondary-foreground",
        muted: "muted",
        mutedForeground: "muted-foreground",
        accent: "accent",
        accentForeground: "accent-foreground",
        destructive: "destructive",
        destructiveForeground: "destructive-foreground",
        border: "border",
        input: "input",
        ring: "ring",
        radius: "radius",
    };


    let zincThemeColor: any = {
        background: " 0 0% 100%",
        foreground: " 240 10% 3.9%",
        card: " 0 0% 100%",
        cardForeground: " 240 10% 3.9%",
        popover: " 0 0% 100%",
        popoverForeground: " 240 10% 3.9%",
        primary: " 240 5.9% 10%",
        primaryForeground: " 0 0% 98%",
        secondary: " 240 4.8% 95.9%",
        secondaryForeground: " 240 5.9% 10%",
        muted: " 240 4.8% 95.9%",
        mutedForeground: " 240 3.8% 46.1%",
        accent: " 240 4.8% 95.9%",
        accentForeground: " 240 5.9% 10%",
        destructive: " 0 84.2% 60.2%",
        destructiveForeground: " 0 0% 98%",
        border: " 240 5.9% 90%",
        input: " 240 5.9% 90%",
        ring: " 240 5.9% 10%",
        radius: " 0.5rem",
        dark: {
            background: "240 10% 3.9%",
            foreground: "0 0% 98%",
            card: "240 10% 3.9%",
            cardForeground: "0 0% 98%",
            popover: "240 10% 3.9%",
            popoverForeground: "0 0% 98%",
            primary: "0 0% 98%",
            primaryForeground: "240 5.9% 10%",
            secondary: "240 3.7% 15.9%",
            secondaryForeground: "0 0% 98%",
            muted: "240 3.7% 15.9%",
            mutedForeground: "240 5% 64.9%",
            accent: "240 3.7% 15.9%",
            accentForeground: "0 0% 98%",
            destructive: "0 62.8% 30.6%",
            destructiveForeground: "0 0% 98%",
            border: "240 3.7% 15.9%",
            input: "240 3.7% 15.9%",
            ring: "240 4.9% 83.9%",
        }
    };

    const ChangeThemeColor = (colorname: string) => {
        if (colorname === "Zinc") {


            document.documentElement.style.setProperty("--background", zincThemeColor.background);
            document.documentElement.style.setProperty("--foreground", zincThemeColor.foreground);
            document.documentElement.style.setProperty("--card", zincThemeColor.card);
            document.documentElement.style.setProperty("--card-foreground", zincThemeColor.cardForeground);
            document.documentElement.style.setProperty("--popover", zincThemeColor.popover);
            document.documentElement.style.setProperty("--popover-foreground", zincThemeColor.popoverForeground);
            document.documentElement.style.setProperty("--primary", zincThemeColor.primary);
            document.documentElement.style.setProperty("--primary-foreground", zincThemeColor.primaryForeground);
            document.documentElement.style.setProperty("--secondary", zincThemeColor.secondary);
            document.documentElement.style.setProperty("--secondary-foreground", zincThemeColor.secondaryForeground);
            document.documentElement.style.setProperty("--muted", zincThemeColor.muted);
            document.documentElement.style.setProperty("--muted-foreground", zincThemeColor.mutedForeground);
            document.documentElement.style.setProperty("--accent", zincThemeColor.accent);
            document.documentElement.style.setProperty("--accent-foreground", zincThemeColor.accentForeground);
            document.documentElement.style.setProperty("--destructive", zincThemeColor.destructive);
            document.documentElement.style.setProperty("--destructive-foreground", zincThemeColor.destructiveForeground);
            document.documentElement.style.setProperty("--border", zincThemeColor.border);
            document.documentElement.style.setProperty("--input", zincThemeColor.input);
            document.documentElement.style.setProperty("--ring", zincThemeColor.ring);
            document.documentElement.style.setProperty("--radius", zincThemeColor.radius);


            let darkElement: any = document.querySelector('.dark');
            if (darkElement) {
                darkElement.style.setProperty("--background", zincThemeColor.dark.background);
                darkElement.style.setProperty("--foreground", zincThemeColor.dark.foreground);
                darkElement.style.setProperty("--card", zincThemeColor.dark.card);
                darkElement.style.setProperty("--card-foreground", zincThemeColor.dark.cardForeground);
                darkElement.style.setProperty("--popover", zincThemeColor.dark.popover);
                darkElement.style.setProperty("--popover-foreground", zincThemeColor.dark.popoverForeground);
                darkElement.style.setProperty("--primary", zincThemeColor.dark.primary);
                darkElement.style.setProperty("--primary-foreground", zincThemeColor.dark.primaryForeground);
                darkElement.style.setProperty("--secondary", zincThemeColor.dark.secondary);
                darkElement.style.setProperty("--secondary-foreground", zincThemeColor.dark.secondaryForeground);
                darkElement.style.setProperty("--muted", zincThemeColor.dark.muted);
                darkElement.style.setProperty("--muted-foreground", zincThemeColor.dark.mutedForeground);
                darkElement.style.setProperty("--accent", zincThemeColor.dark.accent);
                darkElement.style.setProperty("--accent-foreground", zincThemeColor.dark.accentForeground);
                darkElement.style.setProperty("--destructive", zincThemeColor.dark.destructive);
                darkElement.style.setProperty("--destructive-foreground", zincThemeColor.dark.destructiveForeground);
                darkElement.style.setProperty("--border", zincThemeColor.dark.border);
                darkElement.style.setProperty("--input", zincThemeColor.dark.input);
                darkElement.style.setProperty("--ring", zincThemeColor.dark.ring);
            }



        } else if (colorname === "Rose") {

        }
        else if (colorname === "Blue") {

        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Palette />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {
                    themeColor.map((item: any) => (
                        <DropdownMenuItem key={item.id} onClick={() => ChangeThemeColor(item.colorname)}>
                            {item.colorname}
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
