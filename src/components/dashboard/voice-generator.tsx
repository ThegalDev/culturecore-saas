"use client"

import { useState } from "react"
import { useVoice } from "@/components/dashboard/voice-context"
import { ARCHETYPES, CultureArchetype } from "@/lib/culture-data"
import { generateVoiceProfile, GeneratedVoice } from "@/lib/generator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select } from "@/components/ui/select"
import { Sparkles, Copy, Check } from "lucide-react"

export function VoiceGenerator() {
    const { selectedArchetypeId, setSelectedArchetypeId, generatedVoice, setGeneratedVoice } = useVoice()
    const [isGenerating, setIsGenerating] = useState(false)

    const handleGenerate = () => {
        if (!selectedArchetypeId) return
        setIsGenerating(true)

        // Simulate API delay
        setTimeout(() => {
            const archetype = ARCHETYPES.find(a => a.id === selectedArchetypeId)
            if (archetype) {
                setGeneratedVoice(generateVoiceProfile(archetype))
            }
            setIsGenerating(false)
        }, 800)
    }

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Define Your Archetype</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-navy-900">Select Culture Archetype</label>
                            <Select
                                value={selectedArchetypeId}
                                onChange={(e) => setSelectedArchetypeId(e.target.value)}
                            >
                                <option value="" disabled>Select an archetype...</option>
                                {ARCHETYPES.map((a) => (
                                    <option key={a.id} value={a.id}>{a.name}</option>
                                ))}
                            </Select>
                        </div>

                        {selectedArchetypeId && (
                            <div className="rounded-md bg-navy-50 p-4 text-sm text-navy-900/80">
                                {ARCHETYPES.find(a => a.id === selectedArchetypeId)?.description}
                            </div>
                        )}

                        <Button
                            className="w-full bg-gold-500 text-navy-900 hover:bg-gold-600"
                            onClick={handleGenerate}
                            disabled={!selectedArchetypeId || isGenerating}
                            isLoading={isGenerating}
                        >
                            <Sparkles className="mr-2 h-4 w-4" />
                            Generate Voice Standard
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                {generatedVoice ? (
                    <Card className="animate-fade-in border-gold-500/20 bg-white shadow-lg">
                        <CardHeader className="border-b border-navy-900/5 bg-navy-50/50">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xl">Brand Voice Standard</CardTitle>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-6">
                            <div>
                                <h4 className="mb-2 font-serif font-bold text-navy-900">Brand Personality</h4>
                                <p className="text-sm leading-relaxed text-navy-900/80">{generatedVoice.personality}</p>
                            </div>

                            <div>
                                <h4 className="mb-2 font-serif font-bold text-navy-900">Emotional Pillars</h4>
                                <ul className="list-inside list-disc space-y-1 text-sm text-navy-900/80">
                                    {generatedVoice.pillars.map((pillar, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: pillar.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-md bg-green-50 p-3">
                                    <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-green-800">Vocabulary: Use</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {generatedVoice.vocabulary.use.map((word, i) => (
                                            <span key={i} className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">{word}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-md bg-red-50 p-3">
                                    <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-red-800">Vocabulary: Avoid</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {generatedVoice.vocabulary.avoid.map((word, i) => (
                                            <span key={i} className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">{word}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="mb-2 font-serif font-bold text-navy-900">Example: Internal Email</h4>
                                <div className="rounded-md border border-navy-900/10 bg-navy-50 p-4 text-sm italic text-navy-900/70 whitespace-pre-wrap">
                                    {generatedVoice.examples.email}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="flex h-full min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-navy-900/10 bg-navy-50/30">
                        <div className="text-center text-navy-900/40">
                            <Sparkles className="mx-auto mb-4 h-8 w-8 opacity-50" />
                            <p>Select an archetype to generate your standard.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
