import { CultureArchetype } from "./culture-data";

export interface GeneratedVoice {
    personality: string;
    pillars: string[];
    vocabulary: {
        use: string[];
        avoid: string[];
    };
    guidelines: string[];
    examples: {
        email: string;
        announcement: string;
        social: string;
    };
}

export function generateVoiceProfile(archetype: CultureArchetype): GeneratedVoice {
    // Enhanced logic to generate specific content based on archetype ID

    const isFormal = ["traditional-corporate", "government-regulated", "luxury-high-end", "direct-data"].includes(archetype.id);
    const isCasual = ["fast-startup", "tech-forward", "playful-humorous", "creative-artistic"].includes(archetype.id);
    const isEmpathetic = ["warm-family", "non-profit", "purpose-driven", "customer-centric"].includes(archetype.id);

    // Specific vocabulary maps
    const vocabMap: Record<string, { use: string[], avoid: string[] }> = {
        "tech-forward": {
            use: ["Sync", "Iterate", "Ship", "Blocker", "Bandwidth", "Ping", "Deployment"],
            avoid: ["Memorandum", "Henceforth", "Facilitate", "Synergy", "Paradigm"]
        },
        "traditional-corporate": {
            use: ["Strategic", "Objective", "Stakeholder", "Deliverable", "Protocol", "Compliance"],
            avoid: ["Awesome", "Cool", "Stuff", "Hang out", "No worries"]
        },
        "warm-family": {
            use: ["Together", "Support", "Care", "Family", "Growth", "Nurture", "Belonging"],
            avoid: ["Resource", "Headcount", "Terminate", "Mandatory", "Execute"]
        },
        "luxury-high-end": {
            use: ["Exquisite", "Curated", "Timeless", "Exceptional", "Privilege", "Bespoke"],
            avoid: ["Cheap", "Deal", "Fix", "Okay", "Nice"]
        }
    };

    // Default fallbacks
    const defaultVocab = {
        use: isFormal
            ? ["Ensure", "Maintain", "Standard", "Quality", "Professional"]
            : ["Connect", "Build", "Create", "Share", "Help"],
        avoid: isFormal
            ? ["Slang", "Jargon", "Casualisms"]
            : ["Legalese", "Complexity", "Rigidity"]
    };

    const selectedVocab = vocabMap[archetype.id] || defaultVocab;

    return {
        personality: `The brand voice is **${archetype.name}**. It embodies ${archetype.traits.join(", ").toLowerCase()}. ${archetype.description}`,
        pillars: archetype.traits.map(t => `**${t}**: We demonstrate ${t.toLowerCase()} in every interaction.`),
        vocabulary: selectedVocab,
        guidelines: [
            `Always prioritize **${archetype.traits[0]}** in your opening statements.`,
            `Use ${isFormal ? "complete sentences and proper grammar" : "contractions and conversational flow"}.`,
            `Avoid ${isFormal ? "slang and emojis" : "passive voice and jargon"}.`,
            `Ensure the tone remains **${archetype.traits[1]}** even when delivering bad news.`
        ],
        examples: {
            email: isFormal
                ? "Dear Team,\n\nPlease be advised that the quarterly review is scheduled for Friday. Your attendance is required to ensure alignment with our strategic objectives.\n\nRegards,\nManagement"
                : isCasual
                    ? "Hey team! 🚀\n\nJust a heads up—quarterly review is this Friday. Let's sync up and crush our goals. Can't wait to see what you've built!\n\nCheers,\nLeadership"
                    : "Hi everyone,\n\nWe're looking forward to coming together this Friday for our quarterly review. It's a great chance to share our journey and support each other's growth.\n\nBest,\nThe Team",
            announcement: isFormal
                ? "We are pleased to announce the launch of our new initiative. This project represents a significant milestone in our commitment to excellence."
                : isCasual
                    ? "Big news! 🎉 We just launched something huge. Check it out and let us know what you think!"
                    : "We're so happy to share something special with you. This new step brings us closer to our shared vision.",
            social: isFormal
                ? "We are honored to be recognized as an industry leader. #Excellence #Leadership"
                : isCasual
                    ? "We did it! 🏆 So stoked to share this win with you all. #Winning #TeamWork"
                    : "Grateful for this recognition. It wouldn't be possible without our amazing community. 💙 #Gratitude #Community"
        }
    };
}
