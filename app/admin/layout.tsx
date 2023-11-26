import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/app/admin/components/sidebar-nav"
import { AdminHeader } from "@/app/admin/components/AdminHeader"

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard",
}

const sidebarNavItems = [
    {
        title: "Dashboard",
        href: "/admin",
    },
    {
        title: "Settings",
        href: "/admin/settings",
    }
]

interface AdminLayoutProps {
    children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="w-[94%] max-w-7xl mx-auto">
            <div className="space-y-6 p-10 pb-16">
                <AdminHeader />
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </div>
    )
}