"use client"

import { useState } from "react"
import Link from "next/link"
import { useVoice } from "@/components/dashboard/voice-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, RefreshCw, Check, Sparkles } from "lucide-react"

export function DocumentRewriter() {
    const { generatedVoice } = useVoice()
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [isRewriting, setIsRewriting] = useState(false)

    const handleRewrite = () => {
        if (!input || !generatedVoice) return
        setIsRewriting(true)

        // Simulate API delay and rewriting
        setTimeout(() => {
            // Enhanced mock rewrite: use vocabulary from the generated voice
            let rewritten = input

            // Simple replacement logic for demo purposes
            // In a real app, this would be an LLM call with the voice profile as context
            const vocab = generatedVoice.vocabulary.use
            const personality = generatedVoice.personality

            // Inject some "fluff" based on the voice
            const intro = vocab.length > 0 ? `To ${vocab[0].toLowerCase()} our vision, ` : ""
            const outro = vocab.length > 1 ? ` Let's ${vocab[1].toLowerCase()} and ${vocab[2].toLowerCase()} together.` : ""

            rewritten = `${intro}${rewritten}${outro}`

            setOutput(rewritten)
            setIsRewriting(false)
        }, 1000)
    }

    if (!generatedVoice) {
        return (
            <div className="flex h-[calc(100vh-12rem)] items-center justify-center">
                <div className="text-center max-w-md p-8 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                    <Sparkles className="mx-auto mb-4 h-12 w-12 text-cyan-400 opacity-50" />
                    <h3 className="mb-2 text-xl font-bold text-white">No Voice Standard Detected</h3>
                    <p className="mb-6 text-slate-400">
                        You need to generate a Brand Voice Standard before you can use the Document Studio.
                    </p>
                    <Link href="/dashboard">
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                            Go to Voice Architect
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="grid gap-6 lg:grid-cols-2 h-[calc(100vh-12rem)]">
            <Card className="flex flex-col bg-slate-900 border-slate-800">
                <CardHeader>
                    <CardTitle className="text-lg text-white">Original Draft</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                    <Textarea
                        className="flex-1 resize-none p-4 text-base bg-slate-950 border-slate-800 text-slate-300 focus:border-cyan-500/50"
                        placeholder="Paste your draft here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button
                        onClick={handleRewrite}
                        disabled={!input || isRewriting}
                        isLoading={isRewriting}
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                    >
                        {isRewriting ? "Rewriting..." : "Rewrite Document"}
                        {!isRewriting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                </CardContent>
            </Card>

            <Card className="flex flex-col bg-slate-950 border-slate-800">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-cyan-400">Refined Output</CardTitle>
                        {output && (
                            <span className="flex items-center text-xs font-medium text-green-400">
                                <Check className="mr-1 h-3 w-3" /> Tone Matched: {generatedVoice.personality.split("**")[1]}
                            </span>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="flex-1">
                    {output ? (
                        <div className="h-full rounded-md border border-cyan-500/20 bg-cyan-950/10 p-4 text-base leading-relaxed text-slate-300 animate-fade-in">
                            {output}
                        </div>
                    ) : (
                        <div className="flex h-full items-center justify-center text-slate-600">
                            <p className="text-sm italic">Refined content will appear here...</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
