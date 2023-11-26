import { Separator } from "@/components/ui/separator"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                </p>
            </div>
            <Separator />
        </div>
    )
}