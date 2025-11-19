import { Sidebar } from "@/components/dashboard/sidebar"
import { VoiceProvider } from "@/components/dashboard/voice-context"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <VoiceProvider>
            <div className="flex h-screen overflow-hidden bg-slate-950">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="mx-auto max-w-6xl">
                        {children}
                    </div>
                </main>
            </div>
        </VoiceProvider>
    )
}
