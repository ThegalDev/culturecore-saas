import { VoiceGenerator } from "@/components/dashboard/voice-generator"

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-navy-900">Voice Architect</h1>
                <p className="text-navy-900/60">Define and generate your corporate brand voice standard.</p>
            </div>

            <VoiceGenerator />
        </div>
    )
}
