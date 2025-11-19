"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { GeneratedVoice } from "@/lib/generator"

interface VoiceContextType {
    selectedArchetypeId: string
    setSelectedArchetypeId: (id: string) => void
    generatedVoice: GeneratedVoice | null
    setGeneratedVoice: (voice: GeneratedVoice | null) => void
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined)

export function VoiceProvider({ children }: { children: ReactNode }) {
    const [selectedArchetypeId, setSelectedArchetypeId] = useState<string>("")
    const [generatedVoice, setGeneratedVoice] = useState<GeneratedVoice | null>(null)

    return (
        <VoiceContext.Provider
            value={{
                selectedArchetypeId,
                setSelectedArchetypeId,
                generatedVoice,
                setGeneratedVoice,
            }}
        >
            {children}
        </VoiceContext.Provider>
    )
}

export function useVoice() {
    const context = useContext(VoiceContext)
    if (context === undefined) {
        throw new Error("useVoice must be used within a VoiceProvider")
    }
    return context
}
