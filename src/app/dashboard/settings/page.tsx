import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-navy-900">Settings</h1>
                <p className="text-navy-900/60">Manage your enterprise profile and preferences.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-navy-900/60">Settings functionality coming soon...</p>
                </CardContent>
            </Card>
        </div>
    )
}
