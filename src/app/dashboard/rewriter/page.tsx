import { DocumentRewriter } from "@/components/dashboard/document-rewriter"

export default function RewriterPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-navy-900">Document Studio</h1>
                <p className="text-navy-900/60">Rewrite internal communications to align with your Brand Voice Standard.</p>
            </div>

            <DocumentRewriter />
        </div>
    )
}
